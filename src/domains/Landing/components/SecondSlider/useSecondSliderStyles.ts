import { makePrStyles } from 'theme'
import Icon25 from 'assets/svg/25Icon.svg'

const useSecondSliderStyles = makePrStyles<{ state: number }>(
  ({
    palette: { common, accent, primary, secondary },
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
      width: '100%',
      [down(values.sm)]: {
        flexDirection: ({ state }) => (state === 3 ? 'row-reverse' : 'column'),
      },
    },
    textContainer: {
      position: 'absolute',
      top: ({ state }) =>
        state === 0
          ? 'calc(50vh - 65.8px)'
          : state >= 4
          ? 'calc(50vh - 134.8px)'
          : 'calc(73vh - 100.4px)',
      transition: '1s all',
      marginTop: spacing(4),
      [down(values.sm)]: {
        top: ({ state }) =>
          state === 0
            ? 'calc(55vh - 65.8px)'
            : state >= 4
            ? 'calc(55vh - 134.8px)'
            : 'calc(80vh - 100.4px)',
        backgroundColor: secondary[600],
        zIndex: 20,
      },
      [down(400)]: {
        top: ({ state }) =>
          state === 0
            ? 'calc(65vh - 65.8px)'
            : state >= 4
            ? 'calc(65vh - 134.8px)'
            : 'calc(84vh - 100.4px)',
      },
    },
    txt: {
      textAlign: 'center',
      color: common.white,
      fontSize: ({ state }) => (state === 1 ? '3em' : '5em'),
      fontWeight: 900,
      transition: '1s all',
      [down(values.sm)]: {
        fontSize: ({ state }) => (state === 0 ? '3em' : '2.5em'),
      },
      [down(400)]: {
        fontSize: ({ state }) => (state === 0 ? '2.5em' : '2em'),
      },
    },
    sunContainer: {
      [down(values.md)]: {
        width: '100%',
        display: 'flex',
        flexDirection: ({ state }) => (state === 1 ? 'column' : 'row-reverse'),
        alignItems: 'center',
        justifyContent: 'center',
      },
      [down(values.sm)]: {
        flexDirection: ({ state }) => (state === 3 ? 'row-reverse' : 'column'),
      },
    },
    sun: {
      position: 'relative',
      backgroundImage: `url(${Icon25})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPositionX: 'center',
      marginTop: -70,
      [down(values.sm)]: {
        marginTop: 0,
        opacity: 1,
        display: 'block',
      },
    },
    freeLife: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 10,
    },
    pardisSection: {
      width: 250,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      position: 'absolute',
      right: 30,
      bottom: 70,
      zIndex: 101,
      backgroundColor: common.white,
      borderRadius: spacing(2),
      padding: spacing(1, 4, 4, 4),
      border: `1px solid ${primary[200]}`,
      cursor: 'pointer',
      [down(values.sm)]: {
        bottom: '8vh',
        width: 'calc(100% - 60px)',
        left: 0,
        margin: spacing(0, 6),
      },
      [down(400)]: {
        bottom: '3vh',
        width: 'calc(100% - 40px)',
        margin: spacing(0, 4),
      },
    },
    pardisTextContainer: {
      overflow: 'hidden',
    },
    pardisIcons: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    pardisSectionText: {
      margin: spacing(2),
      color: accent.main,
      fontWeight: 900,
    },
    sliderBoxesContainer: {
      display: 'inline-flex',
      minWidth: 900,
      justifyContent: 'space-between',
      marginTop: spacing(10),
      [down(values.md)]: {
        minWidth: '100%',
      },
    },
  }),
  { name: 'FirstSlider' },
)

export default useSecondSliderStyles
