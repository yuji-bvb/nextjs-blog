import { getTweet } from '../lib/twitter'
import { Search } from 'twitter-api-client'
import Link from 'next/link'
import Head from 'next/head'
import Tweet from '../components/twitter'

export async function getStaticProps() {
  const twit: Search = await getTweet()
  console.log(twit)
  return {
    props: { twit },
    revalidate: 5,
  }
}

const Twitter = ({ twit }) => {
  return (
    <>
      <Head>
        <title>#IT_KINGDOM</title>
      </Head>
      <Tweet twit={twit} />
    </>
  )
}

export default Twitter
