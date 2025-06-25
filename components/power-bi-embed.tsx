"use client"

import { useEffect, useRef } from "react"

interface PowerBIEmbedProps {
  embedUrl: string
  reportId: string
  width?: string
  height?: string
  className?: string
}

export function PowerBIEmbed({
  embedUrl,
  reportId,
  width = "100%",
  height = "600px",
  className = "",
}: PowerBIEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Cargar el SDK de Power BI
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/powerbi-client@2.22.1/dist/powerbi.min.js"
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      if (containerRef.current && window.powerbi) {
        const config = {
          type: "report",
          id: reportId,
          embedUrl: embedUrl,
          accessToken: "", // Aquí irá tu token de acceso
          tokenType: window.powerbi.models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: true,
              },
            },
            background: window.powerbi.models.BackgroundType.Transparent,
          },
        }

        // Insertar el reporte
        window.powerbi.embed(containerRef.current, config)
      }
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [embedUrl, reportId])

  return (
    <div ref={containerRef} className={`border rounded-lg overflow-hidden ${className}`} style={{ width, height }} />
  )
}
