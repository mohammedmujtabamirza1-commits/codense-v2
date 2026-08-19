export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`} aria-label="Codense">
      <span className="brand__asset" aria-hidden="true" />
    </span>
  );
}
