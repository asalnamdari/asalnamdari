import { makePrStyles } from 'theme'

const useGraderStyle = makePrStyles(
  ({ breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // paddingTop: '14vh',

      [down(values.sm)]: {
        justifyContent: 'flex-start',
        padding: 0,
      },
    },
  }),
  { name: 'Grader' },
)
export default useGraderStyle
