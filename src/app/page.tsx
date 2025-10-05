import WelcomeCurtain from "@/components/sections/home/welcome-curtain/WelcomeCurtain";
import Layout from "@/components/layout/Layout";
import RecentLinkTitleList from "@/components/sections/home/recent/RecentLinkTitleList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Layout>
      <strong className={styles.recent}>RECENT: </strong>
      <RecentLinkTitleList />
      <WelcomeCurtain />
    </Layout>
  );
}
