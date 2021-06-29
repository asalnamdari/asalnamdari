import { makePrStyles } from 'theme'

const usePrDropDownStyle = makePrStyles<{
  isOpen: boolean
  isSelectValue: boolean
}>(
  ({ spacing, palette: { accent }, breakpoints: { down, values } }) => ({
    root: {
      position: 'relative',
      backgroundColor: '#486986',
      boxShadow:
        'rgb(61, 90, 114) 3px 3px 6px 0px inset, rgb(72, 105, 134) -3px -3px 6px 1px inset',
      borderRadius: 50,
      transition: '300ms all',
      borderTopLeftRadius: ({ isOpen }) => (isOpen ? 0 : 50),
      borderTopRightRadius: ({ isOpen }) => (isOpen ? 0 : 50),
    },
    popOver: {
      position: 'absolute',
      overflow: 'hidden',
      bottom: spacing(12),
      backgroundColor: '#486986',
      boxShadow:
        'rgb(61, 90, 114) 3px 3px 6px 0px inset, rgb(72, 105, 134) -3px -3px 6px 1px inset',
      zIndex: 100,
      textAlign: 'center',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      width: 299,
      [down(values.lg)]: {
        width: 249,
      },
      [down(values.sm)]: {
        bottom: spacing(9.5),
      },
    },
    popOverContainer: {
      height: '100%',
      overflowY: 'auto',
      paddingBottom: spacing(8),
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgb(72, 105, 134)',
        backgroundColor: '#F5F5F5',
      },

      '&::-webkit-scrollbar': {
        width: 6,
        maxHeight: 'calc(100% - 50px)',
        backgroundColor: '#F5F5F5',
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: accent.main,
      },
    },
    texts: {
      width: '100%',
      height: 40,
      minWidth: 300,
      minHeight: 40,
      '&:hover': {
        borderRadius: 50,
      },
      '& .MuiTypography-root': {
        position: 'absolute',
        left: spacing(3),
        top: '50%',
        background: '#3a556d',
        borderRadius: 55,
        minWidth: 30,
        height: 30,
        marginTop: '-.8em',
        display: 'inline-block',
        lineHeight: '1.7',
      },
      [down(values.lg)]: {
        minWidth: 250,
      },
      [down(values.sm)]: {
        lineHeight: '22px',
        '& p': {
          fontSize: '1.3em',
        },
      },
    },
    selected: {
      position: 'relative',
      zIndex: 10,
      height: '100%',
      paddingLeft: spacing(11),
      background: ({ isOpen, isSelectValue }) => {
        if (isSelectValue && !isOpen) {
          return accent.main
        }
      },
      borderRadius: 50,
      '&:hover': {
        '& $texts.MuiTypography-root': {
          backgroundColor: accent.main,
        },
      },
    },
    selectedItem: {
      background: accent.main,
      borderRadius: 50,
    },
  }),
  {
    name: 'PrDropDown',
  },
)

export default usePrDropDownStyle
