import { makePrStyles } from 'theme'

const useNavItemStyle = makePrStyles<{ path: string }>(
  ({ palette: { accent, common, secondary } }) => ({
    root: {
      height: '100%',
      backgroundColor: ({ path }) =>
        path === '/grader'
          ? '#486986'
          : path === '/student'
          ? '#586C7E'
          : path === '/education'
          ? '#545F67'
          : secondary.main,
      borderRadius: 22,
    },
    link: {
      display: 'flex',
      justifyContent: 'center',
      width: '99%',
      height: '100%',
      marginTop: 2,
      borderRadius: 20,
      borderLeft: `${accent.main} 3px solid`,
      marginRight: 2,
      textAlign: 'center',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 8px 0px #506473',
      position: 'relative',
      cursor: 'pointer',
      backgroundSize: '200% 200%',
      backgroundImage: `linear-gradient(to left, transparent 50%, ${accent.main} 50%)`,
      transition: 'background-position 300ms, color 300ms ease',
      '& a': {
        display: 'flex',
        // alignItems: 'center',
        textDecoration: 'none',
        zIndex: 11,
        // height: 'inherit',
      },
      '&:hover': {
        backgroundImage: `linear-gradient(to left, transparent 50%, ${accent.main} 50%)`,
        backgroundPositionX: '0%',
        '& h5': {
          fontWeight: 900,
        },
      },
      '& h5': {
        fontFamily: 'IRANSans',
      },
    },
    text: {
      color: common.white,
      height: 'initial',
    },
  }),
  { name: 'NavItem' },
)

export default useNavItemStyle
