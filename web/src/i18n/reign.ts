import type { King, Locale } from '../data/types'
import { reignLength } from '../data/selectors'

export function lengthInLocale(king: King, locale: Locale): string {
  if (locale === 'en') return reignLength(king)
  if (king.reignEndYear == null) return ''
  const span = king.reignEndYear - king.coronationYear
  if (span <= 0) return 'ஒரு ஆண்டுக்குள்'
  if (span === 1) return 'சுமார் 1 ஆண்டு'
  return `சுமார் ${span} ஆண்டுகள்`
}
