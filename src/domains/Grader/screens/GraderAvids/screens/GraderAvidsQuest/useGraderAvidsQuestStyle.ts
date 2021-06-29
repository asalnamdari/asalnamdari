import { common } from '@material-ui/core/colors'
import { makePrStyles } from 'theme'

const useGraderAvidsQuestStyle = makePrStyles(
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
      // padding: spacing(0, 9, 0, 1),
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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: spacing(3),
      [down(values.sm)]: {
        minWidth: 'auto',
        minHeight: 'auto',
        padding: spacing(5, 3, 3, 3),
      },
    },
    textArea: {
      width: '100%',
    },
    submitMsg: {
      color: common.white,
      width: 100,
      borderRadius: 50,
      marginTop: spacing(5),
    },
  }),
  {
    name: 'GraderAvidsQuest',
  },
)

export default useGraderAvidsQuestStyle
