import { makePrStyles } from 'theme'

const usePrPodcastPlayerItemStyle = makePrStyles(
  ({ spacing, palette: { common } }) => ({
    root: {
      margin: spacing(0, 2),
      cursor: 'pointer',
      textAlign: 'center',
      // width: 113,

      '&:hover': {},
    },
    content: {
      height: '100%',
      overflow: 'hidden',
      backgroundColor: '#486986',
      borderRadius: spacing(2),
      padding: 0,
      '& .MuiButton-label': {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
      },
      '&.Mui-disabled': {
        '& $image': {
          backgroundColor: '#bbbbbb',
        },
      },
      '& > span': {
        margin: spacing(1, 0),
      },
      '&:hover': {
        backgroundColor: '#3c5973',
      },
    },
    tile: {
      height: '100%',
    },

    image: {
      position: 'relative',
      backgroundColor: common.white,
      borderRadius: spacing(2),
      height: '100%',
      width: '100%',
      '& > svg': {
        transform: 'translate3d(0px, -16px, 0px)!important',
      },
    },
    podcastLogo: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      textAlign: 'center',
      width: '100%',
      '& svg': {
        fill: '#486986',
      },
    },
    title: {
      margin: spacing(1, 0, 2, 0),
    },
    tooltip: {
      display: 'flex',
      flexDirection: 'column',
    },
    tooltipPopper: {
      textAlign: 'center',
      boxShadow: '0 0 10px 2px rgb(0 0 0 / 30%)',
      backgroundColor: '#486986',
      '& span': {
        fontSize: '0.875rem',
        margin: spacing(3, 0, 2, 0),
        lineHeight: '1.5',
      },
      '& p': {
        margin: 0,
        marginBottom: spacing(2),
        fontSize: '0.75rem',
        lineHeight: '1.5',
      },
    },
    titleContainer: {
      width: '100%',
      padding: spacing(1),
      display: 'flex',
      flexDirection: 'column',
      minHeight: 62,
      justifyContent: 'center',
      '& span': {
        fontSize: '0.75rem',
        lineHeight: '1.5',
      },
    },
  }),
  {
    name: 'PodcastItem',
  },
)

export default usePrPodcastPlayerItemStyle
