import { makePrStyles } from 'theme'

const useRadioPardisStyle = makePrStyles(
  ({ spacing, breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // overflowY: 'auto',

      textAlign: 'center',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingTop: '34vh',
      [down(values.lg)]: {
        paddingTop: '24vh',
      },
      [down(values.sm)]: {
        padding: '30vh 0 10vh 0',
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
      fontWeight: 600,
      lineHeight: '1.5',
    },
    podcastContent: {
      backgroundColor: '#3CA1B4',
    },
  }),
  {
    name: 'ًRadioPardis',
  },
)

export default useRadioPardisStyle
