import Link from "next/link";
import IconMenuHamburger from "@/assets/svg/MenuHamburger.svg";
import cn from "classnames";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cn(styles.header)}>
      <button type="button" className={cn(styles.button_menu)}>
        <IconMenuHamburger className={cn(styles.icon_menu)} />
      </button>
      <Link href={"/"} className={cn(styles.logo)}>
        □∃xxd(x)
      </Link>
      <nav className={cn(styles.nav)}>
        <Link href={"/about"}>ABOUT</Link>
        <Link href={"/study"}>STUDY</Link>
        <Link href={"/study"}>STUDY</Link>
        <Link href={"/memo"}>MEMO</Link>
        <Link href={"/calender"}>CALENDER</Link>
        <Link href={"/calender"}>CALENDER</Link>
      </nav>
    </header>
  );
};

export default Header;
