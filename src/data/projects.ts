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
    slug: "ai-health-platform",
    name: "安康智慧健康管理平台",
    cover: "/images/projects/ai-health-platform-1.jpg",
    summary:
      "基于 LangGraph + RAG 的糖尿病慢病智能管理平台，覆盖血糖监测、饮食/用药记录与 AI 健康问答。",
    description: [
      "面向糖尿病慢病管理场景：患者可记录血糖、饮食、用药与运动数据，系统基于个人健康档案与医学知识库，生成个性化饮食 / 用药 / 运动建议与风险评估。",
      "后端以 FastAPI + Tortoise ORM + MySQL 构建全异步服务，前端采用 Vue 3 + TypeScript + Element Plus + ECharts；AI 能力层基于 LangGraph 编排 Agent 工作流，结合 ChromaDB 向量库实现 RAG 检索增强问答与健康报告生成。",
    ],
    screenshots: [
      "/images/projects/ai-health-platform-1.jpg",
      "/images/projects/ai-health-platform-2.jpg",
      "/images/projects/ai-health-platform-3.jpg",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "ChromaDB",
      "MySQL",
      "Vue 3",
      "TypeScript",
      "Element Plus",
      "ECharts",
      "Tortoise ORM",
      "Pydantic",
    ],
    highlights: [
      "FastAPI + Tortoise ORM + MySQL 全链路异步后端，按 routers / core / models / schemas 四层划分，Pydantic 双向校验入参与响应。",
      "7 张表外键建模患者 → 多维健康数据的一对多关联，模型层封装 BMI、GI 等级、血糖差值等业务属性。",
      "LangGraph StateGraph 编排「意图识别 → 档案加载 → RAG 检索 → LLM 生成 → 风险评估」五节点异步 Agent 工作流。",
      "ChromaDB + HuggingFace Embedding 持久化向量库：MD5 去重、分批写入、top_k + 相似度阈值双重过滤、按意图下发元数据过滤，提升召回准确率。",
      "配置化与工程化：LLM / 向量库 / ORM / 阈值参数全由 .env 注入，核心实例单例管理，对话历史截断防 token 溢出，模型切换零代码改动。",
    ],
    role: "独立开发",
    period: "2026.05 – 2026.08",
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
