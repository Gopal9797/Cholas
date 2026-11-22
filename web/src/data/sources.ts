export const BOOKS = [
  'Sadasiva Pandarathar, Pirkaala Chozhar Sarithiram',
  'K. A. Nilakanta Sastri, The Cōḷas',
  'South India Under the Cholas',
]

export function bookSources(wiki: string): string[] {
  return [...BOOKS, `Wikipedia: ${wiki}`]
}
