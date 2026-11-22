import type { Territory, TerritoryFeature } from './types'

function realm(name: string, ring: [number, number][]): TerritoryFeature {
  return {
    type: 'Feature',
    properties: { name, kind: 'realm' },
    geometry: { type: 'Polygon', coordinates: [[...ring, ring[0]]] },
  }
}

function campaign(name: string, line: [number, number][]): TerritoryFeature {
  return {
    type: 'Feature',
    properties: { name, kind: 'campaign' },
    geometry: { type: 'LineString', coordinates: line },
  }
}

const cauveryRing: [number, number][] = [
  [78.35, 11.35],
  [79.15, 11.45],
  [79.85, 11.15],
  [79.95, 10.55],
  [79.25, 10.35],
  [78.55, 10.55],
  [78.25, 10.95],
]

const tamilRing: [number, number][] = [
  [76.95, 11.55],
  [78.15, 13.25],
  [80.28, 13.35],
  [80.25, 11.35],
  [79.95, 10.15],
  [79.55, 8.85],
  [78.15, 8.15],
  [77.15, 8.35],
  [76.85, 10.15],
]

const lankaRing: [number, number][] = [
  [79.7, 9.75],
  [80.45, 9.8],
  [81.15, 8.55],
  [80.95, 7.55],
  [79.95, 7.75],
  [79.65, 8.85],
]

const vengiRing: [number, number][] = [
  [80.15, 16.75],
  [82.15, 16.95],
  [82.05, 16.15],
  [81.15, 15.35],
  [80.45, 14.15],
  [80.15, 13.45],
  [79.85, 14.55],
  [80.05, 16.05],
]

const lateRing: [number, number][] = [
  [78.55, 13.15],
  [80.15, 13.25],
  [80.05, 11.25],
  [79.55, 10.55],
  [78.55, 10.7],
  [78.35, 12.05],
]

const gangesLine: [number, number][] = [
  [81.8, 16.7],
  [83.3, 17.75],
  [85.85, 20.45],
  [88.35, 22.55],
]

const kadaramLine: [number, number][] = [
  [79.85, 10.77],
  [92.2, 10.1],
  [100.35, 6.15],
]

const cauvery = realm('Kaveri core', cauveryRing)
const tamil = realm('Tamil country', tamilRing)
const lanka = realm('Northern Sri Lanka', lankaRing)
const vengi = realm('Vengi', vengiRing)
const lateCore = realm('Reduced Chola country', lateRing)
const ganges = campaign('Ganges campaign', gangesLine)
const kadaram = campaign('Kadaram expedition', kadaramLine)

export const territories: Territory[] = [
  { id: 'cauvery', name: 'Kaveri core', features: [cauvery] },
  { id: 'expansion', name: 'Tondai and Pandya expansion', features: [tamil] },
  { id: 'expansion-ilam', name: 'Expansion with northern Sri Lanka', features: [tamil, lanka] },
  { id: 'after-takkolam', name: 'After Takkolam', features: [cauvery] },
  { id: 'rajaraja', name: 'Rajaraja’s realm', features: [tamil, lanka] },
  { id: 'imperial', name: 'Imperial core', features: [tamil, lanka] },
  { id: 'rajendra', name: 'Rajendra’s realm and campaigns', features: [tamil, lanka, ganges, kadaram] },
  { id: 'kulottunga', name: 'Chalukya-Chola realm', features: [tamil, vengi] },
  { id: 'contraction', name: 'Contracted realm', features: [lateCore] },
]

export function territoryById(id: string): Territory | undefined {
  return territories.find((territory) => territory.id === id)
}

export type MapPlace = { name: string; lat: number; lng: number }

const PLACES: Array<MapPlace & { territories: string[] }> = [
  { name: 'Thanjavur', lat: 10.787, lng: 79.137, territories: ['cauvery', 'expansion', 'expansion-ilam', 'after-takkolam', 'rajaraja', 'imperial', 'rajendra', 'kulottunga', 'contraction'] },
  { name: 'Palaiyarai', lat: 10.96, lng: 79.38, territories: ['cauvery', 'after-takkolam'] },
  { name: 'Kanchipuram', lat: 12.835, lng: 79.704, territories: ['expansion'] },
  { name: 'Madurai', lat: 9.925, lng: 78.12, territories: ['expansion', 'expansion-ilam', 'rajaraja', 'imperial', 'rajendra'] },
  { name: 'Nagapattinam', lat: 10.766, lng: 79.842, territories: ['rajaraja', 'imperial', 'rajendra'] },
  { name: 'Gangaikonda Cholapuram', lat: 11.206, lng: 79.449, territories: ['imperial', 'rajendra', 'kulottunga', 'contraction'] },
  { name: 'Northern Lanka', lat: 8.35, lng: 80.4, territories: ['expansion-ilam', 'rajaraja', 'imperial', 'rajendra'] },
  { name: 'Vengi', lat: 16.55, lng: 81.15, territories: ['kulottunga'] },
  { name: 'Darasuram', lat: 10.948, lng: 79.356, territories: ['contraction'] },
  { name: 'Thirubhuvanam', lat: 10.959, lng: 79.443, territories: ['contraction'] },
]

export function placesFor(territoryId: string): MapPlace[] {
  return PLACES.filter((place) => place.territories.includes(territoryId)).map(({ name, lat, lng }) => ({ name, lat, lng }))
}
