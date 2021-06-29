import { makePrStyles } from 'theme'

const useGraderPodcastsStyle = makePrStyles(
  ({ palette: { accent }, spacing, breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // overflowY: 'auto',
      textAlign: 'center',
      // overflowY: 'auto',
      // overflowX: 'hidden',
      paddingTop: '34vh',
      [down(values.lg)]: {
        paddingTop: '24vh',
      },
      [down(values.sm)]: {
        paddingTop: 180,
        // padding: '30vh 0 10vh 0',
      },
    },
    content: {
      marginTop: spacing(6),
      padding: '0 3vw',
    },
    contentText: {
      color: '#D0E9FF',
      margin: spacing(8, 'auto'),
      textAlign: 'center',
    },
    submitBtn: {
      background: accent.main,
      minWidth: 120,
      borderRadius: 20,
      // height: 48,
      padding: spacing(1, 9),
      marginTop: spacing(4),
      '&:hover': {
        backgroundColor: accent[600],
      },
      '& .MuiTypography-root': {
        marginTop: '-.8em',
        display: 'inline-block',
      },
    },
  }),
  {
    name: 'GraderPodcasts',
  },
)

export default useGraderPodcastsStyle
