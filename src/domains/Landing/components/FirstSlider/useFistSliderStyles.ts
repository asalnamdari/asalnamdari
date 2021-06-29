import FreeLifeIcon from 'assets/svg/FreeLifeIcon.svg'
import { makePrStyles } from 'theme'

const useFirstSliderStyles = makePrStyles<{ state: number }>(
  ({ palette: { common }, spacing, breakpoints: { values, down } }) => ({
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
    },
    textContainer: {
      position: 'relative',
      zIndex: 99,
    },
    txt: {
      textAlign: 'center',
      color: common.white,
      fontSize: ({ state }) => (state === 1 ? '4em' : '5em'),
      fontWeight: 900,
      transition: '1s all',
      [down(values.sm)]: {
        fontSize: ({ state }) => (state === 1 ? '2.5em' : '3em'),
      },
    },
    sun: {
      width: 641.66,
      overflow: 'hidden',
      marginBottom: spacing(-80),
      [down(values.sm)]: {
        marginBottom: spacing(-65),
        marginTop: spacing(9),
      },
      [down(400)]: {
        '& svg': {
          '& #Group_29': {
            transform: 'translate(22px, -99.5px)',
          },
        },
      },
    },
    freeLife: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      zIndex: 10,
      backgroundImage: `url(${FreeLifeIcon})`,
      backgroundSize: 'cover',
      height: '70%',
      backgroundRepeat: 'no-repeat',
      [down(values.sm)]: {
        height: '60%',
      },
    },
    // exampleSection: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   position: 'absolute',
    //   right: 50,
    //   bottom: 50,
    //   backgroundColor: common.white,
    //   borderRadius: spacing(2),
    //   padding: spacing(5),
    //   border: `1px solid ${primary[200]}`,
    //   zIndex: 20,
    //   [down(values.sm)]: {
    //     right: 20,
    //     bottom: 20,
    //     width: 'calc(100% - 40px)',
    //     padding: spacing(2),
    //     flexWrap: 'wrap',
    //     justifyContent: 'space-around',
    //   },
    // },
    // exampleSectionPlay: {
    //   width: 80,
    //   height: 80,
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   background: common.white,
    //   borderRadius: spacing(2),
    //   boxShadow:
    //     '0 0px 10px rgba(88,108,138,0.5), 0 0px 10px rgba(88,108,138,0.3)',
    //   [down(values.sm)]: {
    //     width: 60,
    //     height: 60,
    //     order: 1,
    //   },
    // },
    // exampleSectionText: {
    //   width: 170,
    //   margin: spacing(0, 5),
    //   color: accent.main,
    //   fontWeight: 900,
    //   [down(values.sm)]: {
    //     width: '100%',
    //     marginBottom: spacing(4),
    //     order: 0,
    //   },
    // },
    // exampleSectionCost: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-between',
    //   alignItems: 'flex-start',
    //   height: 80,
    //   [down(values.sm)]: {
    //     height: 60,
    //     order: 1,
    //   },
    //   '& > div': {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     '& > svg': {
    //       width: 26,
    //       margin: spacing(0, 2),
    //     },
    //   },
    // },
  }),
  { name: 'FirstSlider' },
)

export default useFirstSliderStyles
