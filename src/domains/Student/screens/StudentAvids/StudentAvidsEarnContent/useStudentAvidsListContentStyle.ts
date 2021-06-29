import { makePrStyles } from 'theme'
import { IStudentAvidsListContentProps } from './StudentAvidsEarnContent'

const useStudentAvidsEarnContentStyle = makePrStyles<
  Pick<IStudentAvidsListContentProps, 'classes'>
>(
  ({ palette: { common }, breakpoints: { values, down } }) => ({
    root: {
      [down(values.sm)]: {
        margin: 0,
      },
    },
    contentText: {
      color: common.black,
      lineHeight: 1.5,
      display: 'flex',
      justifyContent: 'flex-start',
      [down(values.sm)]: {
        fontSize: '0.563rem',
        flexWrap: 'wrap',
      },
    },
  }),
  {
    name: 'StudentAvidsEarnContent',
  },
)

export default useStudentAvidsEarnContentStyle
