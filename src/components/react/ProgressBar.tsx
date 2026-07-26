interface ProgressBarProps {
  progress: number;
  duration: number;
}

export default function ProgressBar({ progress, duration }: ProgressBarProps) {
  const percent = duration > 0 ? Math.min((progress / duration) * 100, 100) : 0;

  return (
    <div className="w-full">
      {/* Time labels */}
      <div className="mb-2 flex items-center justify-between font-sans text-sm">
        <p>{formatTime(progress)}</p>
        <p>-{formatTime(duration - progress)}</p>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 w-full rounded-full bg-linear-to-r from-primary to-secondary">
        <div
          className="absolute top-0 right-0 h-full rounded-r-full bg-bg transition-all"
          style={{ width: `${100 - percent}%` }}
        />
      </div>
    </div>
  );
}

function formatTime(time: number): string {
  const totalSeconds = Math.floor(time / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
