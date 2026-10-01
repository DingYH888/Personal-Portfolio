/**
 * 项目详情页（PRD FR-3.2）：返回入口 → 名称/周期角色 → 截图（主图 + 其余懒加载）→
 * 简介 → 技术栈 → 亮点 → 演示/源码链接；两者皆空展示「暂未公开」；slug 不存在渲染 404。
 */
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Sparkles } from "lucide-react";
import GithubIcon from "../components/GithubIcon";
import Page from "../components/Page";
import TagChip from "../components/TagChip";
import NotFoundPage from "./NotFoundPage";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  useDocumentMeta(
    project ? `${project.name} | ${profile.name}` : `页面不存在 | ${profile.name}`,
    site.description,
  );

  // slug 不存在 → 404 兜底，不白屏
  if (!project) return <NotFoundPage />;

  const [cover, ...rest] = project.screenshots;
  const hasLinks = Boolean(project.demoUrl || project.repoUrl);

  return (
    <Page>
      <article className="mx-auto max-w-[880px] px-4 py-12 md:px-6 md:py-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          返回项目列表
        </Link>

        <h1 className="mt-5 text-3xl font-bold text-ink md:text-4xl">{project.name}</h1>
        {(project.period || project.role) && (
          <p className="mt-2 text-sm text-ink-3">
            {[project.period, project.role].filter(Boolean).join(" · ")}
          </p>
        )}

        {/* 项目截图：主图首屏加载，其余懒加载；16:9 容器防布局偏移 */}
        <div className="mt-8 space-y-4">
          <figure className="overflow-hidden rounded-2xl border border-line">
            <img
              src={cover}
              alt={`${project.name} 界面截图 1`}
              className="aspect-video w-full object-cover"
            />
          </figure>
          {rest.map((src, i) => (
            <figure key={src} className="overflow-hidden rounded-2xl border border-line">
              <img
                src={src}
                alt={`${project.name} 界面截图 ${i + 2}`}
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
            </figure>
          ))}
        </div>

        {/* 项目简介 */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-ink">项目简介</h2>
          <div className="mt-3 space-y-3 leading-7 text-ink-2">
            {project.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* 技术栈 */}
        <section className="mt-9">
          <h2 className="text-xl font-semibold text-ink">技术栈</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <TagChip key={t}>{t}</TagChip>
            ))}
          </div>
        </section>

        {/* 项目亮点 */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="mt-9">
            <h2 className="text-xl font-semibold text-ink">项目亮点</h2>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-6 text-ink-2">
                  <Sparkles size={16} className="mt-1 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 项目链接：两者皆空 → 「暂未公开」提示（PRD FR-3.2） */}
        <section className="mt-10">
          {hasLinks ? (
            <div className="flex flex-wrap gap-3">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <ExternalLink size={16} />
                  在线演示
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <GithubIcon size={16} />
                  查看源码
                </a>
              )}
            </div>
          ) : (
            <p className="rounded-xl border border-dashed border-line p-4 text-sm leading-6 text-ink-3">
              项目的在线演示与源码暂未公开。如需了解更多实现细节，欢迎通过联系方式页与我沟通。
            </p>
          )}
        </section>
      </article>
    </Page>
  );
}
