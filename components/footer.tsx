import styles from "./footer.module.css";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <small>@2020 yuji yanase</small>
    </footer>
  );
}
