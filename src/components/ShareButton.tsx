import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Share2 } from "lucide-react";
import { profile } from "../config";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.origin === "null" ? profile.url : window.location.href;
    const data = { title: `${profile.name} · Links`, url };
    try {
      if (navigator.share && navigator.canShare?.(data)) {
        await navigator.share(data);
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* usuário cancelou o compartilhamento */
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      aria-label="Compartilhar esta página"
      className="fixed top-4 right-4 z-10 inline-flex h-10 items-center gap-2 rounded-full border border-bone/10 bg-ink/60 px-4 text-[13px] font-medium text-bone/80 backdrop-blur-md transition hover:border-bone/25 hover:text-bone"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "ok" : "share"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center gap-2"
        >
          {copied ? <Check size={15} className="text-peach" /> : <Share2 size={15} />}
          {copied ? "Link copiado" : "Compartilhar"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
