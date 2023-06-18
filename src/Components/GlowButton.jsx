export default function ({ onClick, children }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-bright_accent to-accent py-3 shadow-[0_0_64px_0] shadow-glow_accent"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
