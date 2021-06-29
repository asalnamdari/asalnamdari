import { makePrStyles } from 'theme'

const useEducationDegreesStyle = makePrStyles(
  ({
    palette: { accent, common },
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
    },
    degrees: {
      display: 'flex',
      flexDirection: 'column',
      width: 1600,
      // height: ({ start }) => start * 0.6,
      height: 416,
      // background: '#fff',
      borderRadius: 8,
      // boxShadow: '-4px 4px 4px #0C1116',
      [down(values.xl)]: {
        width: 1100,
        height: 375,
      },
      [down(values.lg)]: {
        width: values.lg - 440,
      },
      [down(values.md)]: {
        width: values.md - 400,
      },
      [down(values.sm)]: {
        width: 320,
        height: 450,
      },
    },
    degreesTitle: {
      textAlign: 'center',
      padding: spacing(2),
      // marginTop: spacing(6),
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
      display: 'flex',
      justifyContent: 'center',
      marginTop: spacing(8),
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
    carouselItem: {
      '& img': {
        borderRadius: 12,
        height: '100%',
        margin: '0 auto',
      },
    },
  }),
  {
    name: 'GraderDegrees',
  },
)

export default useEducationDegreesStyle
