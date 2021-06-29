import React from 'react'
import { PrCarouselArrow } from './PrCarouselArrow'
import { IPrCarouselArrowsProps } from '../PrCarousel.type'

const PrCarouselArrows: React.FC<IPrCarouselArrowsProps> = ({
  disableNext,
  disablePrev,
  onNext,
  onPrev,
}) => {
  return (
    <>
      <PrCarouselArrow
        direction="prev"
        onClick={onNext}
        disabled={disableNext}
      />
      <PrCarouselArrow
        direction="next"
        onClick={onPrev}
        disabled={disablePrev}
      />
    </>
  )
}

export default PrCarouselArrows
