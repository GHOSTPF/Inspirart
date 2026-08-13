function rosettePath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  points: number
) {
  const step = (Math.PI * 2) / points;
  const start = -Math.PI / 2;
  const tip = (i: number) => {
    const a = start + step * i;
    return [cx + Math.cos(a) * outerR, cy + Math.sin(a) * outerR];
  };
  const ctrl = (i: number, frac: number) => {
    const a = start + step * i + step * frac;
    return [cx + Math.cos(a) * innerR, cy + Math.sin(a) * innerR];
  };

  const [x0, y0] = tip(0);
  let d = `M ${x0} ${y0}`;
  for (let i = 0; i < points; i++) {
    const [c1x, c1y] = ctrl(i, 0.25);
    const [c2x, c2y] = ctrl(i, 0.75);
    const [nx, ny] = tip(i + 1);
    d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${nx} ${ny}`;
  }
  d += " Z";
  return d;
}

export function Rosette({
  className,
  fill = "currentColor",
  points = 8,
  innerRatio = 0.62,
}: {
  className?: string;
  fill?: string;
  points?: number;
  innerRatio?: number;
}) {
  const d = rosettePath(50, 50, 48, 48 * innerRatio, points);
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill={fill}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
