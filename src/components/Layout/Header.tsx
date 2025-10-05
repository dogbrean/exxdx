"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Header.module.scss";
import MenuTwoToXButton from "./MenuTwoToXButton";
import FullscreenMenu from "./FullScreenMenu";

const items = [
  { href: "/about", label: "ABOUT123" },
  { href: "/study", label: "STUDY" },
  { href: "/memo", label: "MEMO" },
  { href: "/calendar", label: "CALENDAR" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // 메뉴 열릴 때 스크롤 잠금
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      root.style.overflow = "hidden";
    }
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={cn(styles.header)}>
        <MenuTwoToXButton open={open} onToggle={() => setOpen((v) => !v)} />
        <Link href="/" className={cn(styles.logo)}>
          □∃xxd(x)
        </Link>
      </header>

      <FullscreenMenu
        open={open}
        items={items}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
