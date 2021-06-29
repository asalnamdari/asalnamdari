import React from 'react'
import { TOptions } from 'keen-slider'

export interface IPrCarouselProps
  extends Omit<TOptions, 'dragSpeed' | 'preventEvent' | 'key'> {
  classes?: Partial<
    Record<
      'root' | 'container' | 'slider' | 'sliderItem' | 'dotsContainer',
      string
    >
  >
  autoplay?: boolean
  autoplayInterval?: number
  showArrows?: boolean
  showDots?: boolean
  testId?: string
  dotComponent?: React.FC<IPrCarouselDotProps>
}

export interface IPrCarouselArrowProps {
  direction: 'next' | 'prev'
  disabled?: boolean
  onClick()
}

export interface IPrCarouselDotsProps {
  classes: Record<'root', string | undefined>
  slidesIndexed: number[]
  currentSlide: number
  dotComponent?: React.FC<IPrCarouselDotProps>
  onChange(id: number)
}

export interface IPrCarouselDotProps {
  active: boolean
  onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)
  idx?: number
}

export interface IPrCarouselArrowsProps {
  disableNext?: boolean
  disablePrev?: boolean
  onNext()
  onPrev()
}
