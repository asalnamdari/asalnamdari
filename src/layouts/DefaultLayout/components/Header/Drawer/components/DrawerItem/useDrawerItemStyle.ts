import { makePrStyles } from 'theme'

const useDrawerItemStyle = makePrStyles(
  ({
    palette: { secondary, accent, common },
    spacing,
    breakpoints: { down },
  }) => ({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      marginBottom: spacing(4),
      textDecoration: 'none',
      color: common.black,
      transition: '0.5s all',
      '&:hover': {
        color: accent.main,
      },
    },
    icon: {
      position: 'relative',
      width: 68,
      height: 32,
      display: 'flex',
      justifyContent: 'flex-end',
      '&::after': {
        content: '""',
        width: '100%',
        height: 10,
        position: 'absolute',
        right: 0,
        bottom: -5,
        backgroundColor: secondary[600],
      },
    },
    title: {
      position: 'relative',
      padding: spacing(0, 4, 2, 8),
      '&::after': {
        content: '""',
        width: '100%',
        height: 5,
        position: 'absolute',
        right: 0,
        bottom: -5,
        backgroundColor: secondary[600],
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
      },
      [down(400)]: {
        '& h5': {
          fontSize: '0.75rem',
          whiteSpace: 'nowrap',
        },
      },
    },
  }),
  {
    name: 'DrawerItem',
  },
)

export default useDrawerItemStyle
