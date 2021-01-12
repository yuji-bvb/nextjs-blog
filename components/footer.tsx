import styles from "./footer.module.css";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <small>@2020 yuji yanase</small>
      <div>
        <a href="mailto:yuji.bvb@gmail.com?">
          <small>お問い合わせ</small>
        </a>
      </div>
    </footer>
  );
}
