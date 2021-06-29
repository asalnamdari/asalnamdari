import { makePrStyles } from 'theme'

const useBackButtonStyle = makePrStyles(
  ({ spacing }) => ({
    root: {
      position: 'absolute',
      top: spacing(8),
      right: spacing(3),
      border: 'none',
      background: 'none',
      width: 38.78,
    },
  }),
  {
    name: 'BackButton',
  },
)
export default useBackButtonStyle
