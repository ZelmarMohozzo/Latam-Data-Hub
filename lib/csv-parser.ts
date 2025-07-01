export async function parseCsv<T>(url: string): Promise<T[]> {
  const response = await fetch(url)
  const text = await response.text()

  const lines = text.trim().split("\n")
  if (lines.length === 0) {
    return []
  }

  const header = lines[0].split(",").map((h) => h.trim())
  const data = lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim())
    const row: { [key: string]: any } = {}
    header.forEach((h, i) => {
      row[h] = values[i]
    })
    return row as T
  })

  return data
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2).replace(".", ",") + " M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2).replace(".", ",") + " mil"
  }
  return num.toFixed(2).replace(".", ",")
}
