import { getTweet } from '../lib/twitter'
import { Search } from 'twitter-api-client'
import Link from 'next/link'
import Head from 'next/head'

export async function getServerSideProps() {
  const twit: Search = await getTweet()
  console.log(twit)
  return {
    props: { twit },
  }
}

const Blog = ({ twit }) => {
  return (
    <>
      <Head>
        <title>#IT_KINGDOM</title>
      </Head>
      <div
        style={{
          margin: '10px auto',
          maxWidth: '50rem',
          textAlign: 'center',
        }}
      >
        <h2>#IT_KINGDOM</h2>
        <ul style={{ listStyle: 'none', padding: '0 10px' }}>
          {twit.statuses.map((status) => (
            <li
              key={status.id}
              style={{
                margin: '0 auto 10px',
                borderBottom: 'dashed',
                borderColor: '#00000045',
              }}
            >
              {status.text}
            </li>
          ))}
        </ul>

        <Link href="/">
          <a data-testid="back-index">← Back to home</a>
        </Link>
      </div>
    </>
  )
}

export default Blog
