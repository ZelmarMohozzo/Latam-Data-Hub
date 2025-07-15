import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster" // Import Toaster

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WIDE SCOPE ANALYTICS",
  description: "Transformamos datos en decisiones inteligentes para impulsar el crecimiento de tu negocio.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster /> {/* Add Toaster component here */}
        </ThemeProvider>
      </body>
    </html>
  )
}
