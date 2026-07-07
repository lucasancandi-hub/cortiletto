export default function SectionDivider() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center">
      <div className="h-px w-2/3 max-w-3xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute h-8 w-40 -translate-y-1/2 rounded-full bg-gold/20 blur-2xl" />
    </div>
  );
}
