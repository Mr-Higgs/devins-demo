import devinLogo from '../assets/brand/devin-logo.svg'
import cognitionLockup from '../assets/brand/cognition-lockup.svg'

const logos = {
  devin: { src: devinLogo, ratio: 97 / 26, label: 'Devin' },
  cognition: { src: cognitionLockup, ratio: 720 / 300, label: 'Cognition' },
}

type Props = { name: keyof typeof logos; height: number; className?: string }

/** Renders a brand SVG as a mask so it inherits `color` (works in light and dark mode). */
export function Logo({ name, height, className }: Props) {
  const { src, ratio, label } = logos[name]
  return (
    <span
      role="img"
      aria-label={label}
      className={`logo ${className ?? ''}`}
      style={{
        height,
        width: height * ratio,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
      }}
    />
  )
}
