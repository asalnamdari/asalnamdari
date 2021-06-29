import { makePrStyles } from 'theme'

const useStudentStyle = makePrStyles(
  ({ breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '14vh',
      [down(values.sm)]: {
        padding: '0',
      },
    },
  }),
  { name: 'Student' },
)
export default useStudentStyle
