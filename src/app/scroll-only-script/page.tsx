"use client";

import { useEffect } from "react";
import styles from "./page.module.scss";

export default function Page() {
  useEffect(() => {
    const updateViewportVars = () => {
      const vv = window.visualViewport;
      const visualH = vv?.height || window.innerHeight;
      const vhDelta = window.innerHeight - visualH;
      // Safari 최소화 모드에서 떠버리는 갭 크기

      document.documentElement.style.setProperty("--vvh", `${visualH}px`);
      document.documentElement.style.setProperty("--vh-delta", `${vhDelta}px`);
    };

    updateViewportVars();

    window.visualViewport?.addEventListener("resize", updateViewportVars);
    window.visualViewport?.addEventListener("scroll", updateViewportVars);
    window.addEventListener("orientationchange", updateViewportVars);
    window.addEventListener("focusin", updateViewportVars);
    window.addEventListener("focusout", updateViewportVars);

    return () => {
      window.visualViewport?.removeEventListener("resize", updateViewportVars);
      window.visualViewport?.removeEventListener("scroll", updateViewportVars);
      window.removeEventListener("orientationchange", updateViewportVars);
      window.removeEventListener("focusin", updateViewportVars);
      window.removeEventListener("focusout", updateViewportVars);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <h2>
        iOS 26 스크롤 확인(스크립트로 스크롤 시 주소표시줄 높이차를 반영했으나
        잘안됨)
      </h2>
      <div className={styles.box}></div>
      <div className={styles.fixed_bottom}>position: fixed, bottom:0</div>
    </div>
  );
}
