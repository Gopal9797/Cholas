import { wikiMapFor } from '../data/wikiMaps'

export function RealmFigure({ kingId }: { kingId: string }) {
  const map = wikiMapFor(kingId)
  if (!map) return null
  return (
    <figure className="realm-figure">
      <img src={map.src} alt={map.alt} />
      <figcaption>
        {map.caption}
        <span className="credit">{map.credit}</span>
      </figcaption>
    </figure>
  )
}
