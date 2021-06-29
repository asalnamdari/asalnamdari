import { makePrStyles } from 'theme'

const useAboutStyle = makePrStyles(
  ({ palette: { common }, spacing, breakpoints: { down, values } }) => ({
    root: {
      width: '100%',
      height: 'calc(100vh - 276px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // overflowY: 'auto',
      paddingTop: spacing(3),
    },
    title: {
      fontSize: '3.875rem',
      fontWeight: 900,
    },
    contentText: {
      fontSize: '2.125rem',
      color: common.white,
      margin: spacing(8, 'auto'),
      textAlign: 'center',
      maxWidth: 720,
      fontWeight: 900,
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
    copyRight: {
      marginTop: spacing(3),
      textAlign: 'start',
      fontSize: '1rem',
    },
    footer: {
      position: 'absolute',
      bottom: spacing(4),
      left: 100,
      // right: 100,
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'column',
      width: 'calc(100% - 200px)',
    },
    contactUs: {
      display: 'flex',
      '& div': {
        display: 'flex',
        alignItems: 'center',
        margin: spacing(0, 2),
        '& svg': {
          margin: spacing(0, 1),
          '& > path': {
            fill: common.white,
          },
          '& #Path_781,& #Path_832': {
            fill: 'none',
          },
        },
      },
    },
    footerContentWrapper: {
      color: common.white,
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    divider: {
      height: 5,
      backgroundColor: common.white,
      width: '100%',
    },
  }),
  {
    name: 'About',
  },
)

export default useAboutStyle
