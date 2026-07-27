interface ProgressBarProps {
  progress: number;
  duration: number;
  playing: boolean;
}

export default function ProgressBar({
  progress,
  duration,
  playing,
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), duration);
  const percent =
    duration > 0 ? Math.min((clampedProgress / duration) * 100, 100) : 0;
  const durationSeconds = Math.ceil(duration / 1000);
  const elapsedSeconds = Math.min(
    Math.floor(clampedProgress / 1000),
    durationSeconds,
  );
  const remainingSeconds = Math.max(durationSeconds - elapsedSeconds, 0);

  return (
    <div className="w-full select-none">
      {/* Time labels */}
      <div
        className={`mb-2 flex items-center justify-between font-sans text-sm ${!playing && 'text-text-secondary'}`}
      >
        <div className="flex flex-row gap-2 items-center">
          <p>{formatSeconds(elapsedSeconds)}</p>
          {!playing && <span>(Paused)</span>}
        </div>
        <p>-{formatSeconds(remainingSeconds)}</p>
      </div>

      {/* Progress bar */}
      <div
        className={`relative h-2 w-full rounded-full bg-linear-to-r from-primary to-secondary ${!playing && 'grayscale-50'}`}
      >
        <div
          className={`absolute top-0 right-0 h-full ${elapsedSeconds ? 'rounded-r-full' : 'rounded-full'} bg-bg transition-all`}
          style={{ width: `${100 - percent}%` }}
        />
      </div>
    </div>
  );
}

function formatSeconds(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
