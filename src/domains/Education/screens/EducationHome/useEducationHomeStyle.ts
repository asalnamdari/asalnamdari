import { makePrStyles } from 'theme'

const useEducationHomeStyle = makePrStyles(
  ({ spacing, palette: { accent }, breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'auto',
      paddingTop: spacing(3),
      [down(values.sm)]: {
        padding: '40vh 3vw 10vh 3vw',
      },
    },
    title: {
      fontWeight: 900,
      margin: spacing(6, 0),
      [down(values.md)]: {
        maxWidth: 600,
        lineHeight: 1.5,
        textAlign: 'center',
        fontSize: '1.3em',
      },
    },
    form: {
      display: 'flex',
      marginTop: spacing(5),
      [down(values.md)]: {
        flexDirection: 'column',
      },
    },
    submitBtn: {
      background: accent.main,
      minWidth: 120,
      borderRadius: 20,
      marginTop: spacing(8),
      '&:hover': {
        backgroundColor: accent[600],
      },
      '& .MuiTypography-root': {
        marginTop: '-.8em',
        display: 'inline-block',
      },
      [down(values.sm)]: {
        lineHeight: '22px',
      },
    },
  }),
  { name: 'GraderHome' },
)
export default useEducationHomeStyle
