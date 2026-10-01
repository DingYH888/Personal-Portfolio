/**
 * 分区标题：左侧「图标 + 标题 + 副标题」，右侧可选「更多 →」链接（参考站布局语言）。
 * 页面级标题传 as="h1"（每页唯一 h1，SEO 要求），区块标题默认 h2。
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  more?: { label: string; to: string };
  /** 标题语义层级：页面主标题用 h1，区块标题用 h2（默认） */
  as?: "h1" | "h2";
}

export default function SectionHeader({ icon, title, subtitle, more, as = "h2" }: Props) {
  const Tag = as;
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <Tag className="flex items-center gap-2 text-2xl font-semibold text-ink md:text-3xl">
          {icon}
          {title}
        </Tag>
        {subtitle && <p className="mt-1.5 text-sm text-ink-3">{subtitle}</p>}
      </div>
      {more && (
        <Link
          to={more.to}
          className="flex shrink-0 items-center gap-1 pb-1 text-sm text-accent transition-colors hover:text-accent-strong"
        >
          {more.label}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
