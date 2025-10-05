"use client";
import { useEffect, useState } from "react";

import cn from "classnames";
import styles from "./WelcomeCurtain.module.scss";
import { WELCOME_ANIMATION_TIME } from "@/constants/ui";

const WelcomeCurtain = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsAnimated(true);
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, WELCOME_ANIMATION_TIME);

    return () => clearTimeout(timeoutId);
  }, []);

  return isVisible ? (
    <div className={cn(styles.welcome_curtain, isAnimated && styles.animated)}>
      <div className={cn(styles.left)}></div>
      <div className={cn(styles.right)}></div>
      <div className={cn(styles.line)}></div>
      <span className={cn(styles.text_left)}>□∃xx</span>
      <span className={cn(styles.text_right)}>d(x)</span>
    </div>
  ) : null;
};

export default WelcomeCurtain;
