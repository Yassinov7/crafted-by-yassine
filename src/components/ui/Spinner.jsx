export default function Spinner({ size = 24 }) {
  return (
    <div
      className="animate-spin rounded-full border-2 border-t-transparent"
      style={{
        width: size,
        height: size,
        borderColor: 'var(--color-accent)',
      }}
    />
  );
}
