type AmbientGlowProps = {
  className?: string;
};

export default function AmbientGlow({ className = "" }: AmbientGlowProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[110px] motion-safe:animate-[drift-a_20s_ease-in-out_infinite]" />
      <div className="absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-ember/15 blur-[110px] motion-safe:animate-[drift-b_24s_ease-in-out_infinite]" />
    </div>
  );
}
