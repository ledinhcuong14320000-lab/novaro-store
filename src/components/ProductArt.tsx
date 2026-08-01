import type { ReactElement } from "react";
import type { CategoryId } from "@/lib/products";

function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const categoryIcon: Record<CategoryId, (props: { className?: string }) => ReactElement> = {
  shirts: ({ className }) => (
    <path
      className={className}
      d="M35 20 L42 14 L50 20 L58 14 L65 20 L72 30 L64 36 L64 82 L36 82 L36 36 L28 30 Z M42 14 L50 24 L58 14"
      fill="none"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  polos: ({ className }) => (
    <path
      className={className}
      d="M36 22 L42 15 L50 22 L50 30 L44 30 L44 20 M50 22 L58 15 L64 22 L72 30 L64 36 L64 82 L36 82 L36 36 L28 30 Z"
      fill="none"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  trousers: ({ className }) => (
    <path
      className={className}
      d="M34 16 H66 L68 46 L60 84 L52 84 L50 48 L48 84 L40 84 L32 46 Z"
      fill="none"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  outerwear: ({ className }) => (
    <path
      className={className}
      d="M50 14 L58 20 L66 16 L78 28 L70 38 L66 34 L66 84 H34 L34 34 L30 38 L22 28 L34 16 L42 20 Z M42 20 L50 30 L58 20"
      fill="none"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  footwear: ({ className }) => (
    <path
      className={className}
      d="M24 66 C24 58 30 54 38 54 C42 54 44 50 44 44 L44 34 C44 30 47 28 50 30 L58 40 C64 48 70 50 76 52 C80 53 80 60 80 64 C80 68 78 70 74 70 L28 70 C25 70 24 68 24 66 Z"
      fill="none"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  accessories: ({ className }) => (
    <>
      <rect x="30" y="42" width="40" height="16" rx="3" fill="none" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="5" fill="none" strokeWidth="1.5" />
    </>
  ),
};

export function ProductArt({
  seed,
  category,
  className = "",
}: {
  seed: string;
  category: CategoryId;
  ariaLabel?: string;
  className?: string;
}) {
  const h = hashString(seed);
  const hueShift = (h % 20) - 10;
  const glowX = 20 + (h % 60);
  const glowY = 15 + ((h >> 3) % 50);
  const Icon = categoryIcon[category];
  const gradId = `novaro-grad-${seed}`;
  const glowId = `novaro-glow-${seed}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-hidden="true"
      style={{ filter: `hue-rotate(${hueShift}deg)` }}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#241d13" />
          <stop offset="100%" stopColor="#14110d" />
        </linearGradient>
        <radialGradient id={glowId} cx={`${glowX}%`} cy={`${glowY}%`} r="65%">
          <stop offset="0%" stopColor="#c9a455" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#c9a455" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" fill={`url(#${gradId})`} />
      <rect x="0" y="0" width="100" height="100" fill={`url(#${glowId})`} />
      <rect x="3" y="3" width="94" height="94" fill="none" stroke="#3a2f20" strokeWidth="0.5" />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="70"
        fontFamily="Georgia, serif"
        fill="#f3ecdd"
        opacity="0.04"
      >
        N
      </text>
      <g transform="translate(0,-4)" stroke="#c9a455" opacity="0.85">
        <Icon />
      </g>
    </svg>
  );
}
