export type PersonRef = {
  name: string
  nameTamil?: string
  note?: string
  kingId?: string
}

export type Battle = {
  name: string
  yearLabel?: string
  outcome: 'win' | 'loss' | 'contested'
  summary: string
  debated?: boolean
}

export type Copy = {
  en: string
  ta: string
}

export type Locale = 'en' | 'ta'

export function readCopy(locale: Locale, value: string | Copy | undefined): string {
  if (!value) return ''
  if (typeof value === 'string') return value
  return value[locale] || value.en
}

export type Meikeerthi = {
  tamil: string
  englishSense: string
  senseTamil?: string
  note?: string
  noteTamil?: string
}

export type KingImage = {
  src: string
  alt: string
  caption: string
  credit: string
}

export type King = {
  id: string
  name: string
  nameTamil: string
  epithet?: string
  inCoronationList: boolean
  role: 'sovereign' | 'heir'
  sortIndex: number
  birthLabel?: string
  birthDebated?: boolean
  coronationYear: number
  coronationLabel: string
  coronationDebated?: boolean
  reignEndYear?: number
  reignEndLabel: string
  coRulerLabel?: string
  debate?: string
  birthName?: string
  birthNameTamil?: string
  birthNameNote?: string
  fatherId?: string
  fatherName?: string
  mother?: PersonRef
  spouses: PersonRef[]
  sons: PersonRef[]
  daughters: PersonRef[]
  familyNote?: string
  summary: string
  titles?: Meikeerthi
  meikeerthi?: Meikeerthi
  meikeerthiNote?: string
  meikeerthiNoteTamil?: string
  image?: KingImage
  battles: Battle[]
  territoryId: string
  territoryCaption: string
  sources: string[]
}

export type TerritoryFeature = {
  type: 'Feature'
  properties: {
    name: string
    kind: 'realm' | 'campaign' | 'foothold'
  }
  geometry:
    | { type: 'Polygon'; coordinates: [number, number][][] }
    | { type: 'LineString'; coordinates: [number, number][] }
    | { type: 'Point'; coordinates: [number, number] }
}

export type Territory = {
  id: string
  name: string
  features: TerritoryFeature[]
}

export type DiagramTone = 'sovereign' | 'heir' | 'kin' | 'debated'

export type DiagramPlacement = {
  id: string
  column: number
  row: number
  kingId?: string
  name?: string
  nameTamil?: string
  caption: string
  father?: string
  mother?: string
  tone: DiagramTone
}

export type DiagramEdge = {
  from: string
  to: string
  debated?: boolean
}
