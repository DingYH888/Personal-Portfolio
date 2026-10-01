/** 404 兜底页（PRD 路由表）：直接访问不存在的路径/项目 slug 时展示 */
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { profile } from "../data/profile";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function NotFoundPage() {
  useDocumentMeta(`页面不存在 | ${profile.name}`);

  return (
    <Page>
      <div className="mx-auto flex max-w-[1152px] flex-col items-center px-4 py-24 text-center">
        <p className="text-6xl font-bold text-accent">404</p>
        <p className="mt-4 text-ink-2">页面不存在，或内容已被移动。</p>
        <Link to="/" className="btn-outline mt-8">
          返回首页
        </Link>
      </div>
    </Page>
  );
}
