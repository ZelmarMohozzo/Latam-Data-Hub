"use client"

import { useEffect, useRef } from "react"

// Simulamos datos que tendrías en tu Power BI
const sampleData = {
  ventas: [120, 190, 300, 500, 200, 300],
  meses: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  categorias: ["Producto A", "Producto B", "Producto C"],
  valores: [300, 450, 200],
}

export function DashboardCharts() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Cargar Chart.js dinámicamente
    const loadChart = async () => {
      const Chart = (await import("chart.js/auto")).default

      if (chartRef.current) {
        new Chart(chartRef.current, {
          type: "line",
          data: {
            labels: sampleData.meses,
            datasets: [
              {
                label: "Ventas Mensuales",
                data: sampleData.ventas,
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Análisis de Ventas 2024",
              },
            },
          },
        })
      }
    }

    loadChart()
  }, [])

  return (
    <div className="w-full space-y-8">
      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-background/60 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">Ventas Totales</h3>
          <div className="text-3xl font-bold text-green-500">$1,610</div>
          <p className="text-sm text-muted-foreground">+12% vs mes anterior</p>
        </div>
        <div className="bg-background/60 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">Clientes Activos</h3>
          <div className="text-3xl font-bold text-blue-500">2,340</div>
          <p className="text-sm text-muted-foreground">+5% vs mes anterior</p>
        </div>
        <div className="bg-background/60 rounded-lg p-6 border">
          <h3 className="text-lg font-semibold mb-2">Conversión</h3>
          <div className="text-3xl font-bold text-purple-500">3.2%</div>
          <p className="text-sm text-muted-foreground">-0.1% vs mes anterior</p>
        </div>
      </div>

      {/* Gráfico principal */}
      <div className="bg-background/60 rounded-lg p-6 border">
        <h3 className="text-xl font-bold mb-4">Tendencia de Ventas</h3>
        <div className="relative h-96">
          <canvas ref={chartRef} className="w-full h-full"></canvas>
        </div>
      </div>

      {/* Tabla de datos */}
      <div className="bg-background/60 rounded-lg p-6 border">
        <h3 className="text-xl font-bold mb-4">Productos Top</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Producto</th>
                <th className="text-left p-2">Ventas</th>
                <th className="text-left p-2">Crecimiento</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.categorias.map((producto, index) => (
                <tr key={producto} className="border-b">
                  <td className="p-2">{producto}</td>
                  <td className="p-2">${sampleData.valores[index]}</td>
                  <td className="p-2 text-green-500">+{Math.floor(Math.random() * 20)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
