import { makePrStyles } from 'theme'

const useDefaultLayoutStyle = makePrStyles<{ path: string }>(
  ({ palette: { secondary }, breakpoints: { down, values }, spacing }) => ({
    '@global': {
      'html,body,#📕root📕': {
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        fontFamily: 'DiodrumArabic, sans-serif',
        backgroundColor: ({ path }) =>
          path === '/grader'
            ? '#486986'
            : path === '/student'
            ? '#586C7E'
            : path === '/education'
            ? '#545F67'
            : secondary.main,
      },
      a: {
        textDecoration: 'none',
      },
    },
    root: {
      '& > div': {
        padding: ({ path }) => (path === '/' ? 0 : spacing(69, 0, 12, 0)),
        [down(values.md)]: {
          paddingTop: ({ path }) => (path === '/' ? 0 : spacing(31)),
        },
        [down(values.sm)]: {
          paddingTop: ({ path }) => (path === '/' ? 0 : spacing(48)),
        },
      },
    },
    content: {
      flex: 1,
      transform: 'scaleX(-1)',
    },
  }),
  { name: 'DefaultLayout' },
)

export default useDefaultLayoutStyle
