import { makePrStyles } from 'theme'

const useAbilityBoxStyle = makePrStyles(
  ({ spacing, palette: { common }, breakpoints: { down, values } }) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      // alignItems: 'center',
      backgroundColor: '#91A1AF',
      width: 282,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      [down(values.md)]: {
        width: 'unset',
        flex: 1,
        margin: spacing(0, 4),
      },
      [down(values.sm)]: {
        marginTop: spacing(4),
        maxWidth: 282,
      },
    },
    container: {
      // backgroundColor: '#4b5d6d',
      borderRadius: 22,
      margin: spacing(1.5),
    },
    title: {
      width: '80%',
      marginLeft: 2,
      fontWeight: 300,
      color: common.white,
      backgroundColor: '#66798a',
      marginTop: 2,
      lineHeight: 1.6,
      borderRadius: 20,
      borderLeft: '#FF3629 3px solid',
      padding: spacing(0, 3),
      transition: '1s opacity',
      fontFamily: 'IRANSans',
    },
    content: {
      backgroundColor: 'white',
      color: '#586C7E',
      minHeight: 80,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      padding: spacing(2),
      transition: '1s opacity',
      flex: 1,
    },
  }),
  {
    name: 'AbilityBox',
  },
)

export default useAbilityBoxStyle
