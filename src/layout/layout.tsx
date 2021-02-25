import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from '../components/footer/footer'
import Darkmode from '../components/darkmode'
import HomeImage from '../components/homeImage'
import SecondImage from '../components/secondImage'

const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Darkmode />
        {home ? <HomeImage /> : <SecondImage />}
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout
