import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { diagramEdges } from '../data/dynasty'
import { diagramNodes, kingPath, type DiagramNode } from '../data/selectors'
import { useT } from '../i18n/Locale'

const NODE_W = 228
const NODE_H = 196
const GAP_X = 46
const GAP_Y = 22
const STEP_X = NODE_W + GAP_X
const STEP_Y = NODE_H + GAP_Y

function place(node: DiagramNode) {
  return { x: node.column * STEP_X, y: node.row * STEP_Y }
}

function useNarrow() {
  const [narrow, setNarrow] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 760px)').matches : false,
  )
  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px)')
    const onChange = () => setNarrow(query.matches)
    onChange()
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])
  return narrow
}

function parentLine(value: string, debated: string, unnamed: string) {
  if (value === 'Debated') return debated
  if (value === 'Not named here') return unnamed
  return value
}

function NodeBody({ node }: { node: DiagramNode }) {
  const t = useT()
  return (
    <>
      <span className="node-name">{node.name}</span>
      {node.nameTamil ? (
        <span className="node-tamil" lang="ta">
          {node.nameTamil}
        </span>
      ) : null}
      {node.birthLine ? <span className="node-meta">{node.birthLine}</span> : null}
      {node.reignLine ? <span className="node-meta">{node.reignLine}</span> : null}
      <span className="node-meta">
        {t('father')}: {parentLine(node.fatherLine, t('debated'), t('notNamed'))}
      </span>
      <span className="node-meta">
        {t('mother')}: {parentLine(node.motherLine, t('debated'), t('notNamed'))}
      </span>
      {node.tone === 'kin' || node.tone === 'debated' ? <span className="node-caption">{node.caption}</span> : null}
    </>
  )
}

export function DynastyDiagram() {
  const nodes = diagramNodes()
  const narrow = useNarrow()
  const byId = Object.fromEntries(nodes.map((node) => [node.id, node]))
  const maxColumn = Math.max(...nodes.map((node) => node.column))
  const maxRow = Math.max(...nodes.map((node) => node.row))
  const width = (maxColumn + 1) * STEP_X - GAP_X
  const height = (maxRow + 1) * STEP_Y - GAP_Y
  const stacked = [...nodes].sort((a, b) => a.column - b.column || a.row - b.row)

  if (narrow) {
    return (
      <div className="dynasty-stack">
        {stacked.map((node) =>
          node.kingId ? (
            <Link key={node.id} to={kingPath(node.kingId)} className={`tree-node tone-${node.tone}`} data-diagram-node={node.id}>
              <NodeBody node={node} />
            </Link>
          ) : (
            <div key={node.id} className={`tree-node tone-${node.tone}`} data-diagram-node={node.id}>
              <NodeBody node={node} />
            </div>
          ),
        )}
        <Legend />
      </div>
    )
  }

  return (
    <DynastyScroller width={width} height={height}>
      <div className="dynasty-board" style={{ width, height }} role="group" aria-label="Dynasty diagram">
        <svg className="dynasty-lines" width={width} height={height} aria-hidden="true">
          {diagramEdges.map((edge) => {
            const from = byId[edge.from]
            const to = byId[edge.to]
            if (!from || !to) return null
            const a = place(from)
            const b = place(to)
            const x1 = a.x + NODE_W
            const y1 = a.y + NODE_H / 2
            const x2 = b.x
            const y2 = b.y + NODE_H / 2
            const mid = (x1 + x2) / 2
            const d = y1 === y2 ? `M ${x1} ${y1} H ${x2}` : `M ${x1} ${y1} H ${mid} V ${y2} H ${x2}`
            return (
              <path
                key={`${edge.from}-${edge.to}`}
                d={d}
                fill="none"
                stroke={edge.debated ? '#d4533e' : '#e4c27a'}
                strokeWidth="1.4"
                strokeDasharray={edge.debated ? '5 6' : undefined}
              />
            )
          })}
        </svg>
        {nodes.map((node) => {
          const { x, y } = place(node)
          const className = `tree-node tone-${node.tone}`
          const style = { left: x, top: y, width: NODE_W, height: NODE_H }
          if (!node.kingId) {
            return (
              <div key={node.id} className={className} style={style} data-diagram-node={node.id}>
                <NodeBody node={node} />
              </div>
            )
          }
          return (
            <Link key={node.id} to={kingPath(node.kingId)} className={className} style={style} data-diagram-node={node.id}>
              <NodeBody node={node} />
            </Link>
          )
        })}
      </div>
    </DynastyScroller>
  )
}

function DynastyScroller({
  width,
  height,
  children,
}: {
  width: number
  height: number
  children: ReactNode
}) {
  const scroller = useRef<HTMLDivElement>(null)
  const [edges, setEdges] = useState({ left: false, right: true })

  function measure() {
    const node = scroller.current
    if (!node) return
    setEdges({
      left: node.scrollLeft > 8,
      right: node.scrollLeft + node.clientWidth < node.scrollWidth - 8,
    })
  }

  useEffect(() => {
    measure()
    const node = scroller.current
    node?.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      node?.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [width])

  function nudge(direction: number) {
    const node = scroller.current
    if (!node) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    node.scrollBy({ left: direction * Math.min(420, node.clientWidth * 0.72), behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <div className="dynasty-wrap">
      <div className="dynasty-controls">
        <p className="slide-hint">
          <span className="slide-arrows" aria-hidden="true">
            ← →
          </span>
          Slide sideways. The family runs off the right edge.
        </p>
        <div className="slide-buttons">
          <button type="button" onClick={() => nudge(-1)} aria-label="Slide the dynasty chart left" disabled={!edges.left}>
            ←
          </button>
          <button type="button" onClick={() => nudge(1)} aria-label="Slide the dynasty chart right" disabled={!edges.right}>
            →
          </button>
        </div>
      </div>
      <div className={`dynasty-fade${edges.left ? ' can-left' : ''}${edges.right ? ' can-right' : ''}`} style={{ minHeight: height }}>
        <div
          className="dynasty-scroll"
          ref={scroller}
          tabIndex={0}
          aria-label={`Dynasty chart, ${width} pixels wide. Use the arrow buttons or slide sideways.`}
        >
          {children}
        </div>
      </div>
      <Legend />
    </div>
  )
}

function Legend() {
  const t = useT()
  return (
    <ul className="legend">
      <li>{t('legendParent')}</li>
      <li>{t('legendDebated')}</li>
      <li>{t('legendHeir')}</li>
      <li>{t('legendNarendra')}</li>
    </ul>
  )
}
