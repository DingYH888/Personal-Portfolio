/** 首页（PRD FR-1）：Hero（左文右图排版：超大姓名 + 竖线分隔职位、简介、分隔线、城市、CTA；右侧头像卡片，移动端置顶）→ 精选项目 */
import { Link } from "react-router-dom";
import { Download, MapPin, Sparkles } from "lucide-react";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function HomePage() {
  useDocumentMeta(site.title, site.description);
  const featured = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

  return (
    <Page>
      {/* Hero 区：桌面左文右图，移动端头像卡片置顶 */}
      <section className="mx-auto max-w-[1152px] px-4 pb-14 pt-12 md:px-6 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          {/* 左栏：文字区（参考排版：超大姓名左对齐 + 竖线分隔职位） */}
          <div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <h1 className="text-6xl font-bold leading-none text-ink md:text-7xl">{profile.name}</h1>
              <div className="border-l border-line pl-5">
                <p className="text-base leading-snug text-accent md:text-lg">{profile.title}</p>
              </div>
            </div>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-2 md:text-xl md:leading-8">
              {profile.tagline}
            </p>
            <div className="mt-8 h-px w-full max-w-xl bg-line" />
            {profile.location && (
              <p className="mt-5 flex items-center gap-1.5 text-sm text-ink-3">
                <MapPin size={14} />
                {profile.location}
              </p>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-primary">
                查看项目
              </Link>
              <Link to="/contact" className="btn-outline">
                联系我
              </Link>
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm text-ink-2 transition-colors hover:text-accent"
                >
                  <Download size={16} />
                  下载简历
                </a>
              )}
            </div>
          </div>

          {/* 右栏：头像卡片（带边框内衬，贴近参考图照片卡） */}
          <div className="order-first justify-self-center lg:order-last lg:justify-self-end">
            <div className="rounded-2xl border border-line bg-surface p-2.5">
              <img
                src={profile.avatar}
                alt={`${profile.name} 头像`}
                width={600}
                height={800}
                className="aspect-[3/4] w-44 rounded-xl object-cover md:w-56 lg:w-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 精选项目（P1） */}
      <section className="mx-auto max-w-[1152px] px-4 py-8 md:px-6">
        <SectionHeader
          icon={<Sparkles size={22} className="text-accent" />}
          title="精选项目"
          subtitle="独立完成的代表作品"
          more={{ label: "更多项目", to: "/projects" }}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </Page>
  );
}
