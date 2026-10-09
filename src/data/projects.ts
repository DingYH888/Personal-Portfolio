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
      "/images/projects/sugar-guard-ai-7.png",
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
    period: "2026.06 – 2026.09",
    demoUrl: undefined,
    repoUrl: "https://github.com/DingYH888/SugarGuardAI",
    featured: true,
    order: 1,
  },
  {
    slug: "rag-qa-system",
    name: "RAG 智能问答系统",
    cover: "/images/projects/rag-qa-system-1.jpg",
    summary: "支持多格式文档解析与向量检索的 RAG 问答系统，答案附来源、可追溯。",
    description: [
      "面向企业文档智能问答场景：上传 PDF / Word / Markdown 等文档后，系统自动完成解析、清洗、分块与向量化入库；提问时检索最相关的知识片段交由大模型生成答案。",
      "答案严格基于检索到的上下文生成，并附带来源片段、相似度分数与 token 用量，实现可追溯问答；支持智谱 / 通义等多模型切换与流式输出。",
    ],
    screenshots: [
      "/images/projects/rag-qa-system-1.jpg",
      "/images/projects/rag-qa-system-2.jpg",
      "/images/projects/rag-qa-system-3.jpg",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "RAG",
      "ChromaDB",
      "BGE Embeddings",
      "Docling",
      "PyTorch",
      "Vue 3",
    ],
    highlights: [
      "全链路 RAG 问答：检索 → 上下文去重裁剪 → Prompt 构建 → LLM 生成；答案强制基于上下文，缺失信息返回「不知道」，并附来源片段、相似度分数与 token 用量。",
      "Docling 解析 PDF（OCR + 表格结构识别），ParserFactory 按扩展名分发多格式解析器，统一输出 ParseResult，支持跨页表格自动合并。",
      "文本清洗 + 三策略分块（段落 / 句子 / 字符），超长段落按句子二级切分，表格独立入库并保留页码元数据。",
      "ChromaDB 向量存储封装：namespace 元数据过滤实现多租户隔离，top-k 与 min_score 双重过滤，TTLCache 缓存检索结果降低重复查询延迟。",
      "嵌入与模型工程化：本地 BGE（CUDA 加速）与 OpenAI 兼容嵌入可切换，多 LLM 供应商请求级切换，tenacity 指数退避重试，StreamingResponse 流式输出降低首字延迟。",
    ],
    role: "独立开发",
    period: "2025.11 – 2026.02",
    featured: true,
    order: 2,
  },
];
