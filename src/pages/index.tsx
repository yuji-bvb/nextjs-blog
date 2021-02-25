import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../layout/layout'
import { getSortedPostsData } from '../lib/posts'
import Header from '../components/header/header'
import Top from '../components/top'
import Blog from '../components/blog'
import { Props } from '../types/Types'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const siteTitle = "Yuji's Website"

const Home = ({ allPostsData }: Props) => {
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
      <Top />
      <Blog allPostsData={allPostsData} />
    </Layout>
  )
}
export default Home
