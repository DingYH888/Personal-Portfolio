/** 页面容器：统一页面进入动效（淡入 + 上移 200ms）；reduced-motion 由 App 层 MotionConfig 统一遵循 */
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
