/**
 * ImageCarousel 图片轮播组件（原生 React Hooks + CSS，不引入任何第三方库）
 *
 * 功能：在固定尺寸容器（16:9）内翻页展示多张图片（PRD FR-3.2 v1.6）。
 * - 左右按钮切换上一张 / 下一张（首尾循环）；
 * - 图片 object-contain 等比缩放：超出容器自动缩小、完整显示、不裁剪不拉伸；
 * - 轨道 transform 位移 + CSS transition 实现平滑滑动过渡；
 * - 首尾循环跳转时临时关闭过渡，避免长距离横扫；
 * - 底部圆点指示当前页、可点击直接跳转；
 * - 可选自动播放（autoplayMs > 0 时开启），默认关闭。
 *
 * Props:
 * - images: 图片路径数组
 * - altPrefix: 图片 alt 文案前缀（无障碍命名，实际为 `{altPrefix} {序号}`）
 * - autoplayMs: 自动播放间隔（毫秒）；0 或省略表示关闭
 */
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  altPrefix?: string;
  autoplayMs?: number;
}

export default function ImageCarousel({
  images,
  altPrefix = "截图",
  autoplayMs = 0,
}: ImageCarouselProps) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  // 是否带过渡动画：首尾循环跳转时置为 false（瞬间切换），随后在下一帧恢复
  const [animated, setAnimated] = useState(true);

  /**
   * 切到指定页。
   * @param next 目标页下标
   * @param wrap 是否为首尾循环跳转（是则关闭滑动动画）
   */
  const goTo = useCallback(
    (next: number, wrap: boolean) => {
      if (next === index) return;
      if (wrap) setAnimated(false);
      setIndex(next);
    },
    [index],
  );

  const next = useCallback(
    () => goTo((index + 1) % count, index + 1 >= count),
    [index, count, goTo],
  );
  const prev = useCallback(
    () => goTo((index - 1 + count) % count, index - 1 < 0),
    [index, count, goTo],
  );

  // 首尾循环瞬间切换后，于下一帧恢复过渡，保证后续翻页仍平滑
  useEffect(() => {
    if (animated) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimated(true)),
    );
    return () => cancelAnimationFrame(id);
  }, [index, animated]);

  // 自动播放（可选）：依赖 next 引用，翻页后计时器自动重置
  useEffect(() => {
    if (autoplayMs <= 0 || count <= 1) return;
    const timer = setInterval(next, autoplayMs);
    return () => clearInterval(timer);
  }, [next, autoplayMs, count]);

  // 单张图片：无轮播控件，直接展示
  if (count <= 1) {
    return (
      <figure className="overflow-hidden rounded-3xl border border-line">
        <img
          src={images[0]}
          alt={altPrefix}
          loading="lazy"
          className="aspect-video w-full object-contain"
        />
      </figure>
    );
  }

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl border border-line bg-bg">
      {/* 轨道：所有图片横向排布，按当前页做百分比位移 */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: animated
            ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="flex h-full w-full shrink-0 items-center justify-center"
          >
            {/* object-contain：等比缩放完整显示，不裁剪不拉伸 */}
            <img
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* 上一张按钮 */}
      <button
        type="button"
        onClick={prev}
        aria-label="上一张"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
      >
        <ChevronLeft size={20} />
      </button>

      {/* 下一张按钮 */}
      <button
        type="button"
        onClick={next}
        aria-label="下一张"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface/80 text-ink backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
      >
        <ChevronRight size={20} />
      </button>

      {/* 页码指示 + 圆点导航 */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
        <span className="rounded-full border border-line bg-bg/70 px-2 py-0.5 text-xs text-ink-2 backdrop-blur">
          {index + 1} / {count}
        </span>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i, false)}
              aria-label={`跳到第 ${i + 1} 张`}
              className={`h-1.5 rounded-full transition-all ${
                i === index
                  ? "w-4 bg-accent"
                  : "w-1.5 bg-ink-3/60 hover:bg-ink-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
