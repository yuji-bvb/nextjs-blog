import styles from '../../layout/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const SecondImage = () => {
  return (
    <>
      <Link href="/">
        <img
          src="/images/profile.jpg"
          className={`${styles.headerImage} ${utilStyles.borderCircle}`}
          alt="circle img"
        />
      </Link>
    </>
  )
}
export default SecondImage
