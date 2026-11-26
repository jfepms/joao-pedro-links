import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";
import { profile } from "../config";

// Código de barras gerado a partir do @ — sempre igual para o mesmo texto.
function barcode(seed: string) {
  const bars: number[] = [];
  let h = 7;
  for (let i = 0; i < 46; i++) {
    h = (h * 31 + seed.charCodeAt(i % seed.length)) % 997;
    bars.push((h % 3) + 1);
  }
  return bars;
}

export function IdCard() {
  // Inclinação 3D + reflexo holográfico que segue o mouse
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 18 });
  const sy = useSpring(py, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-10, 10]);
  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const glareX = useTransform(sx, (v) => `${v * 100}%`);
  const glareY = useTransform(sy, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.16), transparent 45%)`;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 18 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="[perspective:1000px]"
    >
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-[28px] border border-bone/10 bg-[#121119] shadow-[0_30px_80px_-30px] shadow-plum/60"
      >
        {/* Faixa superior em degradê */}
        <div className="sunset flex items-center justify-between px-5 py-2.5 font-mono text-[11px] font-medium tracking-[0.2em] text-ink uppercase">
          <span>Passe · Links</span>
          <span>Nº 0001</span>
        </div>

        <div className="flex items-center gap-5 p-5">
          {/* Foto com moldura em degradê */}
          <div className="sunset-flow shrink-0 rounded-[20px] p-[2px]">
            <div className="size-24 overflow-hidden rounded-[18px] bg-ink">
              {profile.photo ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  width={96}
                  height={96}
                  className="size-full object-cover"
                />
              ) : (
                <span className="sunset-text grid size-full place-items-center font-display text-3xl font-semibold">
                  {profile.initials}
                </span>
              )}
            </div>
          </div>

          <dl className="min-w-0 space-y-2.5">
            <div>
              <dt className="font-mono text-[10px] tracking-[0.2em] text-bone/40 uppercase">Nome</dt>
              <dd className="truncate font-display text-[26px] leading-tight font-semibold">{profile.name}</dd>
            </div>
            <div className="flex gap-6">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-bone/40 uppercase">Usuário</dt>
                <dd className="font-mono text-sm text-bone/85">{profile.handle}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-bone/40 uppercase">Links</dt>
                <dd className="font-mono text-sm text-bone/85">{String(profile.links.length).padStart(2, "0")}</dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Rodapé: código de barras */}
        <div className="flex items-end justify-between gap-4 border-t border-dashed border-bone/10 px-5 pt-3 pb-4">
          <div aria-hidden className="flex h-8 items-stretch gap-[2px] opacity-70">
            {barcode(profile.handle).map((w, i) => (
              <span key={i} className="bg-bone" style={{ width: w }} />
            ))}
          </div>
          <span className="font-serif text-2xl leading-none text-bone/80 italic">Vice&nbsp;Links</span>
        </div>

        {/* Reflexo holográfico */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: glare }} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgb(227_153_134/0.08)_45%,rgb(130_96_146/0.1)_52%,transparent_62%)]"
        />
      </motion.div>
    </motion.div>
  );
}
