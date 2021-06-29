import { makePrStyles } from 'theme'

const useGraderResaultStyle = makePrStyles(
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
      // overflowY: 'auto',
      padding: spacing(48, 0, 10, 0),
      textAlign: 'center',
      justifyContent: 'flex-start',
      [down(values.lg)]: {
        paddingTop: spacing(38),
      },
      [down(values.sm)]: {
        paddingTop: 180,
        // padding: '22vh 3vw 10vh 3vw',
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
        minHeight: 820,
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
        height: 30,
      },
    },
  }),
  {
    name: 'GraderResault',
  },
)

export default useGraderResaultStyle
