import { makePrStyles } from 'theme'

const useHeaderStyle = makePrStyles<{ path: string }>(
  ({
    palette: { primary, common, secondary },
    breakpoints: { down, values },
    spacing,
  }) => ({
    root: {
      width: '100%',
      color: primary[50],
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      paddingBottom: spacing(3),
      backgroundColor: ({ path }) =>
        path === '/grader'
          ? '#486986'
          : path === '/student'
          ? '#586C7E'
          : path === '/education'
          ? '#545F67'
          : secondary.main,
    },
    headerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      [down(values.sm)]: {
        position: 'absolute',
        top: -5,
        left: -15,
        '& > svg': {},
      },
    },
    shapeContainer: {
      flex: 1,
      '& svg': {
        position: 'absolute',
        left: -5,
        top: -20,
        width: '50%',
        maxWidth: 600,
        maxHeight: 275,
      },
      [down(values.sm)]: {
        '& #hashoor': {
          // transform: 'translate(-1339.485 -86.071)',
          transform: 'translate(1339px, -86px)',
        },
        '& #surface': {
          transform: 'matrix(1, 0, 0, 1, -470, -103)',
        },
      },
    },
    mobileHomeLink: {
      width: '38vw',
      height: '15vh',
      position: 'absolute',
      right: '400px',
      top: '50px',
    },
    headerButtons: {
      color: common.white,
      display: 'flex',
      flex: 1,
      height: 35,
      alignItems: 'center',
      flexDirection: 'row-reverse',
      marginTop: '2.082248828735034vw',
    },
    drawerButton: {
      [down(values.sm)]: {
        position: 'fixed',
        top: 8,
        right: 8,
      },
    },
  }),
  { name: 'Header' },
)

export default useHeaderStyle
