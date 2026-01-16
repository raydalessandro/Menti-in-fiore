interface BlobShapeProps {
  color?: 'yellow' | 'tosca' | 'pink' | 'purple'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  animate?: boolean
}

export function BlobShape({
  color = 'yellow',
  size = 'md',
  className = '',
  animate = true
}: BlobShapeProps) {
  const colors = {
    yellow: '#fef7cd',
    tosca: '#a8e6cf',
    pink: '#ffe5f0',
    purple: '#f3e5f5',
  }

  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  }

  const fillColor = colors[color]
  const sizeClass = sizes[size]

  return (
    <div
      className={`${sizeClass} ${animate ? 'animate-float' : ''} ${className}`}
      style={{ opacity: 0.6 }}
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          fill={fillColor}
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.5,74.7C27.2,82.8,11.6,87.6,-3.9,94.5C-19.4,101.4,-34.8,110.4,-48.3,103.3C-61.8,96.2,-73.4,73,-80.8,51.1C-88.2,29.2,-91.4,8.6,-89.1,-11.3C-86.8,-31.2,-79,-50.4,-66.8,-58.1C-54.6,-65.8,-37.9,-62,-23.1,-68.9C-8.3,-75.8,4.6,-93.4,18.9,-99.6C33.2,-105.8,66.4,-100.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  )
}
