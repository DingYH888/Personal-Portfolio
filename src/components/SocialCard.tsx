/**
 * 联系方式卡片（PRD FR-4）：平台图标 + 名称 + 账号 + 操作。
 * 有 url → 整卡新窗口外链；无 url（如微信）→ 提供复制按钮；extra 可附加额外操作（如邮箱的「发邮件」）。
 */
import { Download, ExternalLink, FileText, Mail, MessageCircle } from "lucide-react";
import GithubIcon, { type IconComponent } from "./GithubIcon";
import type { ReactNode } from "react";
import CopyButton from "./CopyButton";

const ICONS: Record<string, IconComponent> = {
  github: GithubIcon,
  email: Mail,
  wechat: MessageCircle,
  resume: FileText,
};

interface Props {
  icon: string;
  platform: string;
  handle: string;
  /** 有值 → 整卡为链接；download 为 true 时作为文件下载处理 */
  url?: string;
  download?: boolean;
  /** 无 url 时的复制内容 */
  copyText?: string;
  /** 附加操作按钮（如「发邮件」） */
  extra?: ReactNode;
}

export default function SocialCard({ icon, platform, handle, url, download, copyText, extra }: Props) {
  const Icon = ICONS[icon] ?? Mail;

  const inner = (
    <>
      <span className="icon-box">
        <Icon size={22} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-ink">{platform}</span>
        {/* 账号信息自动换行而非截断，保证移动端完整可读 */}
        <span className="block break-words text-sm leading-6 text-ink-2">{handle}</span>
      </span>
      {url && !download && (
        <ExternalLink size={18} className="shrink-0 text-ink-3 transition-colors group-hover:text-accent" />
      )}
      {download && <Download size={18} className="shrink-0 text-ink-3 transition-colors group-hover:text-accent" />}
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        download={download}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
        className="card group flex items-center gap-4 p-5"
      >
        {inner}
        {extra}
      </a>
    );
  }

  return (
    <div className="card flex items-center gap-4 p-5">
      {inner}
      <span className="flex shrink-0 gap-2">
        {extra}
        {copyText && <CopyButton text={copyText} />}
      </span>
    </div>
  );
}
