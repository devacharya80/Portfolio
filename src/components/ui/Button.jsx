export default function Button({ href, children, variant = "dark", className = "", ...props }) {
  const styles = variant === "dark" ? "border-dark bg-dark text-white" : "border-line bg-surface text-ink";
  return (
    <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
