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
    </header>
  );
};

export default Header;
