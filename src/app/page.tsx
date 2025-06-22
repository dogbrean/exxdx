import WelcomeCurtain from "@/components/WelcomeCurtain/WelcomeCurtain";
import CursorTextAnimation from "@/components/Animation/CursorTextAnimation";
import Layout from "@/components/Layout/Layout";
import { WELCOME_ANIMATION_TIME } from "@/constants/ui";
import RecentLinkTitleList from "@/components/Recent/RecentLinkTitleList";

export default function Home() {
  return (
    <Layout>
      <CursorTextAnimation
        text="RECENT: "
        animationDelay={WELCOME_ANIMATION_TIME + 200}
      />
      <RecentLinkTitleList />
      <WelcomeCurtain />
    </Layout>
  );
}
