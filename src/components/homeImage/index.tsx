import styles from '../../layout/layout.module.css'
import Link from 'next/link'
import Image from 'next/image'

const HomeImage = () => {
  return (
    <>
      <Link href="/card">
        <div className={styles.superellipse}>
          <img
            data-testid="card-nav"
            src="/images/yugi.png"
            className={`${styles.headerHomeImage}`}
            alt="card img"
          />
        </div>
      </Link>
    </>
  )
}
export default HomeImage
