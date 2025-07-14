"use client"
import { ArrowLeft, X, BarChart3, CheckCircle, TrendingUp, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiciosDetalle() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => window.history.back()} className="hover:bg-muted">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Volver</span>
            </Button>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">WIDE SCOPE ANALYTICS</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => window.close()} className="hover:bg-muted">
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </div>
      </header>

      <main className="container py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-green-500/20">
            <svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Pack Distribuidoras Eficientes</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Estrategia, logística y rentabilidad en un solo sistema inteligente
          </p>
        </div>

        {/* Description */}
        <div className="mb-12 rounded-xl border bg-muted/30 p-8">
          <h2 className="mb-4 text-2xl font-bold">Diseñado para distribuidoras que quieren operar con precisión</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Nuestro Pack Distribuidoras Eficientes está específicamente diseñado para empresas que manejan logística
            compleja y necesitan optimizar cada aspecto de su operación. Desde la planificación de rutas hasta el
            análisis predictivo de demanda, te ayudamos a convertir datos en decisiones rentables.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Rutas Logísticas Optimizadas</h3>
            <p className="text-muted-foreground">
              Algoritmos inteligentes que analizan el comportamiento histórico de tus clientes para crear rutas más
              eficientes, reduciendo costos de combustible y tiempo de entrega.
            </p>
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold">Inventarios Inteligentes</h3>
            <p className="text-muted-foreground">
              Control de stock actualizado en tiempo real por cliente, región o canal de venta. Nunca más te quedes sin
              productos clave o tengas exceso de inventario.
            </p>
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 text-purple-500">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Análisis de Rotación</h3>
            <p className="text-muted-foreground">
              Identifica productos de alta y baja rotación, puntos críticos de pérdida y oportunidades de reposición
              automática para maximizar la rentabilidad.
            </p>
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-500">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Segmentación Inteligente</h3>
            <p className="text-muted-foreground">
              Crea campañas personalizadas y condiciones comerciales específicas basadas en el comportamiento y
              potencial de cada cliente o región.
            </p>
          </div>
        </div>

        {/* Predictive Analysis Section */}
        <div className="mb-12 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-green-500/10 p-8">
          <div className="mb-6 flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h2 className="mb-4 text-2xl font-bold">Análisis Predictivo: Tu Ventaja Competitiva</h2>
              <p className="mb-6 text-lg leading-relaxed">
                Gracias a nuestros algoritmos de análisis predictivo, no solo ves lo que pasó, sino que anticipas lo que
                va a pasar. Esto te permite:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                  <span>Anticipar picos de demanda estacionales</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                  <span>Detectar fugas en la operación antes que impacten</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                  <span>Identificar oportunidades de crecimiento</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-500" />
                  <span>Optimizar precios según comportamiento del mercado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Resultados que Puedes Esperar</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-green-500">25%</div>
              <div className="text-lg font-semibold">Reducción en costos logísticos</div>
              <div className="text-sm text-muted-foreground">Optimización de rutas y entregas</div>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-blue-500">40%</div>
              <div className="text-lg font-semibold">Mejora en rotación de inventario</div>
              <div className="text-sm text-muted-foreground">Menos stock muerto, más liquidez</div>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-purple-500">60%</div>
              <div className="text-lg font-semibold">Tiempo ahorrado en reportes</div>
              <div className="text-sm text-muted-foreground">Automatización de análisis</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-xl border bg-muted/30 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">¿Listo para Transformar tu Distribuidora?</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Agenda una demo personalizada y descubre cómo el Pack Distribuidoras Eficientes puede revolucionar tu
            operación.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              onClick={() => {
                window.opener?.location.hash = "#contacto"
                window.close()
              }}
              className="btn-gradient-custom"
            >
              <Target className="mr-2 h-4 w-4" />
              Solicitar Demo Gratuita
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              Volver a la página principal
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">WIDE SCOPE ANALYTICS</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © 2025 WIDE SCOPE ANALYTICS. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
