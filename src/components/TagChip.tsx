/** 技术/技能标签（pill 样式）：深色底 + 细边框，hover 微亮 */
import type { ReactNode } from "react";

export default function TagChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-ink-2 transition-colors hover:border-accent/40 hover:text-ink">
      {children}
    </span>
  );
}
