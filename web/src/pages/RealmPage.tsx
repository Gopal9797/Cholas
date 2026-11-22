import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pill } from '../components/Pill'
import { dossierOrder, kingPath } from '../data/selectors'
import { wikiMapFor } from '../data/wikiMaps'
import { useLocale, useT } from '../i18n/Locale'

export function RealmPage() {
  const t = useT()
  const { locale } = useLocale()
  const kings = dossierOrder()

  useEffect(() => {
    document.title = `${t('realmTitle')} · ${t('brand')}`
  }, [locale, t])

  return (
    <article className="block">
      <div className="block-head">
        <p className="section-kicker">{t('navRealm')}</p>
        <h1>{t('realmTitle')}</h1>
        <p className="lede tight">{t('realmLede')}</p>
      </div>
      <div className="realm-compare">
        {kings.map((king) => {
          const map = wikiMapFor(king.id)
          if (!map) return null
          return (
            <figure key={king.id} className="realm-figure" id={king.id}>
              <img src={map.src} alt={map.alt} />
              <figcaption>
                <Link to={kingPath(king.id)}>{king.name}</Link>
                {king.role === 'heir' ? <Pill tone="heir">{t('heir')}</Pill> : null}
                <span className="king-tamil" lang="ta">
                  {king.nameTamil}
                </span>
                <span className="fine">
                  {king.coronationLabel} – {king.reignEndLabel}
                </span>
                <span>{map.caption}</span>
                <span className="credit">{map.credit}</span>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </article>
  )
}
