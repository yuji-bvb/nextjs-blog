import Image from "next/image";
import styles from "./header.module.css";
import { AiFillGithub } from "react-icons/ai";

export function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <h1 className={styles.flex_left}>
        <Image
          src="/images/logo.png"
          alt="Yuji logo"
          loading="eager"
          width={180}
          height={38}
          priority
        />
      </h1>
      <h2>
        <a href={"https://github.com/yuji-bvb"}>
          <AiFillGithub />
        </a>
      </h2>
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
