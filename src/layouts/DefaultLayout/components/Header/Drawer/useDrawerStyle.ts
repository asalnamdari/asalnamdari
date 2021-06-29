import { makePrStyles } from 'theme'

const useDrawerStyle = makePrStyles(
  ({ spacing, breakpoints: { down, values } }) => ({
    root: {
      '& .MuiBackdrop-root': {
        backgroundColor: 'unset',
        [down(values.sm)]: {
          backdropFilter: 'blur(40px)',
        },
      },
    },
    paper: {
      width: 323,
      top: 25,
      borderTopLeftRadius: 60,
      borderBottomLeftRadius: 60,
      height: 'calc(100% - 50px)',
      [down(400)]: {
        width: 273,
      },
    },
    drawerIcon: {
      position: 'absolute',
      top: 18,
      left: 32,
      height: 62,
    },
    container: {
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      position: 'relative',
      paddingTop: spacing(17),
      textAlign: 'end',
    },
    navsContainer: {
      direction: 'initial',
      height: '100%',
    },
  }),
  { name: 'DrawerContent' },
)

export default useDrawerStyle
