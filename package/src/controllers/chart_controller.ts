import { Controller } from "@hotwired/stimulus"
import { Chart, type ChartConfiguration } from "chart.js/auto"

interface DatasetConfig {
  label: string
  data: number[]
  colorVar: string
}

interface ChartConfigValue {
  labels: string[]
  datasets: DatasetConfig[]
  yAxisMode?: "percent" | "currency"
}

export default class extends Controller {
  declare readonly canvasTarget: HTMLCanvasElement
  declare readonly legendTarget: HTMLElement
  declare readonly hasLegendTarget: boolean
  declare readonly configValue: ChartConfigValue

  static values = {
    config: Object
  }

  static targets = ["canvas", "legend"]

  private chart: Chart | null = null

  connect(): void {
    this.renderChart()
  }

  disconnect(): void {
    this.chart?.destroy()
    this.chart = null
  }

  private renderChart(): void {
    const config = this.configValue
    if (!config?.labels?.length) return

    const host = this.element as HTMLElement
    const datasets = config.datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: this.resolveColor(host, dataset.colorVar),
      stack: "usage"
    }))

    const yAxisMode = config.yAxisMode || "currency"

    const chartConfig: ChartConfiguration<"bar"> = {
      type: "bar",
      data: {
        labels: config.labels,
        datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500,
          easing: "easeOutQuart"
        },
        animations: {
          x: { duration: 0 },
          width: { duration: 0 },
          base: { duration: 0 },
          height: { duration: 0 },
          y: {
            type: "number",
            easing: "easeOutQuart",
            duration: 500,
            from: (ctx) => {
              if (ctx.type !== "data") return undefined
              const meta = ctx.chart.getDatasetMeta(ctx.datasetIndex)
              const bar = meta.data[ctx.dataIndex] as { base?: number }
              return bar.base
            }
          }
        },
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 10
            }
          },
          y: {
            stacked: true,
            title: {
              display: yAxisMode === "percent",
              text: "% of allowance"
            },
            ticks: {
              callback: (value) =>
                yAxisMode === "percent" ? `${value}%` : `$${value}`
            }
          }
        }
      }
    }

    this.chart = new Chart(this.canvasTarget, chartConfig)
    this.renderLegend(datasets)
  }

  private renderLegend(
    datasets: Array<{ label: string; backgroundColor: string }>
  ): void {
    if (!this.hasLegendTarget) return

    this.legendTarget.innerHTML = datasets
      .map(
        (dataset) =>
          `<li class="kubik-interface-chart__legend-item">
            <span class="kubik-interface-chart__legend-swatch" style="background-color: ${dataset.backgroundColor}"></span>
            <span class="kubik-interface-chart__legend-label">${dataset.label}</span>
          </li>`
      )
      .join("")
  }

  private resolveColor(host: HTMLElement, varName: string): string {
    const root = host.closest(".kubik-interface-chart") || host
    const value = getComputedStyle(root).getPropertyValue(varName).trim()
    if (value) return value

    const fallback = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim()
    return fallback || "#469CFF"
  }
}
