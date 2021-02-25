import Link from 'next/link'
import Head from 'next/head'
import { getRandomCardData } from '../lib/card'
import Card from '../components/card'

const Blog = ({ card }) => {
  return (
    <>
      <Head>
        <title>drawCard</title>
      </Head>
      <Card card={card} />
    </>
  )
}

export async function getStaticProps() {
  const card = await getRandomCardData()
  return {
    props: { card },
  }
}

export default Blog
