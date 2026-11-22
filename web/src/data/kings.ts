import { kingsEarly } from './kingsEarly'
import { kingsLater } from './kingsLater'
import { RAJARAJA_STATUE } from './media'
import { prasastiById } from './prasasti'
import type { King, PersonRef } from './types'

const sameName = 'The inscriptions use this name. A separate birth name is not recorded in the sources used here.'

const birthById: Record<string, { name: string; nameTamil: string; note: string }> = {
  vijayalaya: { name: 'Vijayalaya', nameTamil: 'விஜயாலயன்', note: sameName },
  'aditya-i': { name: 'Aditya', nameTamil: 'ஆதித்தன்', note: sameName },
  'parantaka-i': {
    name: 'Parantaka',
    nameTamil: 'பராந்தகன்',
    note: 'The inscriptions use Parantaka. Madurai and Ilam are conquest titles, not a birth name.',
  },
  gandaraditya: { name: 'Gandaraditya', nameTamil: 'கண்டராதித்தன்', note: sameName },
  arinjaya: { name: 'Arinjaya', nameTamil: 'அரிஞ்சயன்', note: 'Also written Arinjika. A separate birth name is not recorded.' },
  sundara: {
    name: 'Sundara',
    nameTamil: 'சுந்தரன்',
    note: 'He is remembered as Sundara Chola. His regnal name is Parantaka, his grandfather’s name.',
  },
  'aditya-ii': {
    name: 'Aditya',
    nameTamil: 'ஆதித்தன்',
    note: 'Karikala is the title that recalls the early Chola king. The personal name in his records is Aditya.',
  },
  uttama: {
    name: 'Madhurantaka',
    nameTamil: 'மதுராந்தகன்',
    note: 'An inscription of Sembiyan Mahadevi calls her son Madurantakadeva alias Uttamacholadeva. Uttama is the name he ruled under.',
  },
  'rajaraja-i': {
    name: 'Arunmolivarman',
    nameTamil: 'அருண்மொழிவர்மன்',
    note: 'The Tiruvalangadu copper plates spell the Sanskrit name Arunmolivarman. Tamil memory says Arulmozhivarman, அருள்மொழிவர்மன். He took the name Rajaraja at his coronation.',
  },
  'rajendra-i': {
    name: 'Madhurantaka',
    nameTamil: 'மதுராந்தகன்',
    note: 'The Tiruvalangadu plates name Rajaraja’s son Madhurantaka, and later records say Madhurantaka alias Rajendra. He is not Uttama Chola, who had the same personal name a generation earlier.',
  },
  'rajadhiraja-i': { name: 'Rajadhiraja', nameTamil: 'இராஜாதிராஜன்', note: sameName },
  'rajendra-ii': { name: 'Rajendra', nameTamil: 'இராஜேந்திரன்', note: sameName },
  virarajendra: { name: 'Virarajendra', nameTamil: 'வீரராஜேந்திரன்', note: sameName },
  adhirajendra: { name: 'Adhirajendra', nameTamil: 'அதிராஜேந்திரன்', note: sameName },
  'kulottunga-i': {
    name: 'Rajendra',
    nameTamil: 'இராஜேந்திரன்',
    note: 'Born a prince of Vengi. Early inscriptions still call him Rajendra Chola. Kulottunga is the name of the Chola coronation.',
  },
  vikrama: { name: 'Vikrama', nameTamil: 'விக்கிரமன்', note: sameName },
  'kulottunga-ii': { name: 'Kulottunga', nameTamil: 'குலோத்துங்கன்', note: sameName },
  'rajaraja-ii': { name: 'Rajaraja', nameTamil: 'இராஜராஜன்', note: sameName },
  'rajadhiraja-ii': { name: 'Rajadhiraja', nameTamil: 'இராஜாதிராஜன்', note: sameName },
  'kulottunga-iii': { name: 'Kulottunga', nameTamil: 'குலோத்துங்கன்', note: sameName },
  'rajaraja-iii': { name: 'Rajaraja', nameTamil: 'இராஜராஜன்', note: sameName },
  'rajendra-iii': { name: 'Rajendra', nameTamil: 'இராஜேந்திரன்', note: sameName },
}

const motherById: Record<string, PersonRef> = {
  uttama: {
    name: 'Sembiyan Mahadevi',
    nameTamil: 'செம்பியன் மாதேவி',
    note: 'An inscription calls her the queen who bore Madurantaka alias Uttama Chola.',
  },
  'aditya-ii': {
    name: 'Vanavan Mahadevi',
    nameTamil: 'வாணவன் மாதேவி',
    note: 'Later lists name her as his mother as well as Rajaraja’s. The stones are explicit for Rajaraja.',
  },
  'rajaraja-i': {
    name: 'Vanavan Mahadevi',
    nameTamil: 'வாணவன் மாதேவி',
    note: 'Named as his mother.',
  },
  'rajendra-i': {
    name: 'Vanavan Mahadevi',
    nameTamil: 'வாணவன் மாதேவி',
    note: 'A record of Rajaraja’s fourth year names her as the mother of Rajendra. Other lists give that place to Panchavan Mahadevi. Both names are on stone, and this page does not choose between them.',
  },
  'kulottunga-i': {
    name: 'Ammangadevi',
    nameTamil: 'அம்மங்கதேவி',
    note: 'Daughter of Rajendra I. The Chellur plates name her as Kulottunga’s mother.',
  },
}

const reignEndYearById: Record<string, number> = {
  vijayalaya: 871,
  'aditya-i': 907,
  'parantaka-i': 955,
  gandaraditya: 956,
  arinjaya: 957,
  sundara: 970,
  'aditya-ii': 971,
  uttama: 985,
  'rajaraja-i': 1014,
  'rajendra-i': 1044,
  'rajadhiraja-i': 1054,
  'rajendra-ii': 1063,
  virarajendra: 1070,
  adhirajendra: 1070,
  'kulottunga-i': 1122,
  vikrama: 1135,
  'kulottunga-ii': 1150,
  'rajaraja-ii': 1173,
  'rajadhiraja-ii': 1178,
  'kulottunga-iii': 1218,
  'rajaraja-iii': 1256,
  'rajendra-iii': 1279,
}

export const kings: King[] = [...kingsEarly, ...kingsLater].map((king) => {
  const prasasti = prasastiById[king.id]
  return {
    ...king,
    reignEndYear: reignEndYearById[king.id],
    birthName: birthById[king.id]?.name,
    birthNameTamil: birthById[king.id]?.nameTamil,
    birthNameNote: birthById[king.id]?.note,
    mother: motherById[king.id],
    fatherName: king.id === 'kulottunga-i' ? 'Rajaraja Narendra' : king.fatherName,
    ...(prasasti ? { meikeerthi: prasasti, meikeerthiNote: undefined } : {}),
    ...(king.id === 'rajaraja-i' ? { image: RAJARAJA_STATUE } : {}),
  }
})

export function kingById(id: string): King | undefined {
  return kings.find((king) => king.id === id)
}
