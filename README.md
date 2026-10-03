# 丁于皓 · 个人作品集网站

依据 `../PRD.md`（v1.1）开发的个人作品集网站。深色主题、移动端适配、内容配置驱动。

技术栈：React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + React Router 6 + Framer Motion + lucide-react

## 本地运行

```bash
npm install        # 安装依赖（首次）
npm run dev        # 开发模式  http://localhost:5173
npm run build      # 生产构建（输出 dist/）
npm run preview    # 预览生产构建  http://localhost:4173
```

## 修改内容（无需改组件）

所有文案与数据集中在 `src/data/`：

| 文件 | 内容 |
|---|---|
| `site.ts` | 浏览器标题、SEO 描述、站点地址（部署后回填） |
| `profile.ts` | 姓名/职位/简介/头像、关于我、技能分组、教育背景、联系方式、简历路径 |
| `projects.ts` | 项目列表：新增项目 = 追加一个对象 + 截图放入 `public/images/projects/` |

图片与文件：
- 头像 `public/images/avatar.jpg`；项目截图 `public/images/projects/`；简历 `public/files/resume.pdf`

## 部署（双平台：EdgeOne Pages 主站 + Vercel 备用）

代码托管在 GitHub：`https://github.com/DingYH888/Personal-Portfolio`，两个平台均已授权仓库，**push 到 main 自动构建部署**。

### 主站：腾讯云 EdgeOne Pages

1. [腾讯云控制台 → EdgeOne Pages](https://console.cloud.tencent.com/edgeone/pages) → 创建项目 → 从 GitHub 导入 `Personal-portfolio`（Vite 预设：构建 `npm run build`，输出 `dist`）；
2. ⚠️ **默认域名仅为 3 小时限时预览**，长期使用必须绑定自定义域名：项目「域名管理」→ 添加域名 → 到注册商后台加 CNAME 解析；未备案域名只能选「全球可用性（不含中国大陆）」加速（自有域名国内可正常访问），完成 ICP 备案后可切换「中国大陆/全球」加速，国内全速；
3. SPA 子路径回退已由仓库内 `public/_redirects` 支持，无需手动配置。

### 备用：Vercel

[vercel.com](https://vercel.com) 导入同一仓库，Framework Preset 自动识别 Vite，直接 Deploy；国内直连 `vercel.app` 默认域名已被阻断（实测），仅作备用。SPA 回退由仓库内 `vercel.json` 支持。

### 域名定稿后回填（三处同步修改）

`src/data/site.ts` 的 `url`、`public/sitemap.xml` 的 `<loc>`、`index.html` 的 canonical 与 `og:url` —— push 后两平台自动重新部署。
