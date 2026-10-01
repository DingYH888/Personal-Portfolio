/** 站点配置：浏览器标题与 SEO 描述（PRD 5.3）。url 部署后回填，用于 OG 标签与 sitemap */
export interface SiteConfig {
  title: string;
  description: string;
  url: string;
}

export const site: SiteConfig = {
  title: "丁于皓 | 全栈开发 · AI 应用开发",
  description:
    "丁于皓 — 全栈开发工程师 / AI 应用开发工程师：FastAPI + Vue 3 + LangChain / RAG，独立完成安康智慧健康管理平台与 RAG 智能问答系统。河南科技大学软件工程 2028 届。",
  url: "",
};
