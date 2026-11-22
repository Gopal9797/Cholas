import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Meikeerthi } from '../components/Meikeerthi'
import { Pill } from '../components/Pill'
import { RealmFigure } from '../components/RealmFigure'
import { coronationList, kingById, kingPath, reignLength, reignSpan } from '../data/selectors'
import { LEIDEN } from '../data/media'
import type { Battle, King, PersonRef } from '../data/types'

const toc = [
  ['meikeerthi', 'Meikeerthi'],
  ['reign', 'Reign'],
  ['family', 'Family'],
  ['battles', 'Battles'],
  ['realm', 'Realm'],
  ['sources', 'Sources'],
]

export function KingPage() {
  const { id = '' } = useParams()
  const king = kingById(id)
  const reduce = useReducedMotion()

  useEffect(() => {
    document.title = king ? `${king.name} · Cholas` : 'King not found · Cholas'
    return () => {
      document.title = 'The Chola dynasty'
    }
  }, [king])

  if (!king) {
    return (
      <div className="missing">
        <h1>This king is not in the first version</h1>
        <Link to="/">Back to the coronation list</Link>
      </div>
    )
  }

  const list = coronationList()
  const index = list.findIndex((item) => item.id === king.id)
  const earlier = index > 0 ? list[index - 1] : undefined
  const later = index >= 0 && index < list.length - 1 ? list[index + 1] : undefined
  const father = king.fatherId ? kingById(king.fatherId) : undefined
  const wins = king.battles.filter((battle) => battle.outcome === 'win')
  const losses = king.battles.filter((battle) => battle.outcome === 'loss')
  const contested = king.battles.filter((battle) => battle.outcome === 'contested')

  return (
    <motion.div
      className="wiki"
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <KingRail currentId={king.id} list={list} />
      <div className="wiki-main">
        <header className="king-hero">
          <p className="crumbs">
            <Link to="/">Cholas</Link>
            <span aria-hidden="true"> / </span>
            <Link to="/#kings">Kings</Link>
            <span aria-hidden="true"> / </span>
            <span>{king.name}</span>
          </p>
          <p className="section-kicker">{reignSpan(king)}</p>
          <h1>{king.name}</h1>
          <p className="king-hero-tamil" lang="ta">
            {king.nameTamil}
          </p>
          {king.birthName ? (
            <p className="birth-name">
              Birth name {king.birthName}
              {king.birthNameTamil ? (
                <span lang="ta"> {king.birthNameTamil}</span>
              ) : null}
            </p>
          ) : null}
          {king.birthNameNote ? <p className="fine birth-note">{king.birthNameNote}</p> : null}
          <div className="pill-row">
            {king.role === 'heir' ? <Pill tone="heir">Heir</Pill> : null}
            <Pill tone="muted">{king.birthLabel ? `Birth ${king.birthLabel}` : 'Birth year unknown'}</Pill>
            {king.epithet ? <Pill>{king.epithet}</Pill> : null}
            {king.coRulerLabel ? <Pill>{king.coRulerLabel}</Pill> : null}
            {king.coronationDebated || king.birthDebated ? <Pill tone="debated">Debated</Pill> : null}
          </div>
          {king.debate ? <p className="debate">{king.debate}</p> : null}
        </header>

        <aside className="infobox" aria-label="Facts">
          {king.image ? (
            <figure className="infobox-figure">
              <img src={king.image.src} alt={king.image.alt} />
              <figcaption>
                {king.image.caption}
                <span className="credit">{king.image.credit}</span>
              </figcaption>
            </figure>
          ) : null}
          <dl>
            <dt>Tamil</dt>
            <dd lang="ta">{king.nameTamil}</dd>
            <dt>Birth name</dt>
            <dd>
              {king.birthName ?? 'Not recorded separately'}
              {king.birthNameTamil ? (
                <span className="person-tamil" lang="ta">
                  {king.birthNameTamil}
                </span>
              ) : null}
            </dd>
            <dt>Reign</dt>
            <dd>{reignSpan(king)}</dd>
            <dt>Father</dt>
            <dd>{father ? <Link to={kingPath(father.id)}>{father.name}</Link> : king.fatherName ?? 'Not named here'}</dd>
            <dt>Mother</dt>
            <dd>
              {king.mother ? (
                <>
                  {king.mother.name}
                  {king.mother.nameTamil ? (
                    <span className="person-tamil" lang="ta">
                      {king.mother.nameTamil}
                    </span>
                  ) : null}
                  {king.mother.note ? <span className="person-note">{king.mother.note}</span> : null}
                </>
              ) : (
                'Not named here'
              )}
            </dd>
            <dt>Before</dt>
            <dd>{earlier ? <Link to={kingPath(earlier.id)}>{earlier.name}</Link> : '—'}</dd>
            <dt>After</dt>
            <dd>{later ? <Link to={kingPath(later.id)}>{later.name}</Link> : '—'}</dd>
          </dl>
        </aside>

        <div className="wiki-body">
          <nav className="toc" aria-label="On this page">
            {toc.map(([slug, label]) => (
              <a key={slug} href={`#${slug}`}>
                {label}
              </a>
            ))}
          </nav>

          <Meikeerthi text={king.meikeerthi} note={king.meikeerthiNote} titles={king.titles} />

          <section className="prose-block" id="reign">
            <h2>The reign</h2>
            <p>{king.summary}</p>
          </section>

          {king.id === 'rajaraja-i' ? (
            <figure className="plate plate-inline">
              <img src={LEIDEN.src} alt={LEIDEN.alt} />
              <figcaption>
                {LEIDEN.caption}
                <span className="credit">{LEIDEN.credit}</span>
              </figcaption>
            </figure>
          ) : null}

          <section className="family" id="family" aria-labelledby="family-title">
            <h2 id="family-title">Family</h2>
            <div className="family-grid">
              <People title="Wives" people={king.spouses} />
              <People title="Sons" people={king.sons} />
              <People title="Daughters" people={king.daughters} />
            </div>
            {king.familyNote ? <p className="fine">{king.familyNote}</p> : null}
          </section>

          <section className="battles" id="battles" aria-labelledby="battles-title">
            <h2 id="battles-title">Battles</h2>
            {king.battles.length === 0 ? (
              <p className="empty">No battle is recorded for this reign in the sources used here.</p>
            ) : (
              <div className="battle-grid">
                <BattleColumn title="Important wins" battles={wins} empty="No decisive victory is singled out here." />
                <BattleColumn title="Important losses" battles={losses} empty="No decisive defeat is recorded for this reign." />
                {contested.length > 0 ? <BattleColumn title="Disputed result" battles={contested} empty="" /> : null}
              </div>
            )}
          </section>

          <section className="realm" id="realm" aria-labelledby="map-title">
            <div className="block-head">
              <h2 id="map-title">Realm</h2>
              <Pill tone="map">Wikipedia map</Pill>
            </div>
            <RealmFigure kingId={king.id} />
          </section>

          <section className="page-sources" id="sources">
            <h2>Sources for this page</h2>
            <ul className="source-list">
              {king.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </section>

          <nav className="pager" aria-label="Other kings">
            {earlier ? (
              <Link to={kingPath(earlier.id)}>
                <span>Earlier coronation</span>
                {earlier.name}
              </Link>
            ) : (
              <span />
            )}
            {later ? (
              <Link to={kingPath(later.id)} className="pager-next">
                <span>Later coronation</span>
                {later.name}
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </div>
    </motion.div>
  )
}

function KingRail({ currentId, list }: { currentId: string; list: King[] }) {
  return (
    <nav className="wiki-rail" aria-label="Kings">
      <p className="section-kicker">Kings</p>
      {list.map((item) => (
        <Link key={item.id} to={kingPath(item.id)} className={item.id === currentId ? 'is-current' : undefined} aria-current={item.id === currentId ? 'page' : undefined}>
          <span>
            {item.coronationLabel} – {item.reignEndLabel}
          </span>
          <small>{reignLength(item)}</small>
          {item.name}
        </Link>
      ))}
      <HeirLink currentId={currentId} />
    </nav>
  )
}

function HeirLink({ currentId }: { currentId: string }) {
  const heir = kingById('aditya-ii')
  if (!heir) return null
  return (
    <Link to={kingPath(heir.id)} className={currentId === heir.id ? 'is-current' : undefined} aria-current={currentId === heir.id ? 'page' : undefined}>
      <span>
        {heir.coronationLabel} – {heir.reignEndLabel}
      </span>
      <small>Heir · {reignLength(heir)}</small>
      {heir.name}
    </Link>
  )
}

function People({ title, people }: { title: string; people: PersonRef[] }) {
  return (
    <div>
      <h3>{title}</h3>
      {people.length === 0 ? (
        <p className="empty">Not named in the records used here.</p>
      ) : (
        <ul className="people">
          {people.map((person) => (
            <li key={`${title}-${person.name}`}>
              {person.kingId ? <Link to={kingPath(person.kingId)}>{person.name}</Link> : <strong>{person.name}</strong>}
              {person.nameTamil ? (
                <span className="person-tamil" lang="ta">
                  {person.nameTamil}
                </span>
              ) : null}
              {person.note ? <span className="person-note">{person.note}</span> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function BattleColumn({ title, battles, empty }: { title: string; battles: Battle[]; empty: string }) {
  return (
    <div>
      <h3>{title}</h3>
      {battles.length === 0 ? (
        <p className="empty">{empty}</p>
      ) : (
        <ul className="battle-list">
          {battles.map((battle) => (
            <li key={battle.name}>
              <div className="pill-row">
                <Pill tone={battle.outcome === 'win' ? 'win' : battle.outcome === 'loss' ? 'loss' : 'debated'}>
                  {battle.outcome === 'win' ? 'Win' : battle.outcome === 'loss' ? 'Loss' : 'Contested'}
                </Pill>
                {battle.debated ? <Pill tone="debated">Debated</Pill> : null}
                {battle.yearLabel ? <Pill tone="muted">{battle.yearLabel}</Pill> : null}
              </div>
              <strong>{battle.name}</strong>
              <p>{battle.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
