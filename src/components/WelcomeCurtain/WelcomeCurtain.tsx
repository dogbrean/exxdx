"use client";
import { useEffect, useState } from "react";

import cn from "classnames";
import styles from "./WelcomeCurtain.module.scss";
import { WELCOME_ANIMATION_TIME } from "@/constants/ui";

const WelcomeCurtain = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, WELCOME_ANIMATION_TIME);

    return () => clearTimeout(timeoutId);
  }, []);

  return isVisible ? (
    <></>
  ) : (
    <div className={cn(styles.welcome_curtain, isAnimated && styles.animated)}>
      <div className={cn(styles.left)}></div>
      <div className={cn(styles.right)}></div>
      <span className={cn(styles.text_left)}>□∃xx</span>
      <span className={cn(styles.text_right)}>d(x)</span>
    </div>
  );
};

export default WelcomeCurtain;
