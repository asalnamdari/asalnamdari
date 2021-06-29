import { makePrStyles } from 'theme'

const useHonoraryStyle = makePrStyles(
  ({ spacing, breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflowY: 'auto',
      paddingTop: spacing(3),
      [down(values.sm)]: {
        padding: '40vh 3vw 10vh 3vw',
      },
    },
    title: {
      fontWeight: 900,
    },
    contentText: {
      color: '#D0E9FF',
      margin: spacing(8, 'auto'),
      textAlign: 'center',
      maxWidth: 680,
    },
    icon: {
      position: 'absolute',
      right: 50,
      bottom: 0,
      height: 700,
      [down(1400)]: {
        right: 0,
        width: 330,
        height: 341,
      },
      [down(values.md)]: {
        display: 'none',
      },
    },
  }),
  {
    name: 'Honorary',
  },
)

export default useHonoraryStyle
