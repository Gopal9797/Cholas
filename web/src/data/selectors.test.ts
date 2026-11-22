import { describe, expect, it } from 'vitest'
import { diagramPlacements } from './dynasty'
import { kings } from './kings'
import { assertCatalog, coronationList, kingPath, reignSpan } from './selectors'

describe('chola catalog', () => {
  it('has no catalog problems', () => {
    expect(assertCatalog()).toEqual([])
  })

  it('lists 21 sovereigns in ascending coronation order', () => {
    const list = coronationList()
    expect(list).toHaveLength(21)
    const years = list.map((king) => king.coronationYear)
    const sorted = [...years].sort((a, b) => a - b)
    expect(years).toEqual(sorted)
    expect(list[0]?.id).toBe('vijayalaya')
    expect(list.at(-1)?.id).toBe('rajendra-iii')
  })

  it('keeps ids unique and routable', () => {
    const ids = kings.map((king) => king.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const king of coronationList()) {
      expect(king.id).toMatch(/^[a-z0-9-]+$/)
      expect(kingPath(king.id)).toBe(`/kings/${king.id}`)
    }
  })

  it('puts Aditya II on the diagram and not in the coronation list', () => {
    expect(coronationList().some((king) => king.id === 'aditya-ii')).toBe(false)
    expect(diagramPlacements.some((node) => node.kingId === 'aditya-ii')).toBe(true)
  })

  it('orders the two kings crowned in 1070 as Adhirajendra then Kulottunga I', () => {
    const list = coronationList()
    const adhi = list.findIndex((king) => king.id === 'adhirajendra')
    const kulottunga = list.findIndex((king) => king.id === 'kulottunga-i')
    expect(adhi).toBeGreaterThan(-1)
    expect(kulottunga).toBe(adhi + 1)
  })

  it('quotes inscriptional Tamil for the kings who have a stable opening', () => {
    const byId = Object.fromEntries(kings.map((king) => [king.id, king]))
    expect(byId['rajaraja-i']?.meikeerthi?.tamil).toContain('திருமகள்')
    expect(byId['rajendra-i']?.meikeerthi?.tamil).toContain('திருமன்னி')
    expect(byId['rajendra-i']?.meikeerthi?.tamil).toContain('கங்கை')
    expect(byId['rajendra-i']?.meikeerthi?.tamil).toContain('கடார')
    expect(byId['parantaka-i']?.meikeerthi?.tamil).toContain('மதுரை')
    expect(byId['kulottunga-i']?.meikeerthi?.tamil).toContain('புகழ் சூழ்ந்த புணரி')
    expect(byId['rajendra-iii']?.meikeerthi?.tamil).toContain('பூமியும் திருவும்')
    expect(byId['rajaraja-i']?.spouses.length).toBeGreaterThan(5)
    expect(byId.vijayalaya?.meikeerthi).toBeUndefined()
    expect(byId['aditya-ii']?.sons.some((son) => son.name === 'Karikala Kannan')).toBe(true)
    expect(kings.every((king) => king.reignEndYear != null)).toBe(true)
    expect(reignSpan(byId.vijayalaya!)).toBe('c. 848 – c. 871 (about 23 years)')
    expect(reignSpan(byId['rajaraja-i']!)).toBe('c. 985 – c. 1014 (about 29 years)')
    expect(reignSpan(byId.adhirajendra!)).toBe('c. 1070 – c. 1070 (within a year)')
    expect(kings.every((king) => king.birthName && king.birthNameNote)).toBe(true)
    expect(byId['rajendra-i']?.birthName).toBe('Madhurantaka')
    expect(byId['uttama']?.birthName).toBe('Madhurantaka')
    expect(byId['kulottunga-i']?.birthName).toBe('Rajendra')
    expect(diagramPlacements.some((node) => node.id === 'kundavai-chalukya')).toBe(true)
    expect(diagramPlacements.find((node) => node.id === 'rajaraja-narendra')?.caption).toContain('Grandson of Rajaraja I')
    expect(byId.vijayalaya?.meikeerthiNote).toBeTruthy()
  })
})
