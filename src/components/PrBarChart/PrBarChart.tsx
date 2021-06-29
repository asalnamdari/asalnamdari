import React from 'react'
import useStyle from './usePrBarChartStyle'
import { Bar, ChartData as ReactChartData } from 'react-chartjs-2'
import { ChartData, ChartOptions, ChartDataSets } from 'chart.js'
import { Typography } from '@material-ui/core'
import clsx from 'clsx'

export interface IPrBarChartProps {
  datasets: PrChartDataSets[]
  labels?: string[]
  className?: string
  options?: ChartOptions
  width?: number
  height?: number
}
export interface PrChartDataSets extends ChartDataSets {
  type?: 'bar'
}

const defaultOptions: ChartOptions = {
  responsive: false,
  maintainAspectRatio: false,
  animation: {
    easing: 'easeInOutExpo',
  },
  legend: {
    rtl: true,
    labels: {
      fontFamily: 'IRanSans, DiodrumArabic',
      fontSize: 14,
    },
  },

  tooltips: {
    titleFontFamily: 'IRanSans, DiodrumArabic',
    bodyFontFamily: 'IRanSans, DiodrumArabic',
    footerFontFamily: 'IRanSans, DiodrumArabic',
    titleFontSize: 16,
    bodyFontSize: 14,
    // callbacks: {
    //   label: (tooltipItem: any, data: any) => {
    //     const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.datasetIndex] * 10
    //     return `${value}`
    //   },
    // },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontColor: 'rgba(0,0,0,0.5)',
          fontStyle: 'bold',
          fontFamily: 'IRanSans, DiodrumArabic',
          beginAtZero: true,
          maxTicksLimit: 10,
          padding: 20,
          min: 0,
          max: 100,
          callback: (value) => {
            return `${+value}%`
          },
        },
        gridLines: {
          // drawTicks: true,
          // display: true,
          // borderDash: [8, 4],
        },
      },
    ],
    xAxes: [
      {
        gridLines: {
          zeroLineColor: 'transparent',
          display: false,
        },
        ticks: {
          padding: 20,
          fontColor: 'rgba(0,0,0,0.5)',
          fontStyle: 'bold',
          fontFamily: 'IRanSans, DiodrumArabic',
          fontSize: 14,
        },
      },
    ],
  },
  plugins: {
    filler: {
      propagate: true,
    },
  },
}

const PrBarChart: React.FC<IPrBarChartProps> = ({
  datasets,
  labels,
  options = defaultOptions,
  className,
  width = 700,
  height = 400,
}) => {
  const classes = useStyle()
  const PrBarChartConfig: ReactChartData<ChartData> = {
    labels,
    datasets,
  }
  return (
    <div className={clsx(classes.root, className)}>
      {labels ? (
        <Bar data={PrBarChartConfig} {...{ options, width, height }} />
      ) : (
        <div className={classes.loading}>
          <Typography color="textSecondary">درحال بارگزاری</Typography>
        </div>
      )}
    </div>
  )
}

PrBarChart.displayName = 'PrBarChart'
export default PrBarChart
