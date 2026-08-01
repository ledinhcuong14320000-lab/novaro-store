"use client";

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="inline-flex items-center border border-border rounded-md">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-9 w-9 flex items-center justify-center text-cream hover:text-gold transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={value <= min}
      >
        −
      </button>
      <span className="h-9 w-10 flex items-center justify-center text-sm border-x border-border tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="h-9 w-9 flex items-center justify-center text-cream hover:text-gold transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}
