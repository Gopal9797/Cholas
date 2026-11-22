import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { people } from '../data/people'
import { kingById, kingPath } from '../data/selectors'
import { useCopy, useLocale, useT } from '../i18n/Locale'

export function PeoplePage() {
  const t = useT()
  const copy = useCopy()
  const { locale } = useLocale()

  useEffect(() => {
    document.title = `${t('peopleTitle')} · ${t('brand')}`
  }, [locale, t])

  return (
    <article className="block">
      <div className="block-head">
        <p className="section-kicker">{t('navPeople')}</p>
        <h1>{t('peopleTitle')}</h1>
        <p className="lede tight">{t('peopleLede')}</p>
      </div>
      <div className="card-index">
        {people.map((person) => (
          <article key={person.id} id={person.id} className="dossier-card">
            <h2>{person.name}</h2>
            <p className="king-tamil" lang="ta">
              {person.nameTamil}
            </p>
            <p className="section-kicker">{copy(person.role)}</p>
            <p>{copy(person.about)}</p>
            <p className="fine">
              {t('linkedKings')}:{' '}
              {person.kingIds.map((id, index) => {
                const king = kingById(id)
                if (!king) return null
                return (
                  <span key={id}>
                    {index > 0 ? ', ' : ''}
                    <Link to={kingPath(id)}>{king.name}</Link>
                  </span>
                )
              })}
            </p>
          </article>
        ))}
      </div>
    </article>
  )
}
