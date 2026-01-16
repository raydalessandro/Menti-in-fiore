interface WaveShapeProps {
  color?: 'purple' | 'white' | 'blue' | 'green'
  position?: 'top' | 'bottom'
  className?: string
}

export function WaveShape({ color = 'purple', position = 'top', className = '' }: WaveShapeProps) {
  const colors = {
    purple: '#f3e5f5',
    white: '#ffffff',
    blue: '#e6f4fb',
    green: '#c8f0dd',
  }

  const fillColor = colors[color]

  return (
    <div className={`absolute left-0 right-0 ${position === 'top' ? 'top-0' : 'bottom-0'} overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1440 320"
        className={`w-full ${position === 'bottom' ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          fill={fillColor}
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}
