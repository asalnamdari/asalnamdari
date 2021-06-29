import { makePrStyles } from 'theme'

const usePodcastStyle = makePrStyles(
  ({ spacing, palette: { common }, breakpoints: { down, values } }) => ({
    root: {
      width: 700,
      // height: 360,
      display: 'flex',
      flexDirection: 'column',
      // overflow: 'hidden',
      [down(values.md)]: {
        width: 510,
      },
      [down(values.sm)]: {
        width: 320,
        minHeight: 240,
      },
    },
    content: {
      // background: `linear-gradient(-70.13668165769045deg, rgba(255, 255, 255, 255) 0%, rgba(229, 230, 236, 255) 100%)`,
      // maxHeight: 250,
      // borderTopRightRadius: spacing(3),
      // borderTopLeftRadius: spacing(3),
      '& video': {
        width: '100%',
        // height: 'calc(100% - 100px)',
        borderRadius: 20,
      },
    },
    controller: {
      padding: spacing(3, 6),
      height: 112,
      background: `linear-gradient(-65.20672998807291deg, rgba(242, 243, 246, 255) 0%, rgba(229, 230, 236, 255) 100%)`,
      textAlign: 'end',
      borderBottomRightRadius: spacing(3),
      borderBottomLeftRadius: spacing(3),
      [down(values.sm)]: {
        padding: spacing(0, 3),
      },
    },
    controlBtn: {
      padding: 0,
      height: 32,
    },
    controllerTitle: {
      textAlign: 'center',
      margin: spacing(3, 0),
      color: common.white,
      [down(values.sm)]: {
        fontSize: '0.875em',
        margin: spacing(2, 0),
      },
    },
    controllerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }),
  { name: 'Podcast' },
)
export default usePodcastStyle
