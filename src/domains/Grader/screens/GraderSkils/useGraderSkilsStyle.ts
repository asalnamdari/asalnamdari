import { makePrStyles } from 'theme'

const useGraderSkilsStyle = makePrStyles(
  ({ palette: { accent }, spacing, breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: spacing(3),
      [down(values.sm)]: {
        justifyContent: 'flex-start',
        paddingTop: 180,
        // padding: '20vh 3vw 10vh 3vw',
      },
    },
    title: {
      fontWeight: 900,
    },
    contentText: {
      color: '#D0E9FF',
      margin: spacing(8, 'auto'),
      textAlign: 'center',
      '& b': {
        color: accent.main,
      },
    },
    skillsContainer: {
      display: 'flex',
      marginBottom: spacing(7),
      [down(values.md)]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      [down(values.sm)]: {
        minHeight: 265,
      },
    },
    skils: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: spacing(0, 2),
      background: '#586C7E',
      borderRadius: 20,
      position: 'relative',
      padding: 20,
      boxShadow: 'inset 0 0 8px 0px #fff',
      minWidth: 340,
      [down(values.lg)]: {
        minWidth: 300,
      },
      [down(values.md)]: {
        marginBottom: spacing(4),
      },
      [down(values.sm)]: {
        maxWidth: 300,
        flexDirection: 'column',
      },
    },
    skillNumber: {
      color: '#fff',
      width: 30,
      height: 30,
      fontFamily: 'IRANSans',
      position: 'absolute',
      top: spacing(-2),
      left: spacing(-2),
      borderRadius: 50,
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'center',
      lineHeight: '1.5',
      fontWeight: 600,
    },
    skillTitle: {
      fontFamily: 'IRANSans',
      color: '#909da9',
      marginBottom: spacing(3),
      fontWeight: 600,
    },
    submitBtn: {
      background: '#91A1AF',
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
    name: 'GraderSkils',
  },
)

export default useGraderSkilsStyle
