import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DynastyDiagram } from '../components/DynastyDiagram'
import { useLocale, useT } from '../i18n/Locale'

export function DynastyPage() {
  const t = useT()
  const { locale } = useLocale()

  useEffect(() => {
    document.title = `${t('doorDynasty')} · ${t('brand')}`
  }, [locale, t])

  return (
    <article className="dynasty-page">
      <p className="crumbs">
        <Link to="/">{t('brand')}</Link>
        <span aria-hidden="true"> / </span>
        <span>{t('navDynasty')}</span>
      </p>
      <p className="section-kicker">{t('family')}</p>
      <h1>{t('doorDynasty')}</h1>
      <p className="lede">{t('dynastyLede')}</p>
      <p className="lede tight">{t('dynastyNarendra')}</p>
      <DynastyDiagram />
    </article>
  )
}
