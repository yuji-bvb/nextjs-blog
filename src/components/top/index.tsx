import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Loading from '../loading'

const Top = () => {
  return (
    <section className={utilStyles.headingMd}>
      <span>ポートフォリオ</span>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={'https://favoroadbike.com'}
      >
        ロードバイク
      </a>
      &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={'https://covid-dashboard-api-aa259.web.app'}
      >
        Covid19
      </a>
      &nbsp;
      <a rel="noopener noreferrer" href={'https://github.com/yuji-bvb'}>
        GitHub
      </a>
      <br />
      <br />
      <span>ライブラリ</span>
      <br />
      <Link href="/twitter">
        <a data-testid="twitter-nav">#IT-KINGDOM</a>
      </Link>
      <Loading />
    </section>
  )
}
export default Top
