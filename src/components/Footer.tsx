/** 页脚（PRD FR-0.2）：版权信息 + 社交图标（与联系方式数据同源，仅渲染有链接的项）；备案号可选字段为空则不渲染 */
import { Mail } from "lucide-react";
import GithubIcon, { type IconComponent } from "./GithubIcon";
import { profile } from "../data/profile";
import type { SocialLink } from "../data/profile";

const ICONS: Record<string, IconComponent> = { github: GithubIcon, email: Mail };

export default function Footer() {
  // 仅渲染有链接的社交项；类型收窄确保 url 存在
  const linked = profile.socials.filter(
    (s): s is SocialLink & { url: string } => Boolean(s.url),
  );

  return (
    <footer className="mt-16 border-t border-line md:mt-24">
      <div className="mx-auto flex max-w-[1152px] flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-ink-3">
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
        <div className="flex items-center gap-4">
          {linked.map((s) => {
            const Icon = ICONS[s.icon];
            if (!Icon) return null;
            return (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="text-ink-3 transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
