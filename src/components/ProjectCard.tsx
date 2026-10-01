/**
 * 项目卡片（列表页 / 首页精选复用）：封面 + 名称 + 一句话简介 + 技术栈标签（最多 4 个）+ 详情入口。
 * 整卡可点击跳转详情页；hover 上浮 + 封面轻微放大（PRD FR-3.1）。
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "../data/projects";
import TagChip from "./TagChip";

/** 卡片最多展示的技术栈标签数，超出折叠为 +n */
const MAX_TAGS = 4;

export default function ProjectCard({ project }: { project: Project }) {
  const shown = project.techStack.slice(0, MAX_TAGS);
  const rest = project.techStack.length - shown.length;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
    >
      {/* 16:10 容器 + object-cover 防布局偏移（CLS） */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.cover}
          alt={`${project.name} 封面`}
          width={1280}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-ink-2">{project.summary}</p>
        <div className="mt-1 flex flex-wrap gap-1.5">
          {shown.map((t) => (
            <TagChip key={t}>{t}</TagChip>
          ))}
          {rest > 0 && <TagChip>+{rest}</TagChip>}
        </div>
        <span className="mt-auto flex items-center gap-1 pt-2 text-sm text-accent">
          查看详情
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
