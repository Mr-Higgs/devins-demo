/** The Devin mark rebuilt from three hexagons so each piece can animate. */
const hex = 'M0,-50 L43.3,-25 L43.3,25 L0,50 L-43.3,25 L-43.3,-25 Z'

export function HexMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-50 -112 195 224" aria-hidden="true">
      <defs>
        <linearGradient id="hx-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#78bfff" />
          <stop offset="100%" stopColor="#317cff" />
        </linearGradient>
        <linearGradient id="hx-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d3b5ff" />
          <stop offset="100%" stopColor="#956cde" />
        </linearGradient>
        <linearGradient id="hx-c" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7ff0b0" />
          <stop offset="100%" stopColor="#00a558" />
        </linearGradient>
      </defs>
      <g className="hx hx-1" transform="translate(0,-55)">
        <path d={hex} fill="url(#hx-a)" />
      </g>
      <g className="hx hx-2" transform="translate(0,55)">
        <path d={hex} fill="url(#hx-b)" />
      </g>
      <g className="hx hx-3" transform="translate(95,0)">
        <path d={hex} fill="url(#hx-c)" />
      </g>
    </svg>
  )
}
