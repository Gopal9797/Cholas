import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { inscriptions } from '../data/inscriptions'
import { kingById, kingPath } from '../data/selectors'
import { useCopy, useLocale, useT } from '../i18n/Locale'

export function InscriptionsPage() {
  const t = useT()
  const copy = useCopy()
  const { locale } = useLocale()

  useEffect(() => {
    document.title = `${t('inscriptionsTitle')} · ${t('brand')}`
  }, [locale, t])

  return (
    <article className="block">
      <div className="block-head">
        <p className="section-kicker">{t('navInscriptions')}</p>
        <h1>{t('inscriptionsTitle')}</h1>
        <p className="lede tight">{t('inscriptionsLede')}</p>
      </div>
      <div className="card-index">
        {inscriptions.map((stone) => (
          <article key={stone.id} id={stone.id} className="dossier-card">
            <h2>{copy(stone.name)}</h2>
            <p>{copy(stone.records)}</p>
            <p className="fine">
              {t('linkedKings')}:{' '}
              {stone.kingIds.map((id, index) => {
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
