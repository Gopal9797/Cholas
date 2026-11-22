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
  return (
    <section className="meikeerthi" id="meikeerthi" aria-labelledby="meikeerthi-title">
      <p className="section-kicker" id="meikeerthi-title">
        Meikeerthi
      </p>
      {titles ? (
        <>
          <p className="meikeerthi-tamil" lang="ta">
            {titles.tamil}
          </p>
          <p className="meikeerthi-sense">{titles.englishSense}</p>
          {titles.note ? <p className="fine">{titles.note}</p> : null}
        </>
      ) : null}
      {text ? (
        <>
          <p className={text.tamil.split('\n').length > 12 ? 'meikeerthi-tamil is-long' : 'meikeerthi-tamil'} lang="ta">
            {text.tamil}
          </p>
          <p className="meikeerthi-sense">{text.englishSense}</p>
          {text.note ? <p className="fine">{text.note}</p> : null}
        </>
      ) : !titles && note ? (
        <p className="meikeerthi-empty">{note}</p>
      ) : null}
    </section>
  )
}
