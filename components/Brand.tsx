export function Brand({ compact = false }: { compact?: boolean }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`} aria-label="Codense">
      <span
        className="brand__asset"
        aria-hidden="true"
        style={{ backgroundImage: `url("${basePath}/codense-logo.png")` }}
      />
    </span>
  );
}
