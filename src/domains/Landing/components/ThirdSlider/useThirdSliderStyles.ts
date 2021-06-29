import { makePrStyles } from 'theme'

const useThirdSliderStyles = makePrStyles<{ state: number }>(
  ({
    palette: { common, accent, primary },
    spacing,
    breakpoints: { down, values },
  }) => ({
    root: {
      direction: 'ltr',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [down(values.sm)]: {
        paddingTop: '22vh',
      },
    },
    textContainer: {},
    txt: {
      textAlign: 'center',
      color: common.white,
      fontSize: '4em',
      fontWeight: 900,
      transition: '1s all',
      [down(values.sm)]: {
        fontSize: ({ state }) => (state === 0 ? '2.5em' : '2em'),
      },
    },
    textContainer2: {
      position: 'absolute',
      left: '-65%',
    },
    questsContainer: {
      display: 'flex',
      minWidth: 1146,
      alignItems: 'center',
      justifyContent: 'space-between',
      [down(1280)]: {
        minWidth: 900,
      },
      [down(values.sm)]: {
        minWidth: '100%',
        flexDirection: ({ state }) => state === 1 && 'column',
        justifyContent: 'space-evenly',
      },
      [down(400)]: {
        flexDirection: () => 'row',
        flexWrap: 'wrap',
        marginTop: spacing(3),
      },
    },
    quests: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      width: 291,
      margin: spacing(12, 0),
      [down(values.sm)]: {
        width: ({ state }) => (state === 0 ? 55 : 291),
        margin: spacing(0),
        '& svg': {
          width: 55,
          display: ({ state }) => state === 1 && 'none',
        },
      },
      [down(400)]: {
        width: () => 120,
      },
    },
    linksBox: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      textAlign: 'center',
      borderLeft: 'white 5px solid',
      background:
        'transparent linear-gradient(210deg, #FF3629 0%, #801B15 100%) 0% 0% no-repeat padding-box',
      overflow: 'hidden',
      marginBottom: spacing(12),
      cursor: 'pointer',
      width: 291,
      height: 291,
      [down(values.sm)]: {
        margin: '1vh 0',
        padding: spacing(2),
      },
    },
    linksText: {
      textAlign: 'center',
      color: common.white,
      fontSize: '1.8em',
      fontWeight: 900,
      transition: '1s all',
      outline: 'none',
      [down(values.sm)]: {
        fontSize: '1em',
      },
    },
    freeLife: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 10,
    },
    exampleSection: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: 50,
      bottom: 50,
      backgroundColor: common.white,
      borderRadius: spacing(2),
      padding: spacing(5),
      border: `1px solid ${primary[200]}`,
    },
    exampleSectionPlay: {
      width: 80,
      height: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: common.white,
      borderRadius: spacing(2),
      boxShadow:
        '0 0px 10px rgba(88,108,138,0.5), 0 0px 10px rgba(88,108,138,0.3)',
    },
    exampleSectionText: {
      width: 170,
      margin: spacing(0, 5),
      color: accent.main,
      fontWeight: 900,
    },
    exampleSectionCost: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      height: 80,
      '& > div': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > svg': {
          width: 26,
          margin: spacing(0, 2),
        },
      },
    },
  }),
  { name: 'FirstSlider' },
)

export default useThirdSliderStyles
