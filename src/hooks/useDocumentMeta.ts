/**
 * 页面级 SEO Hook（PRD 第 7 章）：路由切换时更新 document.title 与 meta description，
 * 替代 react-helmet，避免引入 8.1 清单之外的运行时依赖。
 */
import { useEffect } from "react";

export function useDocumentMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);
}
