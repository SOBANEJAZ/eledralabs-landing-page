interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
  size?: string;
}

export function MaterialIcon({
  name,
  className = "",
  filled = false,
  size = "text-base",
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${size} ${className}`}
      style={{ fontVariationSettings: `'FILL' ${filled ? 1 : 0}` }}
    >
      {name}
    </span>
  );
}
