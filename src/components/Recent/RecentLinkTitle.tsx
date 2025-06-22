import Link from "next/link";
import styles from "./RecentLinkTitle.module.scss";
import cn from "classnames";

const RecentLinkTitleList = () => {
  return (
    <ul className={cn(styles.list)}>
      <li className={cn(styles.list_item)}>
        <Link href={"/"} className={cn(styles.link)}>
          <strong className={cn(styles.category)}>[STUDY]</strong>:
          <strong className={cn(styles.category)}>[논리학]</strong>: 명제논리 -
          2025/06/22
        </Link>
      </li>
      <li className={cn(styles.list_item)}>
        <Link href={"/"} className={cn(styles.link)}>
          <strong className={cn(styles.category)}>[MEMO]</strong>: 오늘 할 것 -
          2025/06/22
        </Link>
      </li>
      <li className={cn(styles.list_item)}>
        <Link href={"/"} className={cn(styles.link)}>
          <strong className={cn(styles.category)}>[CALENDER]</strong>:
          주조기능사 시험 - 2025/06/20
        </Link>
      </li>
    </ul>
  );
};

export default RecentLinkTitleList;
