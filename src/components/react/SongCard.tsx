import { useState, useEffect, useCallback, useRef } from 'react';
import ProgressBar from './ProgressBar';

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
  const [lastSyncedAt, setLastSyncedAt] = useState(0);
  const requestInFlight = useRef(false);

  const getSong = useCallback(async () => {
    if (requestInFlight.current) return;

    requestInFlight.current = true;

    try {
      const response = await fetch('https://api.kygle.xyz/api/song');
      const data: SpotifyData = await response.json();
      console.log(data);

      setCurrentSong(data);
      setLastSyncedAt(Date.now());
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
      setLastSyncedAt(Date.now());
      console.error(e);
    } finally {
      requestInFlight.current = false;
    }
  }, []);

  useEffect(() => {
    getSong();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        getSong();
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);

    return () =>
      window.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [getSong]);

  useEffect(() => {
    if (!currentSong || !lastSyncedAt) return;

    const timeRemaining = currentSong.Playing
      ? Math.max(currentSong.Duration - currentSong.Progress + 500, 5000)
      : 60000;

    const timeout = setTimeout(() => {
      getSong();
    }, timeRemaining);

    return () => clearTimeout(timeout);
  }, [currentSong?.Playing, currentSong?.Duration, lastSyncedAt, getSong]);

  useEffect(() => {
    if (!currentSong?.Playing) return;

    const interval = setInterval(() => {
      setCurrentSong((prev) => {
        if (!prev) return prev;

        if (prev.Progress >= prev.Duration) return prev;

        return {
          ...prev,
          Progress: Math.min(prev.Progress + 100, prev.Duration),
        };
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentSong?.Playing]);

  const artistText = currentSong?.SongArtists.join(', ');

  return (
    <div className="max-w-full overflow-hidden p-4 bg-bg-secondary border-2 border-border rounded-2xl text-text">
      <div className="flex flex-col sm:flex-row items-center gap-4 min-w-0">
        <img
          src={currentSong?.AlbumArt}
          alt={currentSong?.Album}
          className={`w-96 sm:size-28 shrink-0 rounded-2xl select-none ${!currentSong?.Playing && 'opacity-50s'}`}
        />
        <div className="w-full min-w-0 flex-1">
          <div className="relative min-w-0">
            <h1 className="no-scrollbar overflow-x-auto whitespace-nowrap pr-10 text-2xl">
              {currentSong?.SongName}
            </h1>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-bg-secondary from-50% to-transparent" />
          </div>
          <div className="relative min-w-0 mb-2">
            <p className="no-scrollbar overflow-x-auto whitespace-nowrap pr-10 font-sans text-text-secondary text-lg">
              {artistText}
            </p>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-bg-secondary from-50% to-transparent" />
          </div>
          <ProgressBar
            progress={currentSong?.Progress ?? 0}
            duration={currentSong?.Duration ?? 0}
            playing={currentSong?.Playing ?? false}
          />
        </div>
      </div>
    </div>
  );
}
