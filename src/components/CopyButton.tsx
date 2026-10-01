/** 复制按钮：点击复制文本到剪贴板，成功后显示「已复制」并 2 秒后还原（PRD FR-4 复制交互） */
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

interface Props {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = "复制" }: Props) {
  const { copied, copy } = useCopyToClipboard();
  return (
    <button
      type="button"
      onClick={() => copy(text)}
      aria-label={copied ? "已复制" : `复制${label}`}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs transition-colors ${
        copied
          ? "border-accent text-accent"
          : "border-line text-ink-2 hover:border-accent hover:text-accent"
      }`}
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "已复制" : label}
    </button>
  );
}
