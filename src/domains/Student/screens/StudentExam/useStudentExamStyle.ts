import { makePrStyles } from 'theme'

const useStudentExamStyle = makePrStyles(
  ({ palette: { accent }, spacing, breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // overflowY: 'auto',
      paddingTop: spacing(3),
      textAlign: 'center',
      [down(values.sm)]: {
        paddingTop: 180,
        // padding: '40vh 3vw 10vh 3vw',
        '& .MuiTypography-h1': {
          fontSize: '1.4em',
          lineHeight: 1.5,
        },
        '& .MuiTypography-subtitle1': {
          fontSize: '1.2em',
          lineHeight: 1.5,
        },
      },
    },
    title: {
      fontWeight: 900,
      '& > span': {
        color: accent.main,
        margin: spacing(0, 2),
      },
    },
    contentText: {
      color: '#D0E9FF',
      margin: spacing(8, 'auto'),
      textAlign: 'center',
      lineHeight: '1.5',
      [down(values.sm)]: {
        fontSize: '0.875rem',
        borderTop: '1px solid',
        paddingTop: spacing(3),
        marginTop: spacing(3),
      },
    },
    submitBtn: {
      background: accent.main,
      minWidth: 120,
      borderRadius: 20,
      height: 48,
      padding: spacing(0, 9),
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
    name: 'StudentExam',
  },
)

export default useStudentExamStyle
