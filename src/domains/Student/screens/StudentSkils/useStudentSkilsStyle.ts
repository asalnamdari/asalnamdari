import { makePrStyles } from 'theme'

const useStudentSkilsStyle = makePrStyles(
  ({
    palette: { accent },
    spacing,
    breakpoints: { down, values },
  }) => ({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'auto',
      paddingTop: spacing(3),
      [down(values.sm)]: {
        padding: '40vh 3vw 10vh 3vw',
      },
    },
    contentText: {
      color: '#D0E9FF',
      textAlign: 'center',
    },

    submitBtn: {
      background: accent.main,
      minWidth: 120,
      borderRadius: 20,
      height: 48,
      padding: spacing(4, 9),
      '&:hover': {
        backgroundColor: accent[600],
      },
      '& .MuiTypography-root': {
        marginTop: '-.8em',
        display: 'inline-block',
      },
      [down(values.sm)]: {
        height: 30,
      },
    },
  }),
  {
    name: 'StudentSkils',
  },
)

export default useStudentSkilsStyle
