import { makePrStyles } from 'theme'

const useMenuStyle = makePrStyles(
  ({ spacing }) => ({
    root: {
      borderBottomLeftRadius: spacing(10),
      position: 'fixed',
      right: spacing(4),
      top: spacing(22),
      width: 353,
      height: '76vh',
      // minHeight: 571,
      direction: 'initial',
      overflowY: 'auto',
    },
    container: {
      backgroundColor: '#EDEDED',
    },
    subMenu: {
      marginTop: spacing(3),
    },
    nav: {
      padding: spacing(5, 0),
    },
    about: {
      position: () => 'relative',
      display: 'block',
      marginBottom: spacing(12),
    },
  }),
  { name: 'Menu' },
)
export default useMenuStyle
