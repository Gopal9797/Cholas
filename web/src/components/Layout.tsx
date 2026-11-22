import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CITY } from '../data/media'
import { useLocale, useT } from '../i18n/Locale'

const links = [
  ['/kings', 'navKings'],
  ['/meikeerthis', 'navMeikeerthis'],
  ['/dynasty', 'navDynasty'],
  ['/inscriptions', 'navInscriptions'],
  ['/people', 'navPeople'],
  ['/realm', 'navRealm'],
  ['/empire', 'navEmpire'],
] as const

export function Layout() {
  const { pathname, hash } = useLocation()
  const wide = pathname === '/dynasty'
  const t = useT()
  const { locale, setLocale } = useLocale()

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
      <a className="skip" href="#content">
        {t('skip')}
      </a>
      <header className="topbar">
        <div className={wide ? 'topbar-inner is-wide' : 'topbar-inner'}>
          <NavLink to="/" className="brand" end>
            <span className="brand-seal" aria-hidden="true" />
            <span>{t('brand')}</span>
          </NavLink>
          <div className="topbar-tools">
            <nav className="nav" aria-label="Primary">
              {links.map(([to, key]) => (
                <Link key={to} to={to}>
                  {t(key)}
                </Link>
              ))}
            </nav>
            <div className="lang-switch" role="group" aria-label={locale === 'ta' ? 'மொழி' : 'Language'}>
              <button type="button" className={locale === 'en' ? 'is-on' : undefined} onClick={() => setLocale('en')}>
                English
              </button>
              <button type="button" className={locale === 'ta' ? 'is-on' : undefined} onClick={() => setLocale('ta')}>
                தமிழ்
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={wide ? 'shell shell-wide' : 'shell'}>
        <main id="content" className="main">
          <Outlet />
        </main>
      </div>
    </>
  )
}
