import { Player } from '@lottiefiles/react-lottie-player'
import { Button, Tooltip } from '@material-ui/core'
import animationData from 'assets/animations/music.json'
import { ReactComponent as Pause } from 'assets/svg/PauseIcon.svg'
import { ReactComponent as Play } from 'assets/svg/PlayIcon.svg'
import clsx from 'clsx'
import { useEffect, useRef, VFC } from 'react'
import { Podcast } from 'types/serverTypes'
import { IPrPodcastPlayerProps } from '../PrPodcastPlayer'
import usePrPodcastPlayerItemStyle from './usePrPodcastPlayerItemStyle'

export interface IPrPodcastPlayerItemProps
  extends Podcast,
    Pick<IPrPodcastPlayerProps, 'classes'> {
  isDisabled?: boolean
  playing?: boolean
  onToggle(): void
}

const PrPodcastPlayerItem: VFC<IPrPodcastPlayerItemProps> = ({
  title,
  isDisabled: disabled,
  onToggle,
  description,
  playing,
  classes,
}) => {
  const lottieRef = useRef(null)

  const innerClasses = usePrPodcastPlayerItemStyle({ classes })

  useEffect(() => {
    !playing
      ? (lottieRef.current as any)?.pause()
      : (lottieRef.current as any)?.play()
  }, [playing])

  const handlePodcastClick = () => onToggle()

  return (
    <Tooltip
      title={
        <div
          className={innerClasses.tooltip}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      }
      classes={{ tooltip: innerClasses.tooltipPopper }}
      placement="top"
    >
      <div className={clsx(innerClasses.root, innerClasses.tile)}>
        <Button
          className={innerClasses.content}
          size="medium"
          onClick={handlePodcastClick}
          disabled={disabled}
        >
          <div className={innerClasses.image}>
            <Player ref={lottieRef} autoplay={false} loop src={animationData} />
            <div className={innerClasses.podcastLogo}>
              {playing ? (
                <Pause width={24} height={24} />
              ) : (
                <Play width={24} height={24} />
              )}
            </div>
          </div>
          <div className={innerClasses.titleContainer}>
            {title.split('-').map((tt) => (
              <span key={tt}>{tt}</span>
            ))}
          </div>
        </Button>
      </div>
    </Tooltip>
  )
}

export default PrPodcastPlayerItem
