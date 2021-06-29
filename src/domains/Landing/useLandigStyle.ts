import { makePrStyles } from 'theme'

const useLandingStyle = makePrStyles(
  () => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      'scroll-behavior': 'smooth',
      direction: 'rtl',
    },
  }),
  { name: 'Landing' },
)
export default useLandingStyle
