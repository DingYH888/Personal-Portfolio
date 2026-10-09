/**
 * ImageLightbox 图片查看器（原生 React Hooks + CSS，无第三方库）
 *
 * 功能：在当前页面以全屏遮罩层查看大图（PRD FR-3.2 v1.7，「点击图片放大查看」）。
 * - 点击遮罩 / 右上角关闭按钮 / 按 Esc 关闭；
 * - 左右按钮切换上一张 / 下一张（首尾循环，单张时隐藏）；
 * - 图片 object-contain 等比缩放完整显示，不裁剪不拉伸；
 * - 打开期间锁定页面滚动；淡入/切图用轻量过渡（Framer Motion，站内已有）。
 *
 * Props:
 * - images: 图片路径数组
 * - index: 当前显示的图片下标
 * - altPrefix: 图片 alt 前缀
 * - onClose: 关闭回调
 * - onNavigate: 切换到指定下标（供左右按钮/循环使用）
 */
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
  images: string[];
  index: number;
  altPrefix?: string;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export default function ImageLightbox({
  images,
  index,
  altPrefix = "截图",
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const count = images.length;

  // 打开期间锁定 body 滚动，组件卸载时恢复
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // 按 Esc 关闭
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const prev = () => onNavigate((index - 1 + count) % count);
  const next = () => onNavigate((index + 1) % count);

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="图片查看"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 backdrop-blur-sm"
      >
        {/* 主图：object-contain 等比缩放完整显示；点击图片本身不关闭（交由遮罩/按钮） */}
        <motion.img
          key={index}
          src={images[index]}
          alt={`${altPrefix} ${index + 1}`}
          initial={{ opacity: 0.4, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
        />

        {/* 关闭按钮 */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="关闭"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
        >
          <X size={20} />
        </button>

        {/* 左右切换 + 页码（仅多张时显示） */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="上一张"
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="下一张"
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              <ChevronRight size={22} />
            </button>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-line bg-surface/80 px-3 py-1 text-xs text-ink-2 backdrop-blur">
              {index + 1} / {count}
            </span>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
