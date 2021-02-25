import Link from 'next/link'

const Card = ({ card }) => {
  const url = card.card_images[0]
  const imgsrc = url.image_url_small
  return (
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
  )
}

export default Card
