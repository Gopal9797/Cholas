import type { ReactNode } from 'react'

export function Pill({
  tone = 'gold',
  children,
}: {
  tone?: 'gold' | 'debated' | 'heir' | 'win' | 'loss' | 'map' | 'muted'
  children: ReactNode
}) {
  return <span className={`pill pill-${tone}`}>{children}</span>
}
