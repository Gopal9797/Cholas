import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DynastyDiagram } from '../components/DynastyDiagram'
import { Pill } from '../components/Pill'
import { coronationList, kingPath, reignSpan } from '../data/selectors'
import { CITY, LEIDEN, TIGER } from '../data/media'
import { BOOKS } from '../data/sources'
import type { King } from '../data/types'

export function HomePage() {
  const kings = coronationList()
  const reduce = useReducedMotion()

  useEffect(() => {
    document.title = 'The Chola dynasty'
  }, [])

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="hero">
        <div>
          <p className="section-kicker">Later Cholas · 9th to 13th century</p>
          <h1>The Chola dynasty</h1>
          <p className="lede">
            Twenty-one sovereigns, from Vijayalaya to Rajendra III, in the order they were crowned. Open any name
            for the meikeerthi, the family, the battles, and the map used on the English Wikipedia.
          </p>
        </div>
        <figure className="plate">
          <img src={LEIDEN.src} alt={LEIDEN.alt} />
          <figcaption>
            {LEIDEN.caption}
            <span className="credit">{LEIDEN.credit}</span>
          </figcaption>
        </figure>
      </section>

      <section id="kings" className="block">
        <div className="block-head">
          <p className="section-kicker">01 — Coronation</p>
          <h2>Crowned in order</h2>
        </div>
        <ol className="king-list">
          {kings.map((king, index) => (
            <li key={king.id}>
              <KingRow king={king} index={index + 1} />
            </li>
          ))}
        </ol>
      </section>

      <section id="dynasty" className="block">
        <div className="block-head">
          <p className="section-kicker">02 — Family</p>
          <h2>The dynasty</h2>
          <p className="lede tight">
            A family tree, not only a list of who sat next. Each card names a father and a mother where a record
            does. Rajaraja Narendra was Rajaraja I’s grandson through Kundavai, and he married Rajendra I’s daughter
            Ammangadevi. Their son was Kulottunga I.{' '}
            <Link to="/dynasty">Open the tree on a full page.</Link>
          </p>
        </div>
        <DynastyDiagram />
      </section>

      <section id="sources" className="block sources">
        <div className="block-head">
          <p className="section-kicker">03 — How this was written</p>
          <h2>Sources</h2>
        </div>
        <p>
          Dates follow the chronology associated with Nilakanta Sastri. A <Pill tone="debated">Debated</Pill> pill
          means a real alternative is widely cited: another accession year, a birth estimate, or a family link.
          Birth years stay unknown unless a source actually offers one.
        </p>
        <p>
          The sentences on this site were written for it. The books below are named as authorities. They are not
          quoted. Rajaraja I and Rajendra I have their stone prasastis. For the kings after them, the page gives
          the opening words by which each reign’s inscriptions are recognized. The rest of those poems is longer,
          and it is not copied from Pirkaala Chozhar Sarithiram. Kings before Rajaraja I are identified by titles,
          where a title survives, because the long meikeerthi is a habit that starts in his reign.
        </p>
        <p>
          A page-by-page reading of the printed books is not what this site claims. The chronology and the events
          follow those authorities. The Tamil on the king pages follows public inscriptional readings. The years in
          brackets are the span between the conventional start and end used here. Where a date is approximate, the
          count is approximate too.
        </p>
        <p>
          Each king’s map is a dark thematic chart. Gold ground is a schematic realm, with the places that
          belong to that phase. Dashed lines, on Rajendra I’s page, are campaign routes. They are not surveyed
          historical boundaries, and they are not a claim that the Ganges delta or Kadaram were Chola provinces.
        </p>
        <ul className="source-list">
          {BOOKS.map((book) => (
            <li key={book}>{book}</li>
          ))}
          <li>Wikipedia articles named on each king page</li>
          <li>South Indian Inscriptions, vol. 2, for the queens named at Thanjavur</li>
          <li>{CITY.credit}</li>
          <li>{TIGER.credit}</li>
          <li>{LEIDEN.credit}</li>
        </ul>
      </section>
    </motion.div>
  )
}

function KingRow({ king, index }: { king: King; index: number }) {
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
          <Pill tone="muted">{reignSpan(king)}</Pill>
          <Pill tone="muted">{king.birthLabel ? `Birth ${king.birthLabel}` : 'Birth year unknown'}</Pill>
          {king.epithet ? <Pill>{king.epithet}</Pill> : null}
          {king.coRulerLabel ? <Pill>{king.coRulerLabel}</Pill> : null}
          {king.coronationDebated || king.birthDebated ? <Pill tone="debated">Debated</Pill> : null}
        </span>
      </span>
    </Link>
  )
}
