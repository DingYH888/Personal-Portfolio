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

## 部署（方案 A：Gitee 托管 + Vercel CLI）

```bash
git push origin main     # 代码推送到 Gitee 仓库（版本管理）
npx vercel --prod        # 从本地上传部署（首次需浏览器登录 Vercel 账号）
```

部署成功后把分配的域名回填到 `src/data/site.ts` 的 `url`，并补充 `public/sitemap.xml`。
