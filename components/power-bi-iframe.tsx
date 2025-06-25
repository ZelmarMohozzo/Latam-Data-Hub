"use client"

interface PowerBIIframeProps {
  src: string
  title: string
  width?: string
  height?: string
  className?: string
}

export function PowerBIIframe({ src, title, width = "100%", height = "600px", className = "" }: PowerBIIframeProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border ${className}`}>
      <iframe
        src={src}
        title={title}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
        className="w-full"
        style={{ minHeight: height }}
      />
    </div>
  )
}
