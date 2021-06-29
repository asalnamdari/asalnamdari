import { common } from '@material-ui/core/colors'
import { makePrStyles } from 'theme'

const useStudentAvidsStyle = makePrStyles<{ isEarnOpen: boolean }>(
  ({
    palette: { accent, secondary },
    spacing,
    breakpoints: { down, values },
  }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: '100%',
      [down(values.sm)]: {
        justifyContent: 'unset',
        padding: '40vh 3vw 10vh 3vw',
      },
    },
    box: {
      width: values.md,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: `0px 0px 20px #0C1116`,
      borderRadius: spacing(2),
      margin: spacing(5, 'auto'),
      [down(values.md)]: {
        width: '90%',
      },
    },
    content: {},
    headerBtn: {
      fontWeight: 900,
      // padding: spacing(0, 9, 0, 1),
      margin: spacing(0, 'auto'),
      [down(values.sm)]: {
        width: '70%',
        textAlign: 'center',
        fontSize: '1.3rem',
        // padding: 0,
      },
    },
    backBtn: {
      borderRadius: 100,
      background: '#F2F3F6',
      minWidth: 50,
      height: 50,
      '&:hover': {
        background: accent.main,
        fill: '#fff',
      },
    },
    earnBtn: {
      padding: 0,
      color: ({ isEarnOpen }) => (isEarnOpen ? accent.main : common.black),
      '& .MuiButton-label': {
        color: 'inherit',
        fontWeight: 900,
      },
      [down(values.sm)]: {
        margin: ({ isEarnOpen }) =>
          isEarnOpen ? spacing(1, 0, 1, 0) : spacing(1, 0, 4, 0),
      },
    },
    earnContentText: {
      '& span:first-child': {
        whiteSpace: 'nowrap',
        fontWeight: 900,
        marginRight: spacing(5),
      },
    },
    title: {
      color: accent.main,
      fontWeight: 900,
      [down(values.sm)]: {
        fontSize: '0.875rem',
      },
    },
    main: {
      padding: spacing(7, 0),
      backgroundColor: secondary[50],
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      '& ul': {
        padding: spacing(0, 0, 0, 3),
        '& li': {
          padding: spacing(0, 0, 0, 3),
          '&::marker': {
            content: "'■'",
            color: '#586C7E',
            fontSize: 20,
          },
        },
      },
      [down(values.md)]: {
        justifyContent: 'center',
      },
      [down(values.sm)]: {
        minWidth: 'auto',
        minHeight: 'auto',
        padding: ({ isEarnOpen }) =>
          isEarnOpen ? spacing(5, 0, 10, 0) : spacing(5, 0, 3, 0),
      },
    },
    mainContainer: {
      width: '80%',
      marginBottom: ({ isEarnOpen }) => (isEarnOpen ? spacing(11) : 0),
      [down(values.sm)]: {
        width: '100%',
        paddingLeft: spacing(3),
      },
    },
    footer: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'space-between',
      backgroundColor: '#586C7E',
      height: 40,
    },

    btns: {
      position: 'absolute',
      top: spacing(-8),
      right: 0,
      background: accent.main,
      minWidth: 120,
      borderRadius: 20,
      height: 36,
      padding: spacing(0, 4),
      margin: spacing(3),
      '&:hover': {
        backgroundColor: accent[800],
      },
      '& .MuiTypography-root': {
        marginTop: '-.8em',
        display: 'inline-block',
      },
    },
    questBtn: {
      background: 'transparent',
      border: `2px solid ${common.white}`,
      boxShadow: `inset 0 0 8px 0px ${common.white}`,
    },
  }),
  {
    name: 'StudentAvids',
  },
)

export default useStudentAvidsStyle
