import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const name = 'YUJI'
export const siteTitle = "Yuji's Website"
export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const { theme, setTheme } = useTheme()
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
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
              <img
                data-testid="card-nav"
                src="/images/yugi.png"
                className={`${styles.headerHomeImage}`}
                alt={name}
              />
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
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
