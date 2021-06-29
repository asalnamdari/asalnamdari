import { makePrStyles } from 'theme'

const useGraderHomeStyle = makePrStyles(
  ({
    spacing,
    palette: { accent, common },
    breakpoints: { down, values },
  }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // overflowY: 'auto',
      paddingTop: spacing(3),
      [down(values.sm)]: {
        paddingTop: spacing(3),
        justifyContent: 'unset',
        // padding: '40vh 3vw 10vh 3vw',
      },
    },
    dropDown: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 40,
      color: common.white,
      margin: spacing(0, 3),
      '& > p': {
        minWidth: 24,
      },
      [down(values.md)]: {
        margin: spacing(0, 0, 5, 0),
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
      marginBottom: spacing(5),
      [down(values.md)]: {
        flexDirection: 'column',
      },
    },
    submitBtn: {
      background: accent.main,
      minWidth: 120,
      borderRadius: 20,
      '&.Mui-disabled': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: 'rgba(1,1,1,1)',
      },
      '&:hover': {
        backgroundColor: accent[600],
      },
      '& .MuiTypography-root': {
        marginTop: '-.8em',
        display: 'inline-block',
      },
      [down(values.sm)]: {
        marginBottom: spacing(20),
        lineHeight: '22px',
      },
    },
  }),
  { name: 'GraderHome' },
)
export default useGraderHomeStyle
