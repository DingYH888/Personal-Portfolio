/** 个人信息（PRD 5.1）：首页 Hero、关于我、联系方式、页脚的唯一内容源。可选字段为空时对应 UI 不渲染 */

export interface SocialLink {
  platform: string;
  /** 展示文案：链接平台显示域名/用户名，无链接平台（微信）显示账号 */
  handle: string;
  /** 有值 → 新窗口打开；无值 → 联系页走「点击复制」交互 */
  url?: string;
  icon: "github" | "email" | "wechat";
  /** 附加说明，如「微信同手机号」 */
  note?: string;
}

export interface Skill {
  name: string;
  level?: "了解" | "熟悉" | "熟练" | "精通";
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

export interface Education {
  period: string;
  school: string;
  major: string;
  degree: string;
  courses: string[];
  honors: string[];
}

export interface Profile {
  name: string;
  title: string;
  /** 个人 Logo（导航栏品牌位） */
  logo: string;
  /** 一句话简介（首页 Hero） */
  tagline: string;
  avatar: string;
  location?: string;
  /** 详细介绍，每项渲染为一个段落 */
  about: string[];
  skills: SkillGroup[];
  email: string;
  githubUrl?: string;
  socials: SocialLink[];
  /** 简历 PDF 路径（public/files/ 下），为空则不渲染下载入口 */
  resumeUrl?: string;
  education: Education;
}

export const profile: Profile = {
  name: "丁于皓",
  title: "全栈开发工程师 · AI 应用开发工程师",
  logo: "/images/logo.jpg",
  tagline:
    "软件工程本科在读，专注 FastAPI + Vue 全栈开发与 LangChain/RAG 智能应用，擅长把大模型能力落地成完整可用的产品。",
  avatar: "/images/avatar.jpg",
  location: "洛阳",
  about: [
    "我是丁于皓，河南科技大学软件工程专业本科生（2028 届），方向是全栈开发与 AI 应用开发。技术主线：后端 Python / FastAPI / MySQL，前端 Vue 3 / TypeScript，AI 工程 LangChain / LangGraph / RAG——两个代表项目均由我独立完成从设计到交付的完整闭环。",
    "善于攻坚，也善于借力 AI 学习和工作：从零实现过 RAG 问答全链路（多格式文档解析 → 分块 → 向量检索 → 生成 → 来源追溯）、LangGraph 多节点 Agent 工作流与 ChromaDB 向量库调优；新框架上手快，习惯读官方文档与源码。已获中国高校计算机大赛 AIGC 创新赛省赛一等奖、华为 HCIA 认证。",
    "工作认真负责，能在高强度、紧节点的任务中稳定交付；为人乐观友善，擅长跨角色沟通协作，能把目标拆解成可执行的步骤并推进落地。",
    "求职方向为后端开发 / AI 应用开发的实习机会。如果你对我的项目感兴趣，欢迎通过联系方式页找我聊。",
  ],
  skills: [
    {
      category: "后端开发",
      items: [
        { name: "Java", level: "熟悉" },
        { name: "Spring Boot", level: "熟悉" },
        { name: "Spring Cloud", level: "了解" },
        { name: "MySQL", level: "熟悉" },
        { name: "Redis", level: "熟悉" },
      ],
    },
    {
      category: "AI 应用开发",
      items: [
        { name: "FastAPI", level: "熟悉" },
        { name: "LangChain", level: "熟悉" },
        { name: "LangGraph", level: "熟悉" },
        { name: "RAG", level: "熟悉" },
        { name: "ChromaDB", level: "熟悉" },
      ],
    },
    {
      category: "前端开发",
      items: [
        { name: "Vue 3", level: "了解" },
        { name: "HTML/CSS", level: "了解" },
        { name: "TypeScript", level: "了解" },
      ],
    },
    {
      category: "工具与其他",
      items: [
        { name: "Git", level: "熟悉" },
        { name: "Linux", level: "了解" },
        { name: "AI 编程工具", level: "熟悉" },
      ],
    },
  ],
  email: "yuhaoqqd@qq.com",
  githubUrl: "https://github.com/DingYH888",
  socials: [
    {
      platform: "GitHub",
      handle: "DingYH888",
      url: "https://github.com/DingYH888",
      icon: "github",
    },
    {
      platform: "邮箱",
      handle: "yuhaoqqd@qq.com",
      // 「发邮件」走 QQ 邮箱网页版写信页（收件人预填）：mailto 在未配置邮件客户端的
      // 电脑上只会弹出系统"选择应用"对话框，无法直达网页邮箱
      url: "https://mail.qq.com/cgi-bin/qm_share?qc_function=send_mail&to=yuhaoqqd@qq.com",
      icon: "email",
    },
    {
      platform: "微信",
      handle: "13569386399",
      note: "微信同手机号",
      icon: "wechat",
    },
  ],
  resumeUrl: "/files/resume.pdf",
  education: {
    period: "2024.08 – 2028.06",
    school: "河南科技大学",
    major: "软件工程",
    degree: "本科",
    courses: ["计算机网络", "数据结构", "操作系统", "软件工程", "设计模式"],
    honors: [
      "中国高校计算机大赛 AIGC 创新赛 · 省赛一等奖",
      "华为 HCIA 认证",
      "大学英语四级（CET-4）",
    ],
  },
};
