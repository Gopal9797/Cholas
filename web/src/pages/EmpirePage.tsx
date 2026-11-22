import { useEffect } from 'react'
import { chapters } from '../data/empire'
import { useCopy, useLocale, useT } from '../i18n/Locale'

export function EmpirePage() {
  const t = useT()
  const copy = useCopy()
  const { locale } = useLocale()

  useEffect(() => {
    document.title = `${t('empireTitle')} · ${t('brand')}`
  }, [locale, t])

  return (
    <article className="block">
      <div className="block-head">
        <p className="section-kicker">{t('navEmpire')}</p>
        <h1>{t('empireTitle')}</h1>
        <p className="lede tight">{t('empireLede')}</p>
      </div>
      {chapters.map((chapter) => (
        <section key={chapter.id} id={chapter.id} className="chapter">
          <h2>{copy(chapter.title)}</h2>
          {chapter.paragraphs.map((paragraph) => (
            <p key={paragraph.en.slice(0, 40)}>{copy(paragraph)}</p>
          ))}
        </section>
      ))}
      <p className="fine">
        {locale === 'ta'
          ? 'வாக்கியங்கள் இந்தத் தளத்துக்காக எழுதப்பட்டவை. நூல்களும் கல்வெட்டுகளும் ஆதாரம்.'
          : 'The sentences were written for this site. The books and the inscriptions are the sources.'}
      </p>
    </article>
  )
}
