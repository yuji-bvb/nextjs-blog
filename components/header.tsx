import styles from './header.module.css'
import { AiFillGithub } from 'react-icons/ai'

const Header = (): JSX.Element => {
  return (
    <header className={styles.container}>
      <h1 className={styles.flex_left}>yuji's Blog</h1>
      <h2>
        <a href={'https://github.com/yuji-bvb'}>
          <AiFillGithub />
        </a>
      </h2>
    </header>
  )
}
export default Header
