import { makePrStyles } from 'theme'

const useGraderAvidsStyle = makePrStyles(
  ({ spacing, breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'auto',
      padding: spacing(5, 0),
      textAlign: 'center',
      [down(values.sm)]: {
        justifyContent: 'flex-start',
        padding: '20vh 3vw 10vh 3vw',
        '& .MuiTypography-h1': {
          fontSize: '1.4em',
          lineHeight: 1.5,
        },
        '& .MuiTypography-subtitle1': {
          fontSize: '1.2em',
          lineHeight: 1.5,
        },
      },
    },
  }),
  {
    name: 'GraderAvids',
  },
)

export default useGraderAvidsStyle
