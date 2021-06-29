import { makePrStyles } from 'theme'

const useStudentHomeStyle = makePrStyles(
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
    questsContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    quests: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      width: 120,
      height: 120,
      margin: spacing(6, 3),
      [down(values.sm)]: {
        margin: spacing(1, 2),
      },
    },
    linksBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      textAlign: 'center',
      borderRight: 'white 3px solid',
      background:
        'transparent linear-gradient(210deg, #FF3629 0%, #801B15 100%) 0% 0% no-repeat padding-box',
      overflow: 'hidden',
      // marginBottom: spacing(12),
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      [down(values.sm)]: {
        margin: '1vh 0',
        padding: spacing(2),
      },
    },
    linksText: {
      textAlign: 'center',
      color: common.white,
      fontSize: '1.8em',
      fontWeight: 900,
      transition: '1s all',
      outline: 'none',
      fontFamily: 'IRANSans',
      [down(values.sm)]: {
        fontSize: '1em',
      },
    },
  }),
  { name: 'StudentHome' },
)
export default useStudentHomeStyle
