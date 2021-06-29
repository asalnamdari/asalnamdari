import { makePrStyles } from 'theme'

const useDrawerMagazinePageStyle = makePrStyles(
  ({ spacing }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 'calc(100% - 120px)',
      '& a:last-child': {
        flex: 1,
      },
    },
    links: {
      padding: spacing(2.5),
      textAlign: 'right',
    },
    contents: {
      '& svg': {
        margin: spacing(0, 4),
      },
    },
    image: {
      position: 'absolute',
      right: 20,
      top: '15%',
      zIndex: 999999,
    },
  }),
  {
    name: 'DrawerMagazinePage',
  },
)

export default useDrawerMagazinePageStyle
