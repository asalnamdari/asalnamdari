import { makePrStyles } from 'theme'
import { IAboutLinkProps } from './AboutLink'

const useAboutLinkStyle = makePrStyles<
  Pick<IAboutLinkProps, 'classes' | 'isRed'>
>(
  ({ spacing, breakpoints: { down }, palette: { common } }) => ({
    root: {
      display: 'flex',
      marginTop: spacing(18),
      zIndex: 99999,
      flexDirection: 'column',
      // alignItems: 'center',
      color: common.black,
      position: 'absolute',
      bottom: 20,
      '& svg': {
        width: 150,
      },
      // '& svg rect': {
      //   fill: ({ isRed }: any) => (isRed ? accent.main : common.black),
      // },
      // '& svg line': {
      //   stroke: ({ isRed }: any) => (isRed ? accent.main : common.black),
      // },
      [down(400)]: {
        marginTop: 0,
        // bottom: 20,
      },
    },
  }),
  { name: 'AboutLink' },
)

export default useAboutLinkStyle
