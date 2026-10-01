/** 首页（PRD FR-1）：Hero（头像 + 大标题 + 简介 + CTA）→ 快速导航入口卡片 → 精选项目 */
import { Link } from "react-router-dom";
import { Download, FolderGit2, Mail, MapPin, Sparkles, User } from "lucide-react";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import EntryCard from "../components/EntryCard";
import ProjectCard from "../components/ProjectCard";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

/** 首页模块入口列表（用户核心需求：点击跳转至各模块） */
const ENTRIES = [
  { to: "/about", icon: User, title: "关于我", desc: "教育背景、技能清单与求职方向" },
  { to: "/projects", icon: FolderGit2, title: "项目展示", desc: "独立完成的完整项目，含截图与亮点详解" },
  { to: "/contact", icon: Mail, title: "联系方式", desc: "邮箱、GitHub 与微信，欢迎随时联系" },
];

export default function HomePage() {
  useDocumentMeta(site.title, site.description);
  const featured = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

  return (
    <Page>
      {/* Hero 区 */}
      <section className="mx-auto flex max-w-[1152px] flex-col items-center px-4 pb-14 pt-16 text-center md:pt-24">
        <img
          src={profile.avatar}
          alt={`${profile.name} 头像`}
          width={128}
          height={128}
          className="h-28 w-28 rounded-full object-cover ring-2 ring-accent/60 md:h-32 md:w-32"
        />
        <h1 className="mt-6 text-4xl font-bold text-ink md:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-lg text-accent">{profile.title}</p>
        <p className="mt-4 max-w-2xl leading-7 text-ink-2">{profile.tagline}</p>
        {profile.location && (
          <p className="mt-2 flex items-center gap-1 text-sm text-ink-3">
            <MapPin size={14} />
            {profile.location}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
      </section>

      {/* 快速导航入口 */}
      <section className="mx-auto max-w-[1152px] px-4 py-8 md:px-6">
        <SectionHeader title="快速导航" subtitle="点击进入对应模块" />
        <div className="grid gap-4 md:grid-cols-3">
          {ENTRIES.map((e) => (
            <EntryCard key={e.to} {...e} />
          ))}
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
