import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CITY } from '../data/media'

export function Layout() {
  const { pathname, hash } = useLocation()
  const wide = pathname === '/dynasty'

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
    <div className="atmosphere" aria-hidden="true">
      <img src={CITY.src} alt="" />
    </div>
    <div className={wide ? 'shell shell-wide' : 'shell'}>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="topbar">
        <NavLink to="/" className="brand" end>
          <span className="brand-seal" aria-hidden="true" />
          <span>Cholas</span>
        </NavLink>
        <nav className="nav" aria-label="Primary">
          <Link to="/#kings">Kings</Link>
          <Link to="/dynasty">Dynasty</Link>
          <Link to="/#sources">Sources</Link>
        </nav>
      </header>
      <main id="content" className="main">
        <Outlet />
      </main>
    </div>
    </>
  )
}
