import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Meikeerthi } from '../components/Meikeerthi'
import { Pill } from '../components/Pill'
import { RealmFigure } from '../components/RealmFigure'
import { inscriptions } from '../data/inscriptions'
import { people as courtPeople } from '../data/people'
import { coronationList, kingById, kingPath } from '../data/selectors'
import { LEIDEN } from '../data/media'
import { useLocale, useT } from '../i18n/Locale'
import { lengthInLocale } from '../i18n/reign'
import type { Battle, King, PersonRef } from '../data/types'
import type { UiKey } from '../i18n/ui'

export function KingPage() {
  const { id = '' } = useParams()
  const king = kingById(id)
  const reduce = useReducedMotion()
  const t = useT()
  const { locale } = useLocale()
  const toc: [string, UiKey][] = [
    ['meikeerthi', 'meikeerthi'],
    ['reign', 'reign'],
    ['family', 'family'],
    ['people', 'peopleOfReign'],
    ['inscriptions', 'inscriptions'],
    ['battles', 'battles'],
    ['realm', 'realm'],
    ['sources', 'sources'],
  ]

  useEffect(() => {
    document.title = king ? `${king.name} · ${t('brand')}` : `${t('missingKing')} · ${t('brand')}`
    return () => {
      document.title = 'The Chola dynasty'
    }
  }, [king, t])

  if (!king) {
    return (
      <div className="missing">
        <h1>{t('missingKing')}</h1>
        <Link to="/kings">{t('backHome')}</Link>
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
            <Link to="/">{t('brand')}</Link>
            <span aria-hidden="true"> / </span>
            <Link to="/kings">{t('navKings')}</Link>
            <span aria-hidden="true"> / </span>
            <span>{king.name}</span>
          </p>
          <p className="section-kicker">
            {king.coronationLabel} – {king.reignEndLabel}
            {lengthInLocale(king, locale) ? ` (${lengthInLocale(king, locale)})` : ''}
          </p>
          <h1>{king.name}</h1>
          <p className="king-hero-tamil" lang="ta">
            {king.nameTamil}
          </p>
          {king.birthName ? (
            <p className="birth-name">
              {t('birthName')} {king.birthName}
              {king.birthNameTamil ? (
                <span lang="ta"> {king.birthNameTamil}</span>
              ) : null}
            </p>
          ) : null}
          {king.birthNameNote ? <p className="fine birth-note">{king.birthNameNote}</p> : null}
          <div className="pill-row">
            {king.role === 'heir' ? <Pill tone="heir">{t('heir')}</Pill> : null}
            <Pill tone="muted">{king.birthLabel ? `${t('birth')} ${king.birthLabel}` : t('birthUnknown')}</Pill>
            {king.epithet ? <Pill>{king.epithet}</Pill> : null}
            {king.coRulerLabel ? <Pill>{king.coRulerLabel}</Pill> : null}
            {king.coronationDebated || king.birthDebated ? <Pill tone="debated">{t('debated')}</Pill> : null}
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
            <dt>{t('tamil')}</dt>
            <dd lang="ta">{king.nameTamil}</dd>
            <dt>{t('birthName')}</dt>
            <dd>
              {king.birthName ?? t('notRecorded')}
              {king.birthNameTamil ? (
                <span className="person-tamil" lang="ta">
                  {king.birthNameTamil}
                </span>
              ) : null}
            </dd>
            <dt>{t('reign')}</dt>
            <dd>
              {king.coronationLabel} – {king.reignEndLabel}
              {lengthInLocale(king, locale) ? ` (${lengthInLocale(king, locale)})` : ''}
            </dd>
            <dt>{t('father')}</dt>
            <dd>{father ? <Link to={kingPath(father.id)}>{father.name}</Link> : king.fatherName ?? t('notNamed')}</dd>
            <dt>{t('mother')}</dt>
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
                t('notNamed')
              )}
            </dd>
            <dt>{t('before')}</dt>
            <dd>{earlier ? <Link to={kingPath(earlier.id)}>{earlier.name}</Link> : '—'}</dd>
            <dt>{t('after')}</dt>
            <dd>{later ? <Link to={kingPath(later.id)}>{later.name}</Link> : '—'}</dd>
          </dl>
        </aside>

        <div className="wiki-body">
          <nav className="toc" aria-label={t('onThisPage')}>
            {toc.map(([slug, label]) => (
              <a key={slug} href={`#${slug}`}>
                {t(label)}
              </a>
            ))}
          </nav>

          <Meikeerthi
            text={king.meikeerthi}
            note={locale === 'ta' && king.meikeerthiNoteTamil ? king.meikeerthiNoteTamil : king.meikeerthiNote}
            titles={king.titles}
          />

          <section className="prose-block" id="reign">
            <h2>{t('theReign')}</h2>
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
            <h2 id="family-title">{t('family')}</h2>
            <div className="family-grid">
              <People title={t('wives')} people={king.spouses} empty={t('notInRecords')} />
              <People title={t('sons')} people={king.sons} empty={t('notInRecords')} />
              <People title={t('daughters')} people={king.daughters} empty={t('notInRecords')} />
            </div>
            {king.familyNote ? <p className="fine">{king.familyNote}</p> : null}
          </section>

          <Court kingId={king.id} />

          <Stones kingId={king.id} />

          <section className="battles" id="battles" aria-labelledby="battles-title">
            <h2 id="battles-title">{t('battles')}</h2>
            {king.battles.length === 0 ? (
              <p className="empty">{t('noBattle')}</p>
            ) : (
              <div className="battle-grid">
                <BattleColumn title={t('wins')} battles={wins} empty={t('noWin')} />
                <BattleColumn title={t('losses')} battles={losses} empty={t('noLoss')} />
                {contested.length > 0 ? <BattleColumn title={t('contested')} battles={contested} empty="" /> : null}
              </div>
            )}
          </section>

          <section className="realm" id="realm" aria-labelledby="map-title">
            <div className="block-head">
              <h2 id="map-title">{t('realm')}</h2>
              <Pill tone="map">{t('wikiMap')}</Pill>
            </div>
            <RealmFigure kingId={king.id} />
          </section>

          <section className="page-sources" id="sources">
            <h2>{t('sourcesForPage')}</h2>
            <ul className="source-list">
              {king.sources.map((source) => (
                <li key={source}>{source}</li>
              ))}
            </ul>
          </section>

          <nav className="pager" aria-label="Other kings">
            {earlier ? (
              <Link to={kingPath(earlier.id)}>
                <span>{t('earlier')}</span>
                {earlier.name}
              </Link>
            ) : (
              <span />
            )}
            {later ? (
              <Link to={kingPath(later.id)} className="pager-next">
                <span>{t('later')}</span>
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
  const t = useT()
  const { locale } = useLocale()
  return (
    <nav className="wiki-rail" aria-label={t('navKings')}>
      <p className="section-kicker">{t('navKings')}</p>
      {list.map((item) => (
        <Link key={item.id} to={kingPath(item.id)} className={item.id === currentId ? 'is-current' : undefined} aria-current={item.id === currentId ? 'page' : undefined}>
          <span>
            {item.coronationLabel} – {item.reignEndLabel}
          </span>
          <small>{lengthInLocale(item, locale)}</small>
          {item.name}
        </Link>
      ))}
      <HeirLink currentId={currentId} />
    </nav>
  )
}

function HeirLink({ currentId }: { currentId: string }) {
  const heir = kingById('aditya-ii')
  const t = useT()
  const { locale } = useLocale()
  if (!heir) return null
  return (
    <Link to={kingPath(heir.id)} className={currentId === heir.id ? 'is-current' : undefined} aria-current={currentId === heir.id ? 'page' : undefined}>
      <span>
        {heir.coronationLabel} – {heir.reignEndLabel}
      </span>
      <small>
        {t('heir')} · {lengthInLocale(heir, locale)}
      </small>
      {heir.name}
    </Link>
  )
}

function Court({ kingId }: { kingId: string }) {
  const t = useT()
  const named = courtPeople.filter((person) => person.kingIds.includes(kingId))
  return (
    <section className="family" id="people" aria-labelledby="people-title">
      <h2 id="people-title">{t('peopleOfReign')}</h2>
      {named.length === 0 ? (
        <p className="empty">{t('noPeople')}</p>
      ) : (
        <ul className="people">
          {named.map((person) => (
            <li key={person.id}>
              <Link to={`/people#${person.id}`}>
                <strong>{person.name}</strong>
              </Link>
              <span className="person-tamil" lang="ta">
                {person.nameTamil}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function Stones({ kingId }: { kingId: string }) {
  const t = useT()
  const { locale } = useLocale()
  const stones = inscriptions.filter((stone) => stone.kingIds.includes(kingId))
  return (
    <section className="prose-block" id="inscriptions">
      <h2>{t('inscriptions')}</h2>
      {stones.length === 0 ? (
        <p className="empty">{t('noStone')}</p>
      ) : (
        stones.map((stone) => (
          <p key={stone.id}>
            <Link to={`/inscriptions#${stone.id}`}>
              <strong>{stone.name[locale]}</strong>
            </Link>
            . {stone.records[locale]}
          </p>
        ))
      )}
    </section>
  )
}

function People({ title, people, empty }: { title: string; people: PersonRef[]; empty: string }) {
  return (
    <div>
      <h3>{title}</h3>
      {people.length === 0 ? (
        <p className="empty">{empty}</p>
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
  const t = useT()
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
                  {battle.outcome === 'win' ? t('win') : battle.outcome === 'loss' ? t('loss') : t('contested')}
                </Pill>
                {battle.debated ? <Pill tone="debated">{t('debated')}</Pill> : null}
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
