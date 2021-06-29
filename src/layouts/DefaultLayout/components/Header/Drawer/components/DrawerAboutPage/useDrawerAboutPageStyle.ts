import { makePrStyles } from 'theme'

const useDrawerAboutPageStyle = makePrStyles(
  ({ spacing, palette: { common } }) => ({
    root: {},
    aboutLink: {
      position: 'relative',
      top: spacing(2),
      alignItems: 'flex-start',
    },
    itemsContainer: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 'calc(100% - 120px)',
      marginTop: spacing(5),
      '& a:last-child': {
        flex: 1,
      },
    },
    about: {
      height: 'auto',
      position: 'relative',
      '& p': {
        marginBottom: 65,
      },
    },
    aboutText: {
      color: common.white,
      fontSize: '1rem',
      direction: 'ltr',
      textAlign: 'left',
    },
    addressContainer: {
      position: 'relative',
      top: -65,
      flex: 'unset!important',
      height: 'auto',
      
    },
    copyRight: {
      marginTop: spacing(3),
      textAlign: 'start',
      fontSize: '1rem',
    },
  }),
  {
    name: 'DrawerAboutPage',
  },
)

export default useDrawerAboutPageStyle
