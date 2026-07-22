import { useState, useEffect } from 'react';

interface SpotifyData {
  SongName: string;
  SongArtists: string[];
  Album: string;
  AlbumArt: string;
  Progress: number;
  Duration: number;
  Playing: boolean;
}

export default function SongCard() {
  const [currentSong, setCurrentSong] = useState<SpotifyData>();

  const makeRequest = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/song');
      const data: SpotifyData = await response.json();
      console.log(data);

      setCurrentSong(data);
    } catch (e) {
      // fallback to something like kyle is an idiot
      const data: SpotifyData = {
        SongName: 'Kyle is an Idiot',
        SongArtists: ['Kyle Carey'],
        Album: 'Uh Oh',
        AlbumArt: '/images/uh-oh.png',
        Progress: 0,
        Duration: 1000,
        Playing: false,
      };
      setCurrentSong(data);
      console.error(e);
    }
  };

  useEffect(() => {
    makeRequest();
  }, []);

  useEffect(() => {
    if (!currentSong?.Playing) return;

    const timeRemaining = currentSong.Duration - currentSong.Progress;

    const timeout = setTimeout(() => {
      makeRequest(); // fetch the next song
    }, timeRemaining); // small buffer

    return () => clearTimeout(timeout);
  }, [currentSong]);

  useEffect(() => {
    if (!currentSong?.Playing) return;

    const interval = setInterval(() => {
      setCurrentSong((prev) => {
        if (!prev) return prev;

        return {
          ...prev,
          Progress: Math.min(prev.Progress + 1000, prev.Duration),
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentSong?.Playing]);

  return (
    <div className="font-sans">
      <h1>{currentSong?.SongName}</h1>
      <h1>{currentSong?.Album}</h1>
      <div className="flex flex-row gap-4">
        {currentSong?.SongArtists.map((artist) => {
          return <p key={artist}>{artist}</p>;
        })}
      </div>
      <div className="flex flex-row gap-2">
        <p>{formatTime(currentSong?.Progress ?? 0)}</p>
        <p>/</p>
        <p>{formatTime(currentSong?.Duration ?? 0)}</p>
      </div>
      <img src={currentSong?.AlbumArt} className="size-56 rounded-2xl" />
    </div>
  );
}

function formatTime(time: number): string {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
