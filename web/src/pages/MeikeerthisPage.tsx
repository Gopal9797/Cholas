import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pill } from '../components/Pill'
import { dossierOrder, kingPath } from '../data/selectors'
import { useLocale, useT } from '../i18n/Locale'

export function MeikeerthisPage() {
  const kings = dossierOrder()
  const t = useT()
  const { locale } = useLocale()

  useEffect(() => {
    document.title = `${t('meikeerthisTitle')} · ${t('brand')}`
  }, [locale, t])

  return (
    <article className="block">
      <div className="block-head">
        <p className="section-kicker">{t('navMeikeerthis')}</p>
        <h1>{t('meikeerthisTitle')}</h1>
        <p className="lede tight">{t('meikeerthisLede')}</p>
      </div>
      <div className="meikeerthi-index">
        {kings.map((king) => {
          const verse = king.meikeerthi
          const titles = king.titles
          const sense = (item?: { englishSense: string; senseTamil?: string }) =>
            item ? (locale === 'ta' && item.senseTamil ? item.senseTamil : item.englishSense) : ''
          return (
            <article key={king.id} id={king.id}>
              <p className="section-kicker">{king.coronationLabel}</p>
              <h2>
                <Link to={kingPath(king.id)}>{king.name}</Link>
                {king.role === 'heir' ? <Pill tone="heir">{t('heir')}</Pill> : null}
              </h2>
              <p className="king-tamil" lang="ta">
                {king.nameTamil}
              </p>
              {titles ? (
                <p className="meikeerthi-tamil titles-tamil" lang="ta">
                  {titles.tamil}
                </p>
              ) : null}
              {titles ? <p className="meikeerthi-sense">{sense(titles)}</p> : null}
              {verse ? (
                <p className={verse.tamil.split('\n').length > 12 ? 'meikeerthi-tamil is-long' : 'meikeerthi-tamil'} lang="ta">
                  {verse.tamil}
                </p>
              ) : (
                <p className="meikeerthi-empty">
                  {(locale === 'ta' ? king.meikeerthiNoteTamil : king.meikeerthiNote) ?? t('noVerse')}
                </p>
              )}
              {verse ? <p className="meikeerthi-sense">{sense(verse)}</p> : null}
            </article>
          )
        })}
      </div>
    </article>
  )
}
