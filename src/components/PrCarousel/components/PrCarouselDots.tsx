import React from 'react'
import PrCarouselDotDefault from './PrCarouselDotDefault'
import { IPrCarouselDotsProps } from '../PrCarousel.type'
import { makePrStyles } from 'theme'

const usePrCarouselDotsStyle = makePrStyles(
  ({ spacing }) => ({
    root: {
      display: 'flex',
      padding: spacing(2, 0),
      justifyContent: 'center',
      flexDirection: 'row-reverse',
    },
  }),
  { name: 'PrCarouselDots' },
)

const PrCarouselDots: React.FC<IPrCarouselDotsProps> = ({
  classes,
  onChange,
  currentSlide,
  slidesIndexed,
  dotComponent: DotComponent = PrCarouselDotDefault,
}) => {
  const classNames = usePrCarouselDotsStyle({ classes })

  return (
    <div className={classNames.root}>
      {slidesIndexed.map((idx) => (
        <DotComponent
          key={idx}
          onClick={() => onChange(idx)}
          active={idx === currentSlide}
          idx={idx}
        />
      ))}
    </div>
  )
}

PrCarouselDots.displayName = 'PrCarouselDots'

export default PrCarouselDots
