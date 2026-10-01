/** 首页模块入口卡片（PRD FR-1 核心需求）：图标 + 标题 + 说明 + 箭头，整卡可点击跳转（Link 原生支持键盘操作） */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Props {
  to: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function EntryCard({ to, icon: Icon, title, desc }: Props) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
    >
      <span className="icon-box">
        <Icon size={22} />
      </span>
      <span className="flex-1">
        <span className="block font-semibold text-ink">{title}</span>
        <span className="mt-0.5 block text-sm text-ink-3">{desc}</span>
      </span>
      <ArrowRight
        size={18}
        className="shrink-0 text-ink-3 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
      />
    </Link>
  );
}
