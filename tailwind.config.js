/** 设计令牌映射（PRD 6.2）：颜色全部来自 src/styles/tokens.css 的 CSS 变量，组件内禁止硬编码色值 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        "bg-deep": "rgb(var(--color-bg-deep) / <alpha-value>)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        line: "var(--color-line)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-2": "rgb(var(--color-ink-2) / <alpha-value>)",
        "ink-3": "rgb(var(--color-ink-3) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-strong": "rgb(var(--color-accent-strong) / <alpha-value>)",
        "on-accent": "rgb(var(--color-on-accent) / <alpha-value>)",
        link: "rgb(var(--color-link) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 2px 12px rgba(2, 8, 20, 0.20)",
        lift: "0 16px 40px rgba(2, 8, 20, 0.38)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
