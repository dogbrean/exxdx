import Header from "@components/Header/Header";
import React from "react";
import styles from "./Layout.module.scss";
import cn from "classnames";
type OwnProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: OwnProps) => {
  return (
    <div className={cn(styles.wrap)}>
      <Header />
      <main className={cn(styles.main)}>{children}</main>
    </div>
  );
};

export default Layout;
