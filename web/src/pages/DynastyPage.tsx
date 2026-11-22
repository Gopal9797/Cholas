import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DynastyDiagram } from '../components/DynastyDiagram'

export function DynastyPage() {
  useEffect(() => {
    document.title = 'The dynasty · Cholas'
    return () => {
      document.title = 'The Chola dynasty'
    }
  }, [])

  return (
    <article className="dynasty-page">
      <p className="crumbs">
        <Link to="/">Cholas</Link>
        <span aria-hidden="true"> / </span>
        <span>Dynasty</span>
      </p>
      <p className="section-kicker">Family</p>
      <h1>The dynasty</h1>
      <p className="lede">
        Each card names the father and the mother where a record does. A blank parent means the stones used here do
        not name one. Dashed red links are a succession that historians still argue.
      </p>
      <p className="lede tight">
        Rajaraja Narendra was the Eastern Chalukya king of Vengi. His mother was Kundavai, daughter of Rajaraja I, so
        he was Rajaraja I’s grandson. He married Ammangadevi, daughter of Rajendra I and his own cousin. Their son
        was Kulottunga I, heir of both houses.
      </p>
      <DynastyDiagram />
    </article>
  )
}
