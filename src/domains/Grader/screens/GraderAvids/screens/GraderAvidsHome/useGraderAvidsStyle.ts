import { common } from '@material-ui/core/colors'
import { makePrStyles } from 'theme'

const useGraderAvidsHomeStyle = makePrStyles(
  ({ palette: { accent }, spacing, breakpoints: { down, values } }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      textAlign: 'center',
      lineHeight: 1.5,
      fontWeight: 300,
      [down(values.sm)]: {
        width: '90%',
        fontSize: '1.1em',
        '& br': {
          display: 'none',
        },
      },
    },
    contentText: {
      color: '#D0E9FF',
      margin: spacing(8, 'auto'),
      textAlign: 'center',
      lineHeight: 1.5,
    },
    buttonsContainer: {
      display: 'flex',
      [down(values.sm)]: {
        flexDirection: 'column',
      },
      '& .MuiButton-label': {
        display: 'flex',
        alignItems: 'center',
      },
    },
    submitBtn: {
      color: accent.main,
      fontWeight: 900,
      background: '#F2F3F6',
      minWidth: 120,
      minHeight: 46,
      borderRadius: 10,
      height: 48,
      padding: spacing(0, 9, 0, 1),
      margin: spacing(0, 4),
      '& svg': {
        margin: spacing(0, 2),
      },
      '&:hover': {
        color: common.white,
        backgroundColor: accent[600],
        '& .MuiTypography-root': {
          color: common.white,
        },
      },
      '& .MuiTypography-root': {
        color: accent.main,
        marginTop: '-.8em',
        display: 'inline-block',
      },
      [down(values.sm)]: {
        margin: spacing(3, 0),
      },
    },
  }),
  {
    name: 'GraderAvidsHome',
  },
)

export default useGraderAvidsHomeStyle
