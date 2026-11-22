import { diagramEdges, diagramPlacements } from './dynasty'
import { kingById, kings } from './kings'
import { territoryById } from './territories'
import type { DiagramPlacement, King } from './types'

export { kingById }

export function coronationList(): King[] {
  return kings
    .filter((king) => king.inCoronationList)
    .slice()
    .sort((a, b) => a.coronationYear - b.coronationYear || a.sortIndex - b.sortIndex)
}

export function dossierOrder(): King[] {
  return kings.slice().sort((a, b) => a.coronationYear - b.coronationYear || a.sortIndex - b.sortIndex)
}

export function kingPath(id: string): string {
  return `/kings/${id}`
}

export function reignLength(king: King): string {
  if (king.reignEndYear == null) return ''
  const span = king.reignEndYear - king.coronationYear
  if (span <= 0) return 'within a year'
  if (span === 1) return 'about 1 year'
  return `about ${span} years`
}

export function reignSpan(king: King): string {
  const length = reignLength(king)
  const range = `${king.coronationLabel} – ${king.reignEndLabel}`
  return length ? `${range} (${length})` : range
}

const debatedFathers = new Set(['rajadhiraja-ii', 'kulottunga-iii'])

export type DiagramNode = DiagramPlacement & {
  name: string
  nameTamil?: string
  birthLine?: string
  reignLine?: string
  fatherLine: string
  motherLine: string
}

export function diagramNodes(): DiagramNode[] {
  return diagramPlacements.map((placement) => {
    if (!placement.kingId) {
      return {
        ...placement,
        name: placement.name ?? placement.id,
        nameTamil: placement.nameTamil,
        fatherLine: placement.father ?? 'Not named here',
        motherLine: placement.mother ?? 'Not named here',
      }
    }
    const king = kingById(placement.kingId)
    const father = king?.fatherId ? kingById(king.fatherId) : undefined
    const born =
      king?.birthName && king.name && !king.name.startsWith(king.birthName) ? `Born ${king.birthName}` : undefined
    return {
      ...placement,
      name: king?.name ?? placement.kingId,
      nameTamil: king?.nameTamil,
      tone: king?.role === 'heir' ? 'heir' : placement.tone,
      birthLine: born,
      reignLine: king ? `${king.coronationLabel} – ${king.reignEndLabel}` : undefined,
      fatherLine: father?.name ?? king?.fatherName ?? (king && debatedFathers.has(king.id) ? 'Debated' : 'Not named here'),
      motherLine: king?.mother?.name ?? 'Not named here',
    }
  })
}

export function assertCatalog(): string[] {
  const problems: string[] = []
  const ids = kings.map((king) => king.id)
  if (new Set(ids).size !== ids.length) problems.push('duplicate king ids')
  for (const king of kings) {
    if (!territoryById(king.territoryId)) problems.push(`missing territory ${king.id}`)
    if (king.fatherId && !kingById(king.fatherId)) problems.push(`missing father ${king.id}`)
    if (!king.meikeerthi && !king.meikeerthiNote) problems.push(`missing meikeerthi note ${king.id}`)
    for (const person of [...king.sons, ...king.daughters]) {
      if (person.kingId && !kingById(person.kingId)) problems.push(`missing relative ${king.id}:${person.kingId}`)
    }
  }
  const nodeIds = new Set(diagramPlacements.map((node) => node.id))
  for (const edge of diagramEdges) {
    if (!nodeIds.has(edge.from) || !nodeIds.has(edge.to)) problems.push(`bad edge ${edge.from}->${edge.to}`)
  }
  for (const king of coronationList()) {
    if (!diagramPlacements.some((node) => node.kingId === king.id)) problems.push(`diagram missing ${king.id}`)
  }
  return problems
}
