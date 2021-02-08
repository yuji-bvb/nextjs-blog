import Link from 'next/link'
import Router from 'next/router'
import { useEffect, useState } from 'react'

const loading = (): JSX.Element => {
  const [isLoading, setLoadingState] = useState(false)
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setLoadingState(true)
    })
  }, [])
  return isLoading ? (
    <div
      style={{
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <div>loading</div>
    </div>
  ) : (
    <Link href="/twitter">
      <a data-testid="twitter-nav">#IT-KINGDOM</a>
    </Link>
  )
}
export default loading
