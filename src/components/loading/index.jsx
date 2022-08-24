import styles from "./styles.module.scss";

export const Loading = () => (
  <div className={styles.overlay}>
    <div className={styles.loading} />
  </div>
);
