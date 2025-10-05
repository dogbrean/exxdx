"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./CursorTextAnimation.module.scss"; // CSS 파일을 import
import { WELCOME_ANIMATION_TIME } from "@/constants/ui";

type OwnProps = {
  text: string;
  typingSpeed?: number;
  animationDelay?: number;
};

function CursorTextAnimation({
  text,
  typingSpeed = 100,
  animationDelay = WELCOME_ANIMATION_TIME,
}: OwnProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(currentIndex);
  const ADDITIONAL_DELAY = 0;

  useEffect(() => {
    currentIndexRef.current = currentIndex; // countRef 업데이트
  }, [currentIndex]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndexRef.current < text.length) {
          setDisplayText(
            (prevText) => prevText + text[currentIndexRef.current]
          );
          setCurrentIndex(currentIndexRef.current + 1);
        }
      }, typingSpeed);
      return () => clearTimeout(intervalId);
    }, animationDelay + ADDITIONAL_DELAY);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.cursor_text_animation}>
      <span className={styles.text}>{displayText}</span>
    </div>
  );
}

export default CursorTextAnimation;
