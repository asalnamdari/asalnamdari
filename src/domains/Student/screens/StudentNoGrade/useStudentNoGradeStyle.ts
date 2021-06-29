import { makePrStyles } from 'theme'

const useStudentNoGradeStyle = makePrStyles(
  ({
    spacing,
    palette: { accent, secondary, common },
    breakpoints: { values, down },
  }) => ({
    root: {
      overflowY: 'auto',
      [down(values.sm)]: {
        padding: '40vh 3vw 10vh 3vw',
      },
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      width: 600,
      margin: spacing(0, 'auto'),
      boxShadow: '-6px 6px 13px #000',
      // marginBottom: spacing(8),
      [down(values.sm)]: {
        width: 280,
      },
    },
    header: {
      borderTopRightRadius: spacing(2),
      borderTopLeftRadius: spacing(2),
      backgroundColor: secondary.main,
      padding: spacing(0, 5),
      color: common.white,
      minHeight: 40,
      '& .MuiTypography-root': {
        lineHeight: '40px',
      },
    },

    main: {
      flex: 1,
      backgroundColor: common.white,
      borderBottomRightRadius: spacing(2),
      borderBottomLeftRadius: spacing(2),
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'column',
      padding: spacing(5),
    },
    textArea: {
      width: '100%',
    },
    footer: {
      marginTop: spacing(5),
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      [down(values.sm)]: {
        flexDirection: 'column',
        '& $input': {
          width: '100%',
          marginBottom: spacing(5),
        },
      },
    },
    submitMsg: {
      color: common.white,
      minWidth: 164,
      height: 40,
      borderRadius: 50,
    },
    input: {
      borderRadius: 50,
      border: `2px solid ${secondary.main}`,
      color: common.black,
      padding: spacing(0, 3),
      width: 200,
      height: 40,
      '& input': {
        fontSize: '1rem',
        '&::placeholder': {
          fontSize: '0.75rem',
        },
      },
      '& svg': {
        width: '30px!important',
        '& path': {
          fill: secondary.main,
        },
      },
    },
    adornment: {
      margin: 0,
    },
    devider: {
      backgroundColor: common.white,
      height: 3,
      margin: spacing(8, 'auto', 4, 'auto'),
      width: '50%',
    },
    content: {
      textAlign: 'center',
      color: '#D0E9FF',
      '& h1': {
        fontWeight: 900,
        [down(values.sm)]: {
          fontSize: '1.4rem',
        },
      },
      '& h6': {
        width: 430,
        margin: spacing(0, 'auto'),
        [down(values.sm)]: {
          fontSize: '0.875rem',
          width: 280,
        },
      },
    },
    submitBtn: {
      background: accent.main,
      minWidth: 164,
      borderRadius: 20,
      height: 40,
      padding: spacing(0, 9),
      marginTop: spacing(8),
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
    name: 'StudentNoGrade',
  },
)

export default useStudentNoGradeStyle
