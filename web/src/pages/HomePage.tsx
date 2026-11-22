import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BOOKS } from '../data/sources'
import { CITY, LEIDEN, TIGER } from '../data/media'
import { useLocale, useT } from '../i18n/Locale'

const doors = [
  ['/kings', 'doorKings', 'doorKingsBody'],
  ['/meikeerthis', 'doorMeikeerthis', 'doorMeikeerthisBody'],
  ['/dynasty', 'doorDynasty', 'doorDynastyBody'],
  ['/inscriptions', 'doorStones', 'doorStonesBody'],
  ['/people', 'doorPeople', 'doorPeopleBody'],
  ['/realm', 'doorRealm', 'doorRealmBody'],
  ['/empire', 'doorEmpire', 'doorEmpireBody'],
] as const

export function HomePage() {
  const reduce = useReducedMotion()
  const t = useT()
  const { locale } = useLocale()

  useEffect(() => {
    document.title = t('homeTitle')
  }, [locale, t])

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="hero">
        <div>
          <p className="section-kicker">{t('homeKicker')}</p>
          <h1>{t('homeTitle')}</h1>
          <p className="lede">{t('homeLede')}</p>
        </div>
        <figure className="plate">
          <img src={LEIDEN.src} alt={LEIDEN.alt} />
          <figcaption>
            {LEIDEN.caption}
            <span className="credit">{LEIDEN.credit}</span>
          </figcaption>
        </figure>
      </section>

      <nav className="doors" aria-label={t('homeTitle')}>
        {doors.map(([to, title, body]) => (
          <Link key={to} to={to} className="door">
            <h2>{t(title)}</h2>
            <p>{t(body)}</p>
          </Link>
        ))}
      </nav>

      <section id="sources" className="block sources">
        <div className="block-head">
          <p className="section-kicker">{t('sourcesKicker')}</p>
          <h2>{t('sourcesTitle')}</h2>
        </div>
        <p>{t('sourcesP1')}</p>
        <p>{t('sourcesP2')}</p>
        <ul className="source-list">
          {BOOKS.map((book) => (
            <li key={book}>{book}</li>
          ))}
          <li>{locale === 'ta' ? 'ஒவ்வொரு மன்னர் பக்கத்திலும் பெயரிடப்பட்ட விக்கிபீடியா கட்டுரைகள்' : 'Wikipedia articles named on each king page'}</li>
          <li>{locale === 'ta' ? 'தென்னிந்தியக் கல்வெட்டுகள், தொகுதி 2, தஞ்சையில் பெயரிடப்பட்ட அரசிகள்' : 'South Indian Inscriptions, vol. 2, for the queens named at Thanjavur'}</li>
          <li>{CITY.credit}</li>
          <li>{TIGER.credit}</li>
          <li>{LEIDEN.credit}</li>
        </ul>
      </section>
    </motion.div>
  )
}
