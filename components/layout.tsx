import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const name = 'YUJI'
export const siteTitle = "Yuji's Website"
const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) => {
  const { theme, setTheme } = useTheme()
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>
          {theme !== undefined && (
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value="dark">🌛</option>
              <option value="light">🌞</option>
            </select>
          )}
        </div>
        {home ? (
          <>
            <Link href="/card">
              <div className={styles.superellipse}>
                <img
                  data-testid="card-nav"
                  src="/images/yugi.png"
                  className={`${styles.headerHomeImage}`}
                  alt={name}
                />
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <img
                src="/images/profile.jpg"
                className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a data-testid="back-index">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
export default Layout
