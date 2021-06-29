import { useMediaQuery, useTheme } from '@material-ui/core'
import PrCarousel from 'components/PrCarousel'
import { VFC } from 'react'
import { makePrStyles } from 'theme'
import useMultiAudio from './helpers'
import PrPodcastPlayerItem, {
  IPrPodcastPlayerItemProps,
} from './PrPodcastPlayerItem/PrPodcastPlayerItem'
// import usePodcastsPlayerStyle from './usePodcastsPlayerStyle'

export type IPrPodcastPlayerProps = {
  data: Omit<IPrPodcastPlayerItemProps, 'onToggle' | 'playing'>[]
  classes?: Partial<
    Record<
      | 'root'
      | 'content'
      | 'tile'
      | 'image'
      | 'podcastLogo'
      | 'title'
      | 'tooltip'
      | 'tooltipPopper'
      | 'titleContainer',
      string
    >
  >
}

const usePrPodcasetPlayerStyle = makePrStyles(
  ({ breakpoints: { values, down } }) => ({
    carousel: {
      maxWidth: 'calc(100% - 200px)',
      [down(values.md)]: {
        maxWidth: '100%',
      },
    },
  }),
  { name: '' },
)

const PrPodcastPlayer: VFC<IPrPodcastPlayerProps> = ({ data, classes }) => {
  const { items, onToggle } = useMultiAudio(data)
  const innerClasses = usePrPodcasetPlayerStyle()
  const {
    breakpoints: { values },
  } = useTheme()
  const isDownSm = useMediaQuery(`@media (max-width: ${values.sm}px)`)
  const isDownMd = useMediaQuery(`@media (max-width: ${values.md}px)`)
  const isDownLg = useMediaQuery(`@media (max-width: ${values.lg}px)`)

  return (
    <PrCarousel
      showDots
      centered
      slidesPerView={isDownSm ? 3 : isDownMd ? 5 : isDownLg ? 7 : 10}
      initial={isDownSm || isDownMd ? 0 : items.length / 2 - 1}
      classes={{ root: innerClasses.carousel }}
    >
      {items.map((item, i) => (
        <PrPodcastPlayerItem
          key={item.id}
          {...item}
          onToggle={() => onToggle(i)}
          classes={classes}
        />
      ))}
    </PrCarousel>
  )
}

export default PrPodcastPlayer
