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

interface TotalVentasData {
  "Total Ventas": string
}

interface TotalUnidadesData {
  "Total Unidades": string
}

interface ClientesUnicosData {
  "Clientes Únicos": string
}

interface AnoMesData {
  "Año-Mes": string
}

export function SalesDashboard() {
  const lineChartRef = useRef<HTMLCanvasElement>(null)
  const barChartRef = useRef<HTMLCanvasElement>(null)
  const monthlyChartRef = useRef<HTMLCanvasElement>(null)
  const lineChartInstance = useRef<any>(null)
  const barChartInstance = useRef<any>(null)
  const monthlyChartInstance = useRef<any>(null)

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [salesData, setSalesData] = useState<ProcessedData[]>([])
  const [totalSales, setTotalSales] = useState<number>(0)
  const [averageDailySales, setAverageDailySales] = useState<number>(0)
  const [totalDays, setTotalDays] = useState<number>(0)
  
  // Nuevas métricas
  const [totalVentasGlobal, setTotalVentasGlobal] = useState<number>(0)
  const [totalUnidades, setTotalUnidades] = useState<number>(0)
  const [clientesUnicos, setClientesUnicos] = useState<number>(0)
  const [mesesData, setMesesData] = useState<string[]>([])

  const csvUrls = {
    salesByDate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Total%20Ventas%20por%20Fecha-WGaQdV34xe7zPwWuElLhqzXlWgloMm.csv",
    totalVentas: "/data/total ventas.csv",
    totalUnidades: "/data/total-unidades.csv",
    clientesUnicos: "/data/clientes unicos.csv",
    anoMes: "/data/año-mes.csv"
  }

  // Función para cargar y procesar todos los datos
  const loadAllData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      console.log("🔄 Cargando todos los datos...")

      // Cargar datos de ventas por fecha (existente)
      const salesResponse = await fetch(csvUrls.salesByDate)
      if (!salesResponse.ok) {
        throw new Error(`Error cargando ventas por fecha: ${salesResponse.status}`)
      }
      const salesCsvText = await salesResponse.text()
      
      // Cargar total de ventas global
      const totalVentasResponse = await fetch(csvUrls.totalVentas)
      if (!totalVentasResponse.ok) {
        throw new Error(`Error cargando total ventas: ${totalVentasResponse.status}`)
      }
      const totalVentasText = await totalVentasResponse.text()
      
      // Cargar total de unidades
      const totalUnidadesResponse = await fetch(csvUrls.totalUnidades)
      if (!totalUnidadesResponse.ok) {
        throw new Error(`Error cargando total unidades: ${totalUnidadesResponse.status}`)
      }
      const totalUnidadesText = await totalUnidadesResponse.text()
      
      // Cargar clientes únicos
      const clientesResponse = await fetch(csvUrls.clientesUnicos)
      if (!clientesResponse.ok) {
        throw new Error(`Error cargando clientes únicos: ${clientesResponse.status}`)
      }
      const clientesText = await clientesResponse.text()
      
      // Cargar datos de año-mes
      const anoMesResponse = await fetch(csvUrls.anoMes)
      if (!anoMesResponse.ok) {
        throw new Error(`Error cargando año-mes: ${anoMesResponse.status}`)
      }
      const anoMesText = await anoMesResponse.text()

      // Procesar ventas por fecha (código existente)
      const salesLines = salesCsvText.trim().split("\n")
      const salesRawData: SalesData[] = []
      
      for (let i = 1; i < salesLines.length; i++) {
        const values = salesLines[i].split(",").map((v) => v.trim().replace(/"/g, ""))
        if (values.length >= 2 && values[0] && values[1]) {
          salesRawData.push({
            Fecha: values[0],
            "Total Ventas": values[1],
          })
        }
      }

      const processedSalesData: ProcessedData[] = []
      let totalSalesSum = 0

      for (const item of salesRawData) {
        try {
          const date = new Date(item.Fecha)
          const sales = Number.parseFloat(item["Total Ventas"])

          if (!isNaN(date.getTime()) && !isNaN(sales)) {
            processedSalesData.push({
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

      processedSalesData.sort((a, b) => a.date.getTime() - b.date.getTime())

      // Procesar total ventas global
      const totalVentasLines = totalVentasText.trim().split("\n")
      const totalVentasValue = totalVentasLines.length > 1 ? 
        Number.parseFloat(totalVentasLines[1].trim()) : 0

      // Procesar total unidades
      const totalUnidadesLines = totalUnidadesText.trim().split("\n")
      const totalUnidadesValue = totalUnidadesLines.length > 1 ? 
        Number.parseInt(totalUnidadesLines[1].trim()) : 0

      // Procesar clientes únicos
      const clientesLines = clientesText.trim().split("\n")
      const clientesValue = clientesLines.length > 1 ? 
        Number.parseInt(clientesLines[1].trim()) : 0

      // Procesar año-mes
      const anoMesLines = anoMesText.trim().split("\n")
      const mesesArray = anoMesLines.slice(1).map(line => line.trim()).filter(line => line)

      console.log("✅ Todos los datos procesados exitosamente")
      console.log("📊 Métricas:", {
        totalVentasGlobal: totalVentasValue,
        totalUnidades: totalUnidadesValue,
        clientesUnicos: clientesValue,
        meses: mesesArray.length
      })

      // Actualizar estados
      setSalesData(processedSalesData)
      setTotalSales(totalSalesSum)
      setTotalDays(processedSalesData.length)
      setAverageDailySales(processedSalesData.length > 0 ? totalSalesSum / processedSalesData.length : 0)
      setTotalVentasGlobal(totalVentasValue)
      setTotalUnidades(totalUnidadesValue)
      setClientesUnicos(clientesValue)
      setMesesData(mesesArray)

    } catch (err) {
      console.error("❌ Error cargando datos:", err)
      setError(err instanceof Error ? err.message : "Error desconocido")
    } finally {
      setIsLoading(false)
    }
  }

  // Cargar datos al montar el componente
  useEffect(() => {
    loadAllData()
  }, [])

  // Renderizar gráfico de líneas (evolución diaria)
  useEffect(() => {
    const renderLineChart = async () => {
      if (isLoading || error || salesData.length === 0 || !lineChartRef.current) {
        return
      }

      try {
        const Chart = (await import("chart.js/auto")).default

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

  // Renderizar gráfico de meses activos
  useEffect(() => {
    const renderMonthlyChart = async () => {
      if (isLoading || error || mesesData.length === 0 || !monthlyChartRef.current) {
        return
      }

      try {
        const Chart = (await import("chart.js/auto")).default

        if (monthlyChartInstance.current) {
          monthlyChartInstance.current.destroy()
        }

        const labels = mesesData.map((mes) => {
          const [year, month] = mes.split("-")
          const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1)
          return date.toLocaleDateString("es-ES", { month: "short", year: "numeric" })
        })

        // Datos simulados para mostrar actividad por mes
        const data = mesesData.map(() => Math.floor(Math.random() * 100) + 50)

        monthlyChartInstance.current = new Chart(monthlyChartRef.current, {
          type: "doughnut",
          data: {
            labels,
            datasets: [
              {
                label: "Actividad por Mes",
                data,
                backgroundColor: [
                  "rgba(59, 130, 246, 0.8)",
                  "rgba(34, 197, 94, 0.8)",
                  "rgba(168, 85, 247, 0.8)",
                  "rgba(251, 191, 36, 0.8)",
                  "rgba(239, 68, 68, 0.8)",
                  "rgba(6, 182, 212, 0.8)",
                ],
                borderColor: [
                  "#3B82F6",
                  "#22C55E",
                  "#A855F7",
                  "#FBB024",
                  "#EF4444",
                  "#06B6D4",
                ],
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  color: "#9CA3AF",
                  padding: 20,
                },
              },
              tooltip: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                titleColor: "#ffffff",
                bodyColor: "#ffffff",
                callbacks: {
                  label: (context) => {
                    return `${context.label}: ${context.parsed}%`
                  },
                },
              },
            },
          },
        })

        console.log("✅ Gráfico de meses renderizado")
      } catch (err) {
        console.error("❌ Error renderizando gráfico de meses:", err)
      }
    }

    renderMonthlyChart()

    return () => {
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy()
      }
    }
  }, [mesesData, isLoading, error])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("es-ES").format(num)
  }

  if (error) {
    return (
      <div className="w-full p-8 rounded-xl bg-red-900/20 border border-red-500/30">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Error al cargar datos</h2>
          <p className="text-red-300 mb-6">{error}</p>
          <button
            onClick={loadAllData}
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
            <p className="text-gray-400">Cargando datos del dashboard...</p>
          </div>
        </div>
      )}

      {/* Metrics Cards */}
      {!isLoading && !error && (
        <>
          {/* Primera fila de métricas principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-300">Total de Ventas Global</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-400">{formatCurrency(totalVentasGlobal)}</div>
                <p className="text-xs text-blue-300 mt-1">Acumulado total</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-green-300">Total Unidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400">{formatNumber(totalUnidades)}</div>
                <p className="text-xs text-green-300 mt-1">Productos vendidos</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-300">Clientes Únicos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-400">{formatNumber(clientesUnicos)}</div>
                <p className="text-xs text-purple-300 mt-1">Base de clientes</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-orange-300">Meses Activos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-400">{mesesData.length}</div>
                <p className="text-xs text-orange-300 mt-1">Período de actividad</p>
              </CardContent>
            </Card>
          </div>

          {/* Segunda fila de métricas calculadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-cyan-300">Promedio Diario</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-400">{formatCurrency(averageDailySales)}</div>
                <p className="text-xs text-cyan-300 mt-1">Ventas por día</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border-pink-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-pink-300">Promedio por Cliente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-pink-400">
                  {formatCurrency(clientesUnicos > 0 ? totalVentasGlobal / clientesUnicos : 0)}
                </div>
                <p className="text-xs text-pink-300 mt-1">Valor por cliente</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 border-indigo-500/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-indigo-300">Unidades por Venta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-indigo-400">
                  {formatNumber(totalDays > 0 ? Math.round(totalUnidades / totalDays) : 0)}
                </div>
                <p className="text-xs text-indigo-300 mt-1">Promedio diario</p>
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

          {/* Additional Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Doughnut Chart - Monthly Activity */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Distribución de Actividad por Mes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-80">
                  <canvas ref={monthlyChartRef}></canvas>
                </div>
              </CardContent>
            </Card>

            {/* Data Summary */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Resumen de Rendimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400">
                        {salesData.length > 0 ? salesData[0].date.toLocaleDateString("es-ES") : "N/A"}
                      </div>
                      <div className="text-sm text-gray-400">Primera Venta</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400">
                        {salesData.length > 0 ? salesData[salesData.length - 1].date.toLocaleDateString("es-ES") : "N/A"}
                      </div>
                      <div className="text-sm text-gray-400">Última Venta</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="text-2xl font-bold text-green-400">
                        {salesData.length > 0 ? formatCurrency(Math.max(...salesData.map((d) => d.sales))) : "$0"}
                      </div>
                      <div className="text-sm text-gray-400">Venta Máxima</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div className="text-2xl font-bold text-red-400">
                        {salesData.length > 0 ? formatCurrency(Math.min(...salesData.map((d) => d.sales))) : "$0"}
                      </div>
                      <div className="text-sm text-gray-400">Venta Mínima</div>
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                    <div className="text-lg font-bold text-purple-400">
                      Eficiencia: {totalUnidades > 0 ? (totalVentasGlobal / totalUnidades).toFixed(2) : "0"} $/unidad
                    </div>
                    <div className="text-sm text-gray-400">Valor promedio por unidad</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}