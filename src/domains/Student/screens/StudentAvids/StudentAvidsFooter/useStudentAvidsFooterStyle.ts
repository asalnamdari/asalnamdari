import { makePrStyles } from 'theme'

const useStudentAvidsFooterStyle = makePrStyles<{ isOpen: boolean }>(
  ({ spacing }) => ({
    root: {
      width: '90%',
      margin:'0 auto'
    },
    contentText: {
      color: '#D0E9FF',
      margin: spacing(0, 'auto'),
      width: '94%',
    },
    button: {
      width: '100%',
      '& .MuiButton-label': {
        '& span': {
          borderBottom: `1px solid #fff`,
          width: '100%',
          textAlign: 'start',
          '& svg': {
            transition: '300ms all',
            transform: ({ isOpen }) => `rotate(${isOpen ? '-90' : '0'}deg)`,
          },
        },
      },
    },
  }),
  {
    name: 'StudentAvidsFooter',
  },
)

export default useStudentAvidsFooterStyle
