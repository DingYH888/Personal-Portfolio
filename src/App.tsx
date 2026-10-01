/** 根布局：导航栏 + 路由出口 + 页脚；MotionConfig 让全部动效遵循系统「减弱动效」设置 */
import { MotionConfig } from "framer-motion";
import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      {/* 路由切换后滚动位置重置到顶部（PRD 3.2） */}
      <ScrollRestoration />
    </MotionConfig>
  );
}
