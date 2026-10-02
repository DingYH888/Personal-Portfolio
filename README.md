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

## 部署（GitHub + Vercel 集成）

代码托管在 GitHub：`https://github.com/DingYH888/Personal-Portfolio`

1. 登录 [vercel.com](https://vercel.com)（可直接用 GitHub 账号登录）；
2. 「Add New → Project」导入该仓库，Vercel 自动识别 Vite 项目，直接点 **Deploy**；
3. 首次部署完成后获得免费域名（如 `xxx.vercel.app`），也可在项目设置中绑定自定义域名；
4. 之后每次 `git push` 到 `main` 分支，Vercel 自动构建并上线，无需手动操作。

部署成功后把分配的域名回填到 `src/data/site.ts` 的 `url`，并补充 `public/sitemap.xml`。
