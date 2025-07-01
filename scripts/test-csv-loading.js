// Script para probar la carga de CSVs y diagnosticar problemas

const csvUrls = {
  totalVentasPorFecha:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Total%20Ventas%20por%20Fecha-oVmBwIxD1k7WcVY4MoozuRliBBFqwd.csv",
  clientesUnicos:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clientes%20unicos-lV3Mbzbq11eINRD6yRJHtFxCEJPVAe.csv",
  anioMes: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a%C3%B1o-mes-qzmBqnnIvG7hrFCfezUmPgkggVY8C4.csv",
  totalVentas:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/total%20ventas-psUL9OatOi326f96ZSwxTTdNxByFSy.csv",
  totalUnidades:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/total-unidades-Ug4EdjTXw2uOH6HFHr5sQeqTGLUgIv.csv",
}

async function testCsvLoading() {
  console.log("🔍 Iniciando prueba de carga de CSVs...")

  for (const [name, url] of Object.entries(csvUrls)) {
    try {
      console.log(`\n📁 Probando ${name}:`)
      console.log(`URL: ${url}`)

      const response = await fetch(url)
      console.log(`Status: ${response.status} ${response.statusText}`)
      console.log(`Content-Type: ${response.headers.get("content-type")}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const text = await response.text()
      console.log(`Tamaño del archivo: ${text.length} caracteres`)
      console.log(`Primeras 200 caracteres:`)
      console.log(text.substring(0, 200))

      // Parsear CSV básico
      const lines = text.trim().split("\n")
      console.log(`Número de líneas: ${lines.length}`)

      if (lines.length > 0) {
        console.log(`Header: ${lines[0]}`)
        if (lines.length > 1) {
          console.log(`Primera fila de datos: ${lines[1]}`)
        }
      }

      console.log(`✅ ${name} cargado exitosamente`)
    } catch (error) {
      console.error(`❌ Error cargando ${name}:`, error)
    }
  }
}

// Ejecutar la prueba
testCsvLoading()
