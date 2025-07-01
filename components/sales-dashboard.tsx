"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SalesData {
  Fecha: string
  "Total Ventas": string
}

interface ProcessedData {
  date: Date
  sales: number
  dateString: string
}

export function SalesDashboard() {
  const lineChartRef = useRef<HTMLCanvasElement>(null)
  const barChartRef = useRef<HTMLCanvasElement>(null)
  const lineChartInstance = useRef<any>(null)
  const barChartInstance = useRef<any>(null)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [salesData, setSalesData] = useState<ProcessedData[]>([])
  const [totalSales, setTotalSales] = useState<number>(0)
  const [averageDailySales, setAverageDailySales] = useState<number>(0)
  const [totalDays, setTotalDays] = useState<number>(0)

  const csvUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Total%20Ventas%20por%20Fecha-WGaQdV34xe7zPwWuElLhqzXlWgloMm.csv"

  // Función para cargar y procesar los datos
  const loadSalesData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      console.log("🔄 Cargando datos de ventas desde:", csvUrl)

      const response = await fetch(csvUrl)

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} ${response.statusText}`)
      }

      const csvText = await response.text()
      console.log("📄 CSV cargado, tamaño:", csvText.length, "caracteres")
      console.log("📄 Primeras 300 caracteres:", csvText.substring(0, 300))

      // Parsear CSV
      const lines = csvText.trim().split("\n")
      if (lines.length < 2) {
        throw new Error("El archivo CSV no contiene datos suficientes")
      }

      const header = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""))
      console.log("📋 Header encontrado:", header)

      const rawData: SalesData[] = []

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",").map((v) => v.trim().replace(/"/g, ""))
        if (values.length >= 2 && values[0] && values[1]) {
          rawData.push({
            Fecha: values[0],
            "Total Ventas": values[1],
          })
        }
      }

      console.log("📊 Datos parseados:", rawData.length, "registros")
      console.log("📊 Muestra de datos:", rawData.slice(0, 5))

      // Procesar y validar datos
      const processedData: ProcessedData[] = []
      let totalSalesSum = 0

      for (const item of rawData) {
        try {
          const date = new Date(item.Fecha)
          const sales = Number.parseFloat(item["Total Ventas"])

          if (!isNaN(date.getTime()) && !isNaN(sales)) {
            processedData.push({
              date,
              sales,
              dateString: item.Fecha,
            })
            totalSalesSum += sales
          }
        } catch (err) {
          console.warn("⚠️ Error procesando registro:", item, err)
        }
      }

      // Ordenar por fecha
      processedData.sort((a, b) => a.date.getTime() - b.date.getTime())

      console.log("✅ Datos procesados exitosamente:", processedData.length, "registros válidos")
      console.log("💰 Total de ventas:", totalSalesSum)

      // Actualizar estados
      setSalesData(processedData)
      setTotalSales(totalSalesSum)
      setTotalDays(processedData.length)
      setAverageDailySales(processedData.length > 0 ? totalSalesSum / processedData.length : 0)
    } catch (err) {
      console.error("❌ Error cargando datos:", err)
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setIsLoading(false)
    }
  }

  // Cargar datos al montar el componente
  useEffect(() => {
    loadSalesData()
  }, [])

  // Renderizar gráfico de líneas (evolución diaria)
  useEffect(() => {
    const renderLineChart = async () => {
      if (isLoading || error || salesData.length === 0 || !lineChartRef.current) {
        return
      }

      try {
        const Chart = (await import("chart.js/auto")).default

        // Destruir gráfico anterior si existe
        if (lineChartInstance.current) {
          lineChartInstance.current.destroy()
        }

        const labels = salesData.map((item) =>
          item.date.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "short",
            year: "2-digit",
          }),
        )

        const data = salesData.map((item) => item.sales)

        lineChartInstance.current = new Chart(lineChartRef.current, {
          type: "line",
          data: {
            labels,
            datasets: [
              {
                label: "Ventas Diarias",
                data,
                borderColor: "#3B82F6",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 6,
                pointBackgroundColor: "#3B82F6",
                pointBorderColor: "#ffffff",
                pointBorderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleColor: "#ffffff",
                bodyColor: "#ffffff",
                borderColor: "#3B82F6",
                borderWidth: 1,
                callbacks: {
                  label: (context) => {
                    return `Ventas: $${context.parsed.y.toLocaleString("es-ES", { minimumFractionDigits: 2 })}`
                  },
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
                ticks: {
                  color: "#9CA3AF",
                  maxTicksLimit: 10,
                },
              },
              y: {
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
                ticks: {
                  color: "#9CA3AF",
                  callback: (value) => "$" + Number(value).toLocaleString("es-ES"),
                },
              },
            },
          },
        })

        console.log("✅ Gráfico de líneas renderizado")
      } catch (err) {
        console.error("❌ Error renderizando gráfico de líneas:", err)
      }
    }

    renderLineChart()

    return () => {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy()
      }
    }
  }, [salesData, isLoading, error])

  // Renderizar gráfico de barras (ventas por mes)
  useEffect(() => {
    const renderBarChart = async () => {
      if (isLoading || error || salesData.length === 0 || !barChartRef.current) {
        return
      }

      try {
        const Chart = (await import("chart.js/auto")).default

        // Destruir gráfico anterior si existe
        if (barChartInstance.current) {
          barChartInstance.current.destroy()
        }

        // Agrupar ventas por mes
        const monthlyData: { [key: string]: number } = {}

        salesData.forEach((item) => {
          const monthKey = item.date.toISOString().substring(0, 7) // YYYY-MM
          monthlyData[monthKey] = (monthlyData[monthKey] || 0) + item.sales
        })

        const sortedMonths = Object.keys(monthlyData).sort()
        const labels = sortedMonths.map((month) => {
          const [year, monthNum] = month.split("-")
          const date = new Date(Number.parseInt(year), Number.parseInt(monthNum) - 1)
          return date.toLocaleDateString("es-ES", { month: "short", year: "numeric" })
        })
        const data = sortedMonths.map((month) => monthlyData[month])

        barChartInstance.current = new Chart(barChartRef.current, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Ventas Mensuales",
                data,
                backgroundColor: "rgba(34, 197, 94, 0.8)",
                borderColor: "#22C55E",
                borderWidth: 1,
                borderRadius: 4,
                borderSkipped: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleColor: "#ffffff",
                bodyColor: "#ffffff",
                borderColor: "#22C55E",
                borderWidth: 1,
                callbacks: {
                  label: (context) => {
                    return `Total: $${context.parsed.y.toLocaleString("es-ES", { minimumFractionDigits: 2 })}`
                  },
                },
              },
            },
            scales: {
              x: {
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
                ticks: {
                  color: "#9CA3AF",
                },
              },
              y: {
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
                ticks: {
                  color: "#9CA3AF",
                  callback: (value) => "$" + Number(value).toLocaleString("es-ES"),
                },
              },
            },
          },
        })

        console.log("✅ Gráfico de barras renderizado")
      } catch (err) {
        console.error("❌ Error renderizando gráfico de barras:", err)
      }
    }

    renderBarChart()

    return () => {
      if (barChartInstance.current) {
        barChartInstance.current.destroy()
      }
    }
  }, [salesData, isLoading, error])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount)
  }

  if (error) {
    return (
      <div className="w-full p-8 rounded-xl bg-red-900/20 border border-red-500/30">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Error al cargar datos</h2>
          <p className="text-red-300 mb-6">{error}</p>
          <button
            onClick={loadSalesData}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-white"
          >
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full space-y-8">
      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center p-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Cargando datos de ventas...</p>
          </div>
        </div>
      )}

      {/* Metrics Cards */}
      {!isLoading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-300">Total de Ventas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-400">{formatCurrency(totalSales)}</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-300">Promedio Diario</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400">{formatCurrency(averageDailySales)}</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-300">Días con Ventas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-400">{totalDays.toLocaleString()}</div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Line Chart - Daily Sales */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Evolución de Ventas Diarias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-80">
                  <canvas ref={lineChartRef}></canvas>
                </div>
              </CardContent>
            </Card>

            {/* Bar Chart - Monthly Sales */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Ventas por Mes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-80">
                  <canvas ref={barChartRef}></canvas>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Summary */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Resumen de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">
                    {salesData.length > 0 ? salesData[0].date.toLocaleDateString("es-ES") : "N/A"}
                  </div>
                  <div className="text-sm text-gray-400">Primera Venta</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">
                    {salesData.length > 0 ? salesData[salesData.length - 1].date.toLocaleDateString("es-ES") : "N/A"}
                  </div>
                  <div className="text-sm text-gray-400">Última Venta</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">
                    {formatCurrency(Math.max(...salesData.map((d) => d.sales)))}
                  </div>
                  <div className="text-sm text-gray-400">Venta Máxima</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400">
                    {formatCurrency(Math.min(...salesData.map((d) => d.sales)))}
                  </div>
                  <div className="text-sm text-gray-400">Venta Mínima</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
