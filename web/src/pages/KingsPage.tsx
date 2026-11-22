import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Pill } from '../components/Pill'
import { coronationList, kingPath, reignSpan } from '../data/selectors'
import type { King } from '../data/types'
import { useLocale, useT } from '../i18n/Locale'
import { lengthInLocale } from '../i18n/reign'

export function KingsPage() {
  const kings = coronationList()
  const reduce = useReducedMotion()
  const t = useT()
  const { locale } = useLocale()

  useEffect(() => {
    document.title = `${t('kingsTitle')} · ${t('brand')}`
  }, [locale, t])

  return (
    <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <section className="block">
        <div className="block-head">
          <p className="section-kicker">{t('kingsKicker')}</p>
          <h1>{t('kingsTitle')}</h1>
        </div>
        <ol className="king-list">
          {kings.map((king, index) => (
            <li key={king.id}>
              <KingRow king={king} index={index + 1} />
            </li>
          ))}
        </ol>
      </section>
    </motion.div>
  )
}

function KingRow({ king, index }: { king: King; index: number }) {
  const t = useT()
  const { locale } = useLocale()
  const length = lengthInLocale(king, locale)
  const range = `${king.coronationLabel} – ${king.reignEndLabel}${length ? ` (${length})` : ''}`
  return (
    <Link to={kingPath(king.id)} className="king-card" data-king={king.id} aria-label={`${king.name}, ${reignSpan(king)}`}>
      <span className="king-index">{String(index).padStart(2, '0')}</span>
      <span className="king-year">
        {king.coronationLabel} – {king.reignEndLabel}
      </span>
      <span className="king-copy">
        <span className="king-name">{king.name}</span>
        <span className="king-tamil" lang="ta">
          {king.nameTamil}
        </span>
        <span className="pill-row">
          <Pill tone="muted">{range}</Pill>
          <Pill tone="muted">{king.birthLabel ? `${t('birth')} ${king.birthLabel}` : t('birthUnknown')}</Pill>
          {king.epithet ? <Pill>{king.epithet}</Pill> : null}
          {king.coRulerLabel ? <Pill>{king.coRulerLabel}</Pill> : null}
          {king.coronationDebated || king.birthDebated ? <Pill tone="debated">{t('debated')}</Pill> : null}
        </span>
      </span>
    </Link>
  )
}
