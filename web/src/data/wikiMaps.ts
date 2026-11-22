import { media } from './media'

export type WikiMap = {
  src: string
  alt: string
  caption: string
  credit: string
}

const commons = 'Wikimedia Commons, CC BY-SA 3.0.'

function map(file: string, alt: string, caption: string, credit: string): WikiMap {
  return { src: media(`maps/${file}`), alt, caption, credit }
}

const derived =
  'Drawn from the English Wikipedia map of about 915 by Venu62, Wikimedia Commons, CC BY-SA 3.0, File: Parantaka territories.png. The Sri Lanka shading on that file is taken off here.'

const byKing: Record<string, WikiMap> = {
  vijayalaya: map(
    'vijayalaya.png',
    'Chola territory around Thanjavur under Vijayalaya, with Sri Lanka left off the map',
    'The grey is only the country around Thanjavur. Kanchipuram and Madurai are neighbours on the map, not his conquests. Sri Lanka is not shown. He did not take the island.',
    derived,
  ),
  'aditya-i': map(
    'aditya.png',
    'Chola territory under Aditya I, the Tamil country without Sri Lanka',
    'The grey is Tondai and the Tamil country after Aditya I broke the Pallavas. Sri Lanka is left off. The island campaign belongs to his son.',
    derived,
  ),
  'parantaka-i': map(
    'parantaka.png',
    'English Wikipedia map of Chola territory about 915, including a claim on northern Sri Lanka',
    'English Wikipedia’s map labeled about 915. The grey runs through Tondai and the Tamil country and onto northern Sri Lanka. That island shading belongs to this reign’s title, the king who took Madurai and Ilam. It does not belong to Vijayalaya.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Parantaka territories.png.`,
  ),
  gandaraditya: map(
    'kaveri-core.png',
    'Reduced Chola territory on the Kaveri after Takkolam, without Sri Lanka',
    'After Takkolam the hold shrank to the Kaveri. The grey is that river country. Sri Lanka is not shown. These short reigns did not recover the island or Tondai.',
    derived,
  ),
  arinjaya: map(
    'kaveri-core.png',
    'Reduced Chola territory on the Kaveri, without Sri Lanka',
    'The same reduced Kaveri country as his brother’s short reign. Sri Lanka is not shown.',
    derived,
  ),
  sundara: map(
    'sundara.png',
    'Chola territory under Parantaka II, the Tamil country without Sri Lanka',
    'The grey is the Tamil country, including Tondai, which the English Wikipedia says he took back from the Rashtrakutas. Sri Lanka is left off. The same account says the expedition to the island ended in a treaty, not a conquest.',
    derived,
  ),
  'aditya-ii': map(
    'sundara.png',
    'The Chola country during Aditya II’s years as heir, without Sri Lanka',
    'He fought in the Pandya country under his father. The grey is that Tamil country. Sri Lanka is not shown. He did not hold a realm of his own.',
    derived,
  ),
  uttama: map(
    'sundara.png',
    'Chola territory under Uttama, without Sri Lanka',
    'The grey is the Tamil country he inherited. Sri Lanka is not shown. No new island conquest belongs to this reign.',
    derived,
  ),
  'rajaraja-i': map(
    'rajaraja.png',
    'English Wikipedia map of the territories counted for Rajaraja I',
    'English Wikipedia’s map of the territories counted for Rajaraja I. It shades the Tamil country, Vengi, and northern Sri Lanka, with Polonnaruwa marked. The Maldives claim in his meikeerthi is not on this map.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Rajaraja territories.png.`,
  ),
  'rajendra-i': map(
    'rajendra.png',
    'English Wikipedia map of Rajendra I, territory in brown and influence in grey, about 1025 to 1030',
    'English Wikipedia’s map of Rajendra I, about 1025–1030. Brown is the land the map counts as Chola territory: the Tamil country, northern Sri Lanka, and the Vengi coast. Grey is influence, including the Ganges campaign and the ports struck in the Kadaram expedition. Those grey coasts were not annexed provinces.',
    `${commons} File: Rajendra territories cl.png.`,
  ),
  'rajadhiraja-i': map(
    'rajadhiraja.png',
    'English Wikipedia map of Chola territory about 1055',
    'English Wikipedia’s map of Chola territory about 1055, across the reigns of Rajadhiraja I and Rajendra II. Northern Sri Lanka is still shaded. The Deccan raids are not drawn as a province.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Rajadhiraja territories.png.`,
  ),
  'rajendra-ii': map(
    'rajadhiraja.png',
    'English Wikipedia map of Chola territory about 1055',
    'English Wikipedia’s map of Chola territory about 1055. Rajendra II’s Chalukya victories, including Koppam, are marked as a battle, not as a new province.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Rajadhiraja territories.png.`,
  ),
  virarajendra: map(
    'rajadhiraja.png',
    'English Wikipedia map of Chola territory about 1055',
    'The nearest map on the English Wikipedia for this reign is the one drawn for about 1055. Northern Sri Lanka is still shaded. Virarajendra’s own wars did not add a new province to that picture.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Rajadhiraja territories.png.`,
  ),
  adhirajendra: map(
    'rajadhiraja.png',
    'English Wikipedia map of Chola territory about 1055',
    'Adhirajendra’s reign is counted inside a single year. The nearest map on the English Wikipedia is the one drawn for about 1055, the imperial shape he inherited.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Rajadhiraja territories.png.`,
  ),
  'kulottunga-i': map(
    'kulottunga.png',
    'English Wikipedia map of Chola territory at the end of Kulottunga I, about 1120',
    'English Wikipedia’s map of Chola territory at the end of Kulottunga I, about 1120. Vengi is included. Sri Lanka is no longer shaded.',
    `${commons} File: Kulothunga territories cl.png.`,
  ),
  vikrama: map(
    'kulottunga.png',
    'English Wikipedia map of Chola territory about 1120',
    'English Wikipedia’s map for the end of his father’s reign, about 1120. Vikrama inherited that shape: the Tamil country and Vengi, without Sri Lanka.',
    `${commons} File: Kulothunga territories cl.png.`,
  ),
  'kulottunga-ii': map(
    'kulottunga.png',
    'English Wikipedia map of Chola territory about 1120',
    'The nearest published Wikipedia map for this reign is the one drawn for about 1120, the realm Kulottunga II inherited.',
    `${commons} File: Kulothunga territories cl.png.`,
  ),
  'rajaraja-ii': map(
    'kulottunga.png',
    'English Wikipedia map of Chola territory about 1120',
    'English Wikipedia’s map of the wide realm about 1120. Rajaraja II’s Pandya war is a crack in that shape, not yet a new border on this map.',
    `${commons} File: Kulothunga territories cl.png.`,
  ),
  'rajadhiraja-ii': map(
    'kulottunga.png',
    'English Wikipedia map of Chola territory about 1120',
    'English Wikipedia’s map of the realm about 1120, still the Tamil country and a Vengi connection. By Rajadhiraja II that outline was already harder to hold.',
    `${commons} File: Kulothunga territories cl.png.`,
  ),
  'kulottunga-iii': map(
    'kulottunga-iii.png',
    'English Wikipedia map of Chola territory in 1218',
    'English Wikipedia’s map of Chola territory in 1218, at the end of Kulottunga III. The shaded country runs from the Kaveri up toward Kanchipuram. Madurai, Vengi, and Sri Lanka sit outside it.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Kulothunga3 territories.png.`,
  ),
  'rajaraja-iii': map(
    'kulottunga-iii.png',
    'English Wikipedia map of Chola territory in 1218',
    'English Wikipedia’s map of Chola territory in 1218. Rajaraja III ruled inside that reduced country, and for part of the reign as a king who had been captured and released.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Kulothunga3 territories.png.`,
  ),
  'rajendra-iii': map(
    'kulottunga-iii.png',
    'English Wikipedia map of Chola territory in 1218',
    'English Wikipedia’s map of the reduced Chola country in 1218. Rajendra III tried to make that title mean something again. Jatavarman Sundara Pandya I then overran it. By about 1279 even this shape had ceased to be a sovereign realm.',
    `Drawn for the English Wikipedia by Venu62. ${commons} File: Kulothunga3 territories.png.`,
  ),
}

export function wikiMapFor(kingId: string): WikiMap | undefined {
  return byKing[kingId]
}
