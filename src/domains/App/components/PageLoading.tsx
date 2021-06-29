import { Player } from '@lottiefiles/react-lottie-player'
import { useRef, VFC } from 'react'
import animationData from 'assets/animations/pageLoading.json'
import { Typography } from '@material-ui/core'
import { makePrStyles } from 'theme'

const usePageLoading = makePrStyles(
  ({ spacing }) => ({
    root: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 999999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    title: { margin: spacing(5, 0) },
  }),
  { name: 'PageLoading' },
)

const PageLoading: VFC = () => {
  const classes = usePageLoading()
  const lottieRef = useRef(null)
  return (
    <div className={classes.root}>
      <Player ref={lottieRef} autoplay={true} loop src={animationData} />
      <Typography variant="h4" className={classes.title}>
        کارگردان زندگی خودت شو ...
      </Typography>
    </div>
  )
}
export default PageLoading
