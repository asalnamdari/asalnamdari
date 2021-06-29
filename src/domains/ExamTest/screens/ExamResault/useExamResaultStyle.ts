import { makePrStyles } from 'theme'

const useExamResultStyle = makePrStyles(
  ({
    palette: { accent, common, secondary },
    spacing,
    breakpoints: { down, values },
  }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'auto',
      paddingTop: spacing(3),
      textAlign: 'center',
      [down(values.sm)]: {
        padding: '40vh 3vw 10vh 3vw',
        // '& .MuiTypography-h1': {
        //   fontSize: '1.4em',
        //   lineHeight: 1.5,
        // },
        // '& .MuiTypography-subtitle1': {
        //   fontSize: '1.2em',
        //   lineHeight: 1.5,
        // },
      },
    },
    table: {
      '& td': {
        color: common.black,
      },
      '& th': {
        backgroundColor: accent.main,
        color: common.white,
      },
      '& .MuiTableRow-root': {
        '&:nth-of-type(even)': {
          backgroundColor: '#486986',
          '& td': {
            color: common.white,
          },
        },
      },
    },
    chartContainer: {
      '& .MuiTableContainer-root': {
        width: 520,
        padding: spacing(0, 4),
        [down(values.sm)]: {
          padding: 0,
        },
      },
      display: 'flex',
      height: 'calc(100% - 33px)',
      [down(values.sm)]: {
        '& .MuiTableContainer-root': {
          width: '100%',
        },
        flexDirection: 'column-reverse',
      },
    },
    chartRoot: {
      [down(values.sm)]: {
        height: 300,
      },
    },
    chart: {
      display: 'flex',
      flexDirection: 'column',
      width: values.md,
      height: 400,
      background: secondary[50],
      borderRadius: 8,
      boxShadow: '-4px 4px 4px #0C1116',

      [down(values.md)]: {
        width: values.sm,
        height: 300,
      },
      [down(values.sm)]: {
        width: '96%',
        height: 'auto',
      },
    },
    chartTitle: {
      textAlign: 'start',
      backgroundColor: '#486986',
      padding: spacing(2),
    },
    contentText: {
      color: '#D0E9FF',
      margin: spacing(8, 'auto'),
      textAlign: 'center',
      maxWidth: 700,
    },
    submitBtn: {
      background: accent.main,
      minWidth: 120,
      borderRadius: 20,
      height: 48,
      margin: spacing(8, 0),
      // padding: 0,
      display: 'flex',
      justifyContent: 'space-around',
      '&:hover': {
        backgroundColor: accent[600],
      },
      '& .MuiTypography-root': {
        marginTop: '-.8em',
        display: 'inline-block',
      },
      '& svg': {
        '& #Group_700 g': {
          display: 'none',
        },
        '& path': {
          fill: common.white,
        },
        '& circle': {
          stroke: common.white,
        },
      },
      [down(values.sm)]: {
        margin: spacing(16, 0),
        height: 30,
      },
    },
  }),
  {
    name: 'ExamResult',
  },
)

export default useExamResultStyle
