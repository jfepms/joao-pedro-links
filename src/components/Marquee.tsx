import { profile } from "../config";

const words = [profile.name, "Links", profile.handle];

export function Marquee() {
  const row = (hidden?: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center gap-8 pr-8">
      {[...words, ...words, ...words].map((w, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className={i % 2 ? "font-serif text-3xl italic sunset-text pr-1" : "font-display text-2xl font-semibold uppercase tracking-wide"}>
            {w}
          </span>
          <span className="text-peach">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative flex overflow-hidden border-y border-bone/10 py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee flex">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
