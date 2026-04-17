import { useState, useEffect } from 'react';

interface Props {
  images: string[];
  stationary?: boolean;
  grayscale?: boolean;
}

export default function Carousel({
  images,
  stationary = false,
  grayscale = true,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(stationary);

  const next = () => {
    setCurrent((i) => (i + 1) % images.length);
  };

  const prev = () => {
    setCurrent((i) => (i - 1 + images.length) % images.length);
  };

  // Remove "/public" since images are served from the root by default
  const imageUrls = images.map((image) => {
    return image.split('public').pop();
  });

  const handlePause = () => {
    if (stationary) return;
    setPaused((prev) => !prev);
  };

  // Advance carousel every 5 seconds
  useEffect(() => {
    // Future Improvement: save delay on pause and then use that when resuming
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, current, paused]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-xl ${grayscale ? 'bg-gray-500' : 'bg-bg'}`}
    >
      {imageUrls.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`Carousel ${i + 1}`}
          onClick={handlePause}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            grayscale && 'grayscale'
          } select-none ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-bg/80 p-1 rounded-full">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`size-2 rounded-full transition-colors ${
              i === current ? 'bg-text' : 'bg-text-muted'
            }`}
          />
        ))}
      </div>
      {stationary && (
        <>
          <div
            onClick={next}
            className="absolute right-1 bottom-1/2 translate-y-1/2 z-20 bg-bg/80 p-1 rounded-full flex items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-text hover:text-text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div
            onClick={prev}
            className="absolute left-1 bottom-1/2 translate-y-1/2 z-20 bg-bg/80 p-1 rounded-full flex items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-text hover:text-text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
        </>
      )}
      {paused && !stationary && (
        <div
          onClick={() => setPaused(false)}
          className="absolute top-1 right-1 gap-2 z-20 bg-bg/80 p-1 rounded-full flex items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-text hover:text-text-secondary"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
