import { makePrStyles } from 'theme'

const useDrawerExamPageStyle = makePrStyles(
  () => ({
    root: {},
    itemsContainer: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      height: 'calc(100% - 150px)',
      '& a:last-child': {
        height: '100%',
      },
    },
    text: {
      direction: 'ltr',
      textAlign: 'left',
      fontWeight: 900,
    },
  }),
  {
    name: 'DrawerExamPage',
  },
)
export default useDrawerExamPageStyle
