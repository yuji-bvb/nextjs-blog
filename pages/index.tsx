import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

type Props = {
  allPostsData: {
    id: string
    title: string
    date: string
  }[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta name="twitter:title" content="Yuji's Blog" />
        <meta
          name="twitter:description"
          content="Next.js製のブログです。自分のポートフォリオも見られます。"
        />
        <meta
          name="twitter:image"
          content="https://nextjs-blog-mauve-xi.vercel.app/ogp/twitCard.jpg"
        />
      </Head>
      <Header />
      <section className={utilStyles.headingMd}>
        <p>プログラミング学習中！Next.js頑張ってます！</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={'https://favoroadbike.com'}
        >
          ポートフォリオ
        </a>
        &nbsp;
        <a rel="noopener noreferrer" href={'https://github.com/yuji-bvb'}>
          GitHub
        </a>
        &nbsp;
        <Link href="/twitter">
          <a data-testid="twitter-nav">#IT-KINGDOM</a>
        </Link>
        &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={'https://covid-dashboard-api-aa259.web.app'}
        >
          Covid19
        </a>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <hr />
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </Layout>
  )
}
