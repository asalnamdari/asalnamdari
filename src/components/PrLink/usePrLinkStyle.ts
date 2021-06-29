import { makePrStyles } from 'theme'

const usePrLinkStyle = makePrStyles(
  () => ({
    root: {
      textDecoration: 'none',
      '&:hover': { textDecoration: 'none' },
    },
  }),
  { name: 'PrLink' },
)
export default usePrLinkStyle
