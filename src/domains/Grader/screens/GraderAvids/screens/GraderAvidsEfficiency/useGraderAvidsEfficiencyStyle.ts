import { common } from '@material-ui/core/colors'
import { makePrStyles } from 'theme'

const useGraderAvidsEfficiencyStyle = makePrStyles(
  ({
    palette: { accent, secondary },
    spacing,
    breakpoints: { down, values },
  }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 300,
      [down(values.sm)]: {
        width: '100%',
        padding: spacing(0, 4),
      },
    },
    box: {
      display: 'flex',
      marginTop: spacing(5),
      flexDirection: 'column',
      boxShadow: `0px 0px 20px #0C1116`,
      borderRadius: spacing(2),
      overflow: 'hidden',
      [down(values.sm)]: {
        width: '100%',
      },
    },
    headerBtn: {
      color: accent.main,
      fontWeight: 900,
      background: '#F2F3F6',
      minWidth: 120,
      borderRadius: 10,
      height: 48,
      padding: spacing(0, 9, 0, 1),
      margin: spacing(0),
      '& svg': {
        margin: spacing(0, 2),
      },
      '&:hover': {
        backgroundColor: '#F2F3F6',
      },
      '& .MuiTypography-root': {
        color: accent.main,
        marginTop: '-.8em',
        display: 'inline-block',
      },
      [down(values.sm)]: {
        fontSize: '0.875rem',
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
    title: {
      color: accent.main,
      fontWeight: 500,
    },
    contentText: {
      color: common.black,
      // margin: spacing(8, 'auto'),
      textAlign: 'left',
      lineHeight: 1.5,
      [down(values.sm)]: {
        fontSize: '0.85em',
        padding: spacing(2, 2, 4, 2),
        marginTop: spacing(-1),
      },
    },
    main: {
      minWidth: 720,
      minHeight: 240,
      backgroundColor: secondary[50],
      display: 'flex',
      justifyContent: 'center',
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
      [down(values.sm)]: {
        minWidth: 'auto',
        minHeight: 'auto',
        padding: spacing(5, 0, 3, 0),
        '& ul': {
          padding: 0,
          '& li': {
            padding: '0!important',
            background: '#ffffff',
            boxShadow:
              'inset 20px 20px 60px #d9d9d9,inset -20px -20px 60px #ffffff',
            width: '80%',
            margin: spacing(3, 'auto'),
            display: 'block',
          },
        },
      },
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#586C7E',
      [down(values.sm)]: {
        padding: spacing(0, 6),
        flexDirection: 'column',
      },
    },

    btns: {
      background: accent.main,
      minWidth: 120,
      borderRadius: 20,
      height: 36,
      padding: spacing(0, 4),
      margin: spacing(3),
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
    name: 'GraderAvidsCultivation',
  },
)

export default useGraderAvidsEfficiencyStyle
