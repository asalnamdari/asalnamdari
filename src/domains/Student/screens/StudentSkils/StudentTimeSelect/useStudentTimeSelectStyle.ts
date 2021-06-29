import { makePrStyles } from 'theme'

const useStudentTimeSelectStyle = makePrStyles(
  ({
    spacing,
    palette: { common, accent },
    breakpoints: { values, down },
  }) => ({
    root: {
      display: 'flex',
      margin: spacing(2),
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 348,
      [down(values.sm)]: {
        maxWidth: 348,
        width: '100%',
      },
    },
    itemContainer: {
      margin: spacing(1, 'auto'),
      padding: spacing(1),
      borderRadius: 50,
      '&:hover': {
        backgroundColor: accent[800],
      },
    },
    item: {
      margin: spacing(1),
      minWidth: 150,
      borderRadius: 50,
      background: 'transparent',
      border: `2px solid ${common.white}`,
      boxShadow: `inset 0 0 8px 0px ${common.white}`,
      fontFamily: 'IRANSans',
      [down(values.sm)]: {
        minWidth: 135,
      },
    },
    active: {
      backgroundColor: accent.main,
    },
  }),
  {
    name: 'StudentTimeSelect',
  },
)

export default useStudentTimeSelectStyle
