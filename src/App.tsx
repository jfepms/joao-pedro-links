import { motion } from "motion/react";
import { links, profile } from "./config";
import { IdCard } from "./components/IdCard";
import { LinkRow } from "./components/LinkRow";
import { Marquee } from "./components/Marquee";
import { ShareButton } from "./components/ShareButton";

// Assinatura opcional do rodapé, carregada de personal/Signature.tsx se existir.
const Signature = Object.values(
  import.meta.glob<React.ComponentType>("../personal/Signature.tsx", { eager: true, import: "Signature" }),
)[0];

export default function App() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden">
      {/* Céu de pôr do sol: brilho no topo + horizonte embaixo + granulado */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-plum)_35%,transparent),transparent)] blur-2xl" />
        <div className="absolute -top-24 left-[62%] h-[360px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-peach)_22%,transparent),transparent)] blur-2xl" />
        <div className="absolute -top-24 left-[38%] h-[360px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-dusk)_30%,transparent),transparent)] blur-2xl" />
        <div className="absolute -bottom-56 left-1/2 h-[420px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-peach)_14%,transparent),transparent)] blur-2xl" />
        <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      </div>

      <ShareButton />

      <main className="mx-auto flex w-full max-w-[480px] flex-1 flex-col justify-center gap-8 px-4 pt-20 pb-12">
        <IdCard />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-center text-lg text-bone/70"
        >
          {profile.bio}{" "}
          <em className="sunset-text pr-1 font-serif text-[1.4em] leading-none">{profile.bioHighlight}</em>
        </motion.p>

        <nav aria-label="Links">
          <ul className="flex flex-col gap-1">
            {links.map((link, i) => (
              <LinkRow key={link.href} link={link} index={i} />
            ))}
          </ul>
        </nav>
      </main>

      <footer>
        <Marquee />
        {Signature ? <Signature /> : <div className="py-5" />}
      </footer>
    </div>
  );
}
