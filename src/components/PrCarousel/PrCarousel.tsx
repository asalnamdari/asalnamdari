import React, { FC, useEffect, useState, useMemo } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import usePrCarouselStyle from './usePrCarouselStyle'
import { IPrCarouselProps } from './PrCarousel.type'

import PrCarouselDots from './components/PrCarouselDots'
import PrCarouselArrows from './components/PrCarouselArrows'
import { range } from 'ramda'

const PrCarousel: FC<IPrCarouselProps> = ({
  classes,
  loop,
  initial,
  showArrows,
  showDots,
  autoplay,
  autoplayInterval,
  dotComponent,
  children,
  testId,
  ...rest
}) => {
  const innerClasses = usePrCarouselStyle({ classes })

  const overridedChildrens = useMemo(() => {
    return React.Children.map(children, (child) =>
      React.cloneElement(
        <div />,
        { className: innerClasses.sliderItem },
        child,
      ),
    )
  }, [children, innerClasses.sliderItem])

  const [pause, setPause] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(initial!)

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    ...rest,
    loop,
    initial,
    rtl: true,
    slides: `.${innerClasses.sliderItem}`,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  useEffect(() => {
    if (!(autoplay && sliderRef.current)) {
      return undefined
    }
    const onMouseOver = () => {
      setPause(true)
    }
    const onMouseOut = () => {
      setPause(false)
    }
    sliderRef.current.addEventListener('mouseover', onMouseOver)
    sliderRef.current.addEventListener('mouseout', onMouseOut)
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('mouseover', onMouseOver)
        sliderRef.current.removeEventListener('mouseout', onMouseOut)
      }
    }
  }, [autoplay])

  useEffect(() => {
    if (!autoplay) {
      return undefined
    }
    const timer = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, autoplayInterval)

    return () => {
      clearInterval(timer)
    }
  }, [pause, slider, autoplay, autoplayInterval])

  return (
    <div className={innerClasses.root}>
      <div className={innerClasses.container}>
        <div
          ref={sliderRef}
          className={innerClasses.slider}
          data-testid={testId}
        >
          {overridedChildrens}
        </div>

        {showArrows && (
          <PrCarouselArrows
            {...{
              disableNext: !loop && currentSlide === slider?.details().size - 1,
              disablePrev: !loop && currentSlide === 0,
              onNext: slider?.next,
              onPrev: slider?.prev,
            }}
          />
        )}
        {showDots && (
          <PrCarouselDots
            {...{
              classes: { root: classes?.dotsContainer },
              slidesIndexed: range(0, +slider?.details().size),
              onChange: (idx) => slider.moveToSlideRelative(idx),
              currentSlide,
              dotComponent,
            }}
          />
        )}
      </div>
    </div>
  )
}

PrCarousel.defaultProps = {
  loop: false,
  initial: 0,
  autoplayInterval: 2000,
  showArrows: false,
  showDots: false,
}

PrCarousel.displayName = 'PrCarousel'

export default PrCarousel
