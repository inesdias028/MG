import { iconMap } from './Icons.jsx'

// Stand-in for the watercolour illustrations from the Figma library.
// Swap any <Placeholder> for an <img src="…"> once the artwork exists.
// `variant` tints the soft wash: sea (blue) or sand (warm).
export default function Placeholder({ icon = 'sailboat', label, variant = 'sea', ratio = '4 / 3', className = '', style }) {
  const Icon = iconMap[icon] || iconMap.sailboat
  return (
    <div
      className={`ph ph--${variant} ${className}`}
      style={{ aspectRatio: ratio, ...style }}
      role="img"
      aria-label={label || 'Ilustração'}
    >
      <span className="ph__wash" aria-hidden="true" />
      <span className="ph__ico" aria-hidden="true">
        <Icon width="34" height="34" />
      </span>
      {label && <span className="ph__label">{label}</span>}
    </div>
  )
}
