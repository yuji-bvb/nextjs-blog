import Link from 'next/link'
import Head from 'next/head'
import { getRandomCardData } from '../lib/card'

const Blog = ({ card }) => {
  const url = card.card_images[0]
  const imgsrc = url.image_url_small
  return (
    <>
      <Head>
        <title>drawCard</title>
      </Head>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <div style={{ fontWeight: 'bold' }}>Todays card</div>
        <div></div>
        <div>
          {card && (
            <img
              style={{
                margin: '0 auto 10px',
                width: '250px',
                height: '350px',
                border: 'solid',
                borderWidth: 'thin',
              }}
              src={imgsrc}
              alt="Loading"
            />
          )}
        </div>
        <Link href="/">
          <a data-testid="back-index">← Back to home</a>
        </Link>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const card = await getRandomCardData()
  return {
    props: { card },
  }
}

export default Blog
