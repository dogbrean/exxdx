"use client";
import { useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import s from "./FullscreenMenu.module.scss";

type Item = { href: string; label: string };

export default function FullscreenMenu({
  open,
  items,
  onClose,
}: {
  open: boolean;
  items: Item[];
  onClose: () => void;
}) {
  // ESC 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div className={cn(s.overlay, open && s.open)} aria-hidden={!open}>
      <div className={s.left} />
      <div className={s.right} />
      <div className={s.line} />

      <div className={s.content}>
        <nav className={s.nav}>
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              onClick={onClose}
              className={s.link}
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
