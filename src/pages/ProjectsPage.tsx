/** 项目展示列表（PRD FR-3.1）：响应式网格（桌面 ≥1024 三列 / 平板两列 / 手机单列），按 order 升序 */
import { FolderGit2 } from "lucide-react";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function ProjectsPage() {
  useDocumentMeta(`项目展示 | ${profile.name}`, site.description);
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <Page>
      <div className="mx-auto max-w-[1152px] px-4 py-12 md:px-6 md:py-16">
        <SectionHeader
          icon={<FolderGit2 size={24} className="text-accent" />}
          title="项目展示"
          subtitle="独立完成的完整项目，点击卡片查看详情与截图"
          as="h1"
        />
        {sorted.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line p-10 text-center text-ink-3">
            项目整理中，敬请期待。
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        )}
      </div>
    </Page>
  );
}
