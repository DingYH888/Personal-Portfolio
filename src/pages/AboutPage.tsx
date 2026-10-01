/** 关于我（PRD FR-2）：详细介绍（多段）→ 技能列表（分组）→ 教育背景时间线 → 简历下载 */
import { Award, BookOpen, Download, User } from "lucide-react";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import SkillGroup from "../components/SkillGroup";
import { profile } from "../data/profile";
import { site } from "../data/site";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function AboutPage() {
  useDocumentMeta(`关于我 | ${profile.name}`, site.description);
  const { education } = profile;

  return (
    <Page>
      <div className="mx-auto max-w-[1152px] px-4 py-12 md:px-6 md:py-16">
        <SectionHeader
          icon={<User size={24} className="text-accent" />}
          title="关于我"
          subtitle={`${profile.name} · ${profile.title}`}
          as="h1"
        />

        {/* 详细介绍 */}
        <div className="max-w-3xl space-y-4 leading-7 text-ink-2">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* 技能列表 */}
        <section className="mt-14">
          <SectionHeader title="技能列表" subtitle="按方向分组，标注熟练度" />
          <div className="grid gap-4 md:grid-cols-2">
            {profile.skills.map((g) => (
              <SkillGroup key={g.category} group={g} />
            ))}
          </div>
        </section>

        {/* 教育背景时间线 */}
        <section className="mt-14">
          <SectionHeader title="教育背景" subtitle="教育经历与荣誉奖项" />
          <div className="card max-w-3xl p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs text-accent">
                {education.period}
              </span>
              <h3 className="text-lg font-semibold text-ink">{education.school}</h3>
              <span className="text-sm text-ink-2">
                {education.major} · {education.degree}
              </span>
            </div>
            <div className="mt-4 flex items-start gap-2 text-sm leading-6 text-ink-2">
              <BookOpen size={16} className="mt-0.5 shrink-0 text-accent" />
              <p>主修课程：{education.courses.join("、")}</p>
            </div>
            <div className="mt-2.5 flex items-start gap-2 text-sm leading-6 text-ink-2">
              <Award size={16} className="mt-0.5 shrink-0 text-accent" />
              <p>荣誉奖项：{education.honors.join(" · ")}</p>
            </div>
          </div>
        </section>

        {/* 简历下载（P1） */}
        {profile.resumeUrl && (
          <a href={profile.resumeUrl} download className="btn-primary mt-12">
            <Download size={16} />
            下载简历（PDF）
          </a>
        )}
      </div>
    </Page>
  );
}
