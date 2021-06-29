import { makePrStyles } from 'theme'

const useTXT2ComponentStyle = makePrStyles<{ state: number }>(
  ({ palette: { common }, breakpoints: { down, values }, spacing }) => ({
    root: {
      display: ({ state }) => (state === 2 || state === 3 ? 'block' : 'none'),
      position: 'absolute',
      left: -220,
      top: 50,
      [down(values.md)]: {
        position: 'relative',
        top: 'unset',
        left: 'unset',
        display: 'flex',
        width: ({ state }) => (state === 3 ? 170 : 300),
      },
    },
    txt: {
      textAlign: 'end',
      color: common.white,
      fontSize: '2em',
      fontWeight: 300,
      transition: '1s all',
      // useModify: 'read-write-plaintext-only',
      width: 200,
      zIndex: 101,
      position: 'relative',
      [down(values.md)]: {
        width: 'auto',
        textAlign: ({ state }) => (state === 3 ? 'end' : 'center'),
        margin: ({ state }) =>
          state === 3 ? spacing(0, 4) : spacing(2, 0, 0, 0),
        fontSize: ({ state }) => (state === 3 ? '1.5em' : '2em'),
      },
      [down(400)]: {
        fontSize: () => '1.5em',
      },
    },
  }),
  {
    name: 'TXT2Component',
  },
)

export default useTXT2ComponentStyle
