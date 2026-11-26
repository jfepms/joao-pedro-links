import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "../config";
import { Icon } from "./Icon";

export function LinkRow({ link, index }: { link: LinkItem; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="group relative flex items-center gap-4 overflow-hidden rounded-2xl px-4 py-5 transition-colors duration-300 active:scale-[0.99]"
      >
        {/* Preenchimento em degradê que entra da esquerda */}
        <span
          aria-hidden
          className="sunset absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
        />

        <span className="relative w-7 font-mono text-xs text-bone/35 transition-colors duration-300 group-hover:text-ink/60">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="relative min-w-0 flex-1">
          <span
            className={[
              "block font-display text-[28px] leading-none font-semibold transition-colors duration-300 group-hover:text-ink",
              link.featured ? "sunset-text group-hover:[-webkit-text-fill-color:var(--color-ink)]" : "",
            ].join(" ")}
          >
            {link.title}
          </span>
          {link.description && (
            <span className="mt-1.5 flex items-center gap-1.5 font-mono text-xs text-bone/45 transition-colors duration-300 group-hover:text-ink/70">
              <Icon name={link.icon} size={13} />
              {link.description}
            </span>
          )}
        </span>

        <span className="relative grid size-11 shrink-0 place-items-center rounded-full border border-bone/15 transition-all duration-300 group-hover:rotate-45 group-hover:border-ink/30 group-hover:bg-ink group-hover:text-peach">
          <ArrowUpRight size={18} strokeWidth={2} aria-hidden />
        </span>
      </a>
    </motion.li>
  );
}
