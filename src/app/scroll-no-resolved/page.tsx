import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.wrap}>
      <h2>iOS 26 스크롤 확인(수정 안한버전)</h2>
      <div className={styles.box}></div>
      <div className={styles.fixed_bottom}>position: fixed, bottom:0</div>
    </div>
  );
}
