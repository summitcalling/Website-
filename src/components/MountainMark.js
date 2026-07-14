export default function MountainMark({ className = "" }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 25L11 10l5 7 3-4 11 12H2z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M11 10l2.4 3.4-2.4 2-2-3z"
        fill="var(--color-orange)"
      />
    </svg>
  );
}
