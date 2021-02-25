import Link from 'next/link'

const Tweet = ({ twit }) => {
  return (
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
  )
}

export default Tweet
