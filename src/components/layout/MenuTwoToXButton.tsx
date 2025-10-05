"use client";
import cn from "classnames";
import styles from "./MenuTwoToXButton.module.scss";

type Props = {
  open: boolean; // true: X, false: =
  onToggle: () => void; // 부모에서 open 토글
  className?: string;
};

export default function MenuTwoToXButton({ open, onToggle, className }: Props) {
  return (
    <button
      type="button"
      aria-label={open ? "닫기" : "메뉴"}
      onClick={onToggle}
      className={cn(
        styles.button_menu,
        className,
        open ? styles.isX : styles.isPause
      )}
    >
      <span className={styles.bar} />
      <span className={styles.bar} />
    </button>
  );
}
