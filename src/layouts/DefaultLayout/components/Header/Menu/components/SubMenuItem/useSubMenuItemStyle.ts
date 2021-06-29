import { makePrStyles } from 'theme'

const useSubMenuItemStyle = makePrStyles<{ color?: string }>(
  ({ spacing }) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: ({ color }) => color ?? 'transparent',
      padding: spacing(0, 9),
      minHeight: 30,
      '& svg': {
        margin: spacing(0, 4),
      },
    },
  }),
  {
    name: 'SubMenuItem',
  },
)

export default useSubMenuItemStyle
