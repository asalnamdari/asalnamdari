import { makePrStyles } from 'theme'

const usePrBarChartStyle = makePrStyles(
  ({ spacing }) => ({
    root: {
      width: '100%',
      height: '100%',
      margin: spacing(0, 'auto'),
      color: '#fff',
      padding: spacing(3),
      '& canvas': {
        margin: '0 auto',
        height: '100%!important',
        width: '100%!important',
      },
    },
    loading: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
  { name: 'PrChart' },
)

export default usePrBarChartStyle
