"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function LucideIconsInit() {
  const pathname = usePathname();

  useEffect(() => {
    const init = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      if (win.lucide && typeof win.lucide.createIcons === "function") {
        win.lucide.createIcons();
      }
    };

    init();
    const timer = setTimeout(init, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
