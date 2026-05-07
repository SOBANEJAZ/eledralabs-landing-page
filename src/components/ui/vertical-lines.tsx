interface VerticalLinesProps {
  className?: string;
  innerClassName?: string;
  lineCount?: number;
}

export function VerticalLines({
  className = "",
  innerClassName = "",
  lineCount = 11,
}: VerticalLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none inset-0 ${className}`}
    >
      <div className={`relative h-full w-full ${innerClassName}`}>
        {Array.from({ length: lineCount }).map((_, index) => (
          <span
            key={index}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${((index + 1) / 12) * 100}%`,
              backgroundColor: "rgba(17, 17, 17, 0.07)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
