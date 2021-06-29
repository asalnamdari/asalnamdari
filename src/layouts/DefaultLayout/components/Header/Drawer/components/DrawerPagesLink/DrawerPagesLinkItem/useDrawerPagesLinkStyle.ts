import { makePrStyles } from 'theme'
import { IDrawerPageLinkItem } from './DrawerPagesLinkItem'

const useDrawerPagesLinkItemStyle = makePrStyles<
  Pick<
    IDrawerPageLinkItem,
    'index' | 'backColor' | 'textColor' | 'classes' | 'top'
  >
>(
  ({ palette: { secondary, common }, spacing }) => ({
    root: {
      backgroundColor: ({ backColor }) =>
        backColor ? backColor : secondary.main,
      position: 'absolute',
      height: '66vh',
      top: ({ index, top }) => (top ? top * index : 65 * index),
      width: '100%',
      zIndex: ({ index }) => 1000 + index,
      borderTopLeftRadius: 50,
      padding: spacing(5, 10),
    },
    title: {
      color: ({ textColor }) => (textColor ? textColor : common.white),
    },
    content: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
  {
    name: 'DrawerPagesLinkItem',
  },
)

export default useDrawerPagesLinkItemStyle
