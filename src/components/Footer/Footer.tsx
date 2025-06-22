import styles from "./Footer.module.scss";
import cn from "classnames";

const Footer = () => {
  return (
    <footer className={cn(styles.footer)}>
      <dl className={cn(styles.list)}>
        <dt className={cn(styles.term)}>대표자: </dt>
        <dd className={cn(styles.description)}>임동주</dd>
      </dl>
      <dl className={cn(styles.list)}>
        <dt className={cn(styles.term)}>대표번호: </dt>
        <dd className={cn(styles.description)}>비밀</dd>
      </dl>
      <dl className={cn(styles.list)}>
        <dt className={cn(styles.term)}>주소: </dt>
        <dd className={cn(styles.description)}>서울특별시 마포구</dd>
      </dl>
    </footer>
  );
};

export default Footer;
