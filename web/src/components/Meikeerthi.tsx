import { useLocale } from '../i18n/Locale'
import type { Meikeerthi as MeikeerthiText } from '../data/types'

export function Meikeerthi({
  text,
  note,
  titles,
}: {
  text?: MeikeerthiText
  note?: string
  titles?: MeikeerthiText
}) {
  const { locale } = useLocale()
  const sense = (item?: MeikeerthiText) =>
    item ? (locale === 'ta' && item.senseTamil ? item.senseTamil : item.englishSense) : ''
  const aside = (item?: MeikeerthiText) =>
    item ? (locale === 'ta' && item.noteTamil ? item.noteTamil : item.note) : undefined

  return (
    <section className="meikeerthi" id="meikeerthi" aria-labelledby="meikeerthi-title">
      <p className="section-kicker" id="meikeerthi-title">
        {locale === 'ta' ? 'மெய்க்கீர்த்தி' : 'Meikeerthi'}
      </p>
      {titles ? (
        <>
          <p className="meikeerthi-tamil titles-tamil" lang="ta">
            {titles.tamil}
          </p>
          <p className="meikeerthi-sense">{sense(titles)}</p>
          {aside(titles) ? <p className="fine">{aside(titles)}</p> : null}
        </>
      ) : null}
      {text ? (
        <>
          <p className={text.tamil.split('\n').length > 12 ? 'meikeerthi-tamil is-long' : 'meikeerthi-tamil'} lang="ta">
            {text.tamil}
          </p>
          <p className="meikeerthi-sense">{sense(text)}</p>
          {aside(text) ? <p className="fine">{aside(text)}</p> : null}
        </>
      ) : !titles && note ? (
        <p className="meikeerthi-empty">{note}</p>
      ) : null}
    </section>
  )
}
