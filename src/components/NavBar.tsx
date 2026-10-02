/**
 * 顶部导航栏（PRD FR-0.1）：sticky 固定 + 毛玻璃背景。
 * 桌面端横向导航（当前页强调色高亮）；移动端汉堡按钮 + 下拉抽屉（Framer Motion），路由变化自动收起。
 */
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const NAV_ITEMS = [
  { label: "首页", to: "/" },
  { label: "关于我", to: "/about" },
  { label: "项目展示", to: "/projects" },
  { label: "联系方式", to: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // 路由变化时收起移动端菜单
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/65 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1152px] items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="返回首页">
          <img src={profile.logo} alt="" className="h-8 w-8 rounded-full object-cover ring-1 ring-line" />
          <span className="font-semibold text-ink">{profile.name}</span>
        </Link>

        {/* 桌面端导航 */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="主导航">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? "text-accent" : "text-ink-2 hover:text-ink"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 移动端汉堡按钮（触控目标 44x44） */}
        <button
          type="button"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 移动端抽屉菜单 */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-b border-line bg-bg/95 backdrop-blur-md md:hidden"
            aria-label="移动端导航"
          >
            <div className="flex flex-col px-4 py-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `border-b border-line py-3.5 text-base last:border-0 ${
                      isActive ? "text-accent" : "text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
