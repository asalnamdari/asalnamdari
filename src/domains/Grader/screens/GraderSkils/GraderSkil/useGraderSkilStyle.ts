import { makePrStyles } from 'theme'

const useGraderSkilStyle = makePrStyles(
  ({ palette: { accent, common }, spacing }) => ({
    root: {},
    btns: {
      width: '100%',
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
      minWidth: 200,
      background: 'transparent',
      border: `2px solid ${common.white}`,
      boxShadow: `inset 0 0 8px 0px ${common.white}`,
      fontSize: '1rem',
    },
  }),
  {
    name: 'GraderSkil',
  },
)

export default useGraderSkilStyle
