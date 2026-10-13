/** 项目数据（PRD 5.2）：项目列表/详情/首页精选的唯一内容源。
 * 新增项目 = 在此数组追加一个对象 + 把截图放入 public/images/projects/，无需改任何组件 */

export interface Project {
  /** 路由参数：/projects/:slug */
  slug: string;
  name: string;
  cover: string;
  /** 一句话简介（列表卡片展示） */
  summary: string;
  /** 多段简短描述（详情页展示） */
  description: string[];
  /** 截图路径数组，第 1 张作为列表封面 */
  screenshots: string[];
  /** 技术栈标签；列表卡片默认只展示前 4 个 */
  techStack: string[];
  /** 在线演示链接，为空则详情页不渲染该按钮 */
  demoUrl?: string;
  /** 源码链接（GitHub 等），为空则详情页不渲染该按钮 */
  repoUrl?: string;
  /** 项目亮点（详情页要点列表） */
  highlights?: string[];
  role?: string;
  period?: string;
  /** 是否在首页精选区展示 */
  featured?: boolean;
  /** 展示排序，升序 */
  order: number;
}

export const projects: Project[] = [
  {
    slug: "sugar-guard-ai",
    name: "AI糖尿病慢病管理智能助手",
    cover: "/images/projects/sugar-guard-ai-1.png",
    summary:
      "面向慢性病（以糖尿病为核心）人群的智能健康管理助手，融合 LLM、Agent 与 RAG，结合实时健康数据与医学知识库，量身定制个性化健康管理方案。",
    description: [
      "面向糖尿病等慢性病人群的智能健康管理平台，融合大语言模型（LLM）、智能体（Agent）与检索增强生成（RAG）等前沿 AI 技术，结合患者实时健康数据与医学知识库，为每位用户量身定制个性化健康管理方案。",
      "后端采用 FastAPI + Tortoise ORM + MySQL 全异步架构，AI 能力层基于 LangGraph 编排「意图识别 → 档案加载 → RAG 检索 → LLM 生成 → 风险评估」五节点 Agent 工作流，结合 ChromaDB 向量库与中文 Embedding 实现检索增强问答。项目目前仅在本地运行（后端 localhost:8000、前端 localhost:3000），完整源码已开源在 GitHub。",
    ],
    screenshots: [
      "/images/projects/sugar-guard-ai-1.png",
      "/images/projects/sugar-guard-ai-2.png",
      "/images/projects/sugar-guard-ai-3.jpg",
      "/images/projects/sugar-guard-ai-4.png",
      "/images/projects/sugar-guard-ai-5.png",
      "/images/projects/sugar-guard-ai-6.png",
      "/images/projects/sugar-guard-ai-7.png",
      "/images/projects/sugar-guard-ai-8.jpg",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "Embedding",
      "阿里云百炼 qwen",
      "Tortoise ORM",
      "MySQL",
      "Pydantic",
      "Vue 3",
      "TypeScript",
      "Element Plus",
      "ECharts",
    ],
    highlights: [
      "后端分层架构：FastAPI + Tortoise ORM + MySQL 全链路异步，按 routers / core / models / schemas 四层划分，统一 API 聚合 7 大资源 RESTful 接口，Pydantic Schema 双向校验入参与响应。",
      "数据建模与关联：Tortoise ORM 定义 7 张数据表，ForeignKeyField 构建患者 → 多表一对多关联，模型层封装 BMI、GI 等级、血糖差值等业务属性，lifespan 启动时初始化知识库。",
      "AI Agent 工作流：LangGraph StateGraph 抽象共享状态，串联意图识别 → 档案加载 → RAG 检索 → LLM 生成 → 风险评估 5 节点异步流水线。",
      "RAG 检索服务：ChromaDB 持久化 + 中文嵌入 bge-large-zh-v1.5（ModelScope 本地推理），MD5 去重、分批写入，top_k=5 + min_score=0.3 阈值过滤、余弦距离转相似度归一化，按意图下发 category 过滤，提升召回精准度。",
      "配置化与工程化：LLM / 向量库 / ORM / 健康阈值全量经 .env 注入，核心实例单例化避免重复初始化，对话历史截取近 10 条防 token 溢出，CORS 统一跨域，切换模型（qwen/OpenAI）仅改配置零代码改动。",
    ],
    role: "独立开发",
    period: "2026.08 – 2026.09",
    demoUrl: undefined,
    repoUrl: "https://github.com/DingYH888/SugarGuardAI",
    featured: true,
    order: 1,
  },
  {
    slug: "law-query-ai",
    name: "LawQueryAI智能法律咨询系统",
    cover: "/images/projects/law-query-ai-1.png",
    summary:
      "这是一款面向大众的智能法律咨询系统。系统融合大语言模型（LLM）、智能体（Agent）、检索增强生成（RAG）等前沿 AI 技术，结合真实法律案例库，通过意图识别将用户诉求自动分流为法律问答、案例检索与法律文书生成三类场景，实现 7×24 小时精准法律解答与专业文书撰写。",
    description: [
      "面向大众的智能法律咨询系统，融合大语言模型（LLM）、智能体（Agent）与检索增强生成（RAG）等前沿 AI 技术，结合真实法律案例库，通过意图识别将用户诉求自动分流为法律问答、案例检索与法律文书生成三类场景，实现 7×24 小时精准法律解答与专业文书撰写。",
      "后端采用 FastAPI + Tortoise ORM + MySQL + Redis 架构，AI 能力层基于 LangGraph 编排「意图识别 → 场景分流 → 混合检索 → LLM 生成」多分支 Agent 工作流，结合 ChromaDB 向量库与 bge-small-zh 中文嵌入实现检索增强问答；对话记忆经 LangGraph Checkpointer 持久化到 MySQL，配合 JWT 鉴权实现会话按用户隔离。项目目前仅在本地运行（后端 localhost:8000、前端 localhost:5173），完整源码已开源在 GitHub。",
    ],
    screenshots: [
      "/images/projects/law-query-ai-1.png",
      "/images/projects/law-query-ai-2.png",
      "/images/projects/law-query-ai-3.png",
      "/images/projects/law-query-ai-4.png",
      "/images/projects/law-query-ai-5.png",
      "/images/projects/law-query-ai-6.png",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "Sentence-Transformers (bge-small-zh)",
      "阿里云百炼 qwen",
      "Tortoise ORM",
      "MySQL",
      "Redis",
      "Pydantic",
      "Vue 3",
      "Vite",
      "Tailwind CSS",
      "Pinia",
      "Vue Router",
    ],
    highlights: [
      "三意图多分支 Agent 编排：LangGraph 用条件路由取代线性流水线，将用户诉求自动分流为「法律问答 / 案例检索 / 文书生成」三条生成链路，按意图动态装配上下文与提示词——对应法律咨询「问法条、找判例、要文书」三类刚需，而非健康助手式的单链路问答。",
      "法律场景定制的混合检索：针对法条、案号、罪名等对关键词精确命中要求极高的特点，采用「向量语义 + BM25 关键词」双路召回、合并去重后重排序，并支持按法院/案件类型过滤，比通用 RAG 的纯向量检索更能捞回精确匹配项。",
      "对话记忆 MySQL 持久化：用 LangGraph Checkpointer 将对话状态落库存储，实现跨轮次、跨进程重启的记忆恢复，结合 JWT 鉴权做到会话按用户隔离，彻底解决「截取近 N 条历史」的内存方案在长会话记忆丢失与多用户串扰上的缺陷。",
      "垂直文书生成能力：内置起诉状、答辩状、合同、律师函等模板化 + 参数化生成并支持 SSE 流式输出，覆盖从「法律咨询」到「文书成稿」的完整工作流——这是健康助手完全不具备的垂直能力。",
      "工程化与可运维：LLM/向量库/ORM/RAG 全量 .env 注入、核心实例单例化避免重复初始化、本地 Swagger UI 规避 CDN 被墙、切换模型零代码改动，保证本地交付与部署的稳定可靠。",
    ],
    role: "独立开发",
    period: "2026.09 – 2026.10",
    demoUrl: undefined,
    repoUrl: "https://github.com/DingYH888/LawQueryAI",
    featured: true,
    order: 2,
  },
];
