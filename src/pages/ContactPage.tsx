/** 联系方式（PRD FR-4）：邮箱（复制 + mailto）、GitHub（外链）、微信（复制）、简历下载 */
import { Mail, MailPlus } from "lucide-react";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import SocialCard from "../components/SocialCard";
import { profile } from "../data/profile";
import { site } from "../data/site";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function ContactPage() {
  useDocumentMeta(`联系方式 | ${profile.name}`, site.description);

  const github = profile.socials.find((s) => s.icon === "github");
  const wechat = profile.socials.find((s) => s.icon === "wechat");

  return (
    <Page>
      <div className="mx-auto max-w-[880px] px-4 py-12 md:px-6 md:py-16">
        <SectionHeader
          icon={<Mail size={24} className="text-accent" />}
          title="联系方式"
          subtitle="对简历或项目内容感兴趣，欢迎随时联系"
          as="h1"
        />

        <div className="grid gap-4">
          {/* 邮箱：复制 + mailto */}
          <SocialCard
            icon="email"
            platform="邮箱"
            handle={profile.email}
            copyText={profile.email}
            extra={
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                <MailPlus size={14} />
                发邮件
              </a>
            }
          />

          {/* GitHub：新窗口外链 */}
          {github?.url && (
            <SocialCard
              icon="github"
              platform="GitHub"
              handle={github.url.replace(/^https?:\/\//, "")}
              url={github.url}
            />
          )}

          {/* 微信：无链接 → 点击复制 */}
          {wechat && (
            <SocialCard
              icon="wechat"
              platform="微信"
              handle={wechat.note ? `${wechat.handle}（${wechat.note}）` : wechat.handle}
              copyText={wechat.handle}
            />
          )}

          {/* 简历下载（P1） */}
          {profile.resumeUrl && (
            <SocialCard
              icon="resume"
              platform="简历下载"
              handle="个人简历（PDF）"
              url={profile.resumeUrl}
              download
            />
          )}
        </div>
      </div>
    </Page>
  );
}
