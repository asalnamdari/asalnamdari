import { makePrStyles } from 'theme'

const usePrCarouselStyle = makePrStyles(
  () => ({
    root: {
      display: 'block',
      height: 'inherit',
      position: 'relative',
      direction: 'rtl',
    },

    container: {
      position: 'relative',
      height: 'inherit',
    },

    slider: {
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      position: 'relative',
      height: 'inherit',
      userSelect: 'none',
      WebkitTouchCallout: 'none',
      touchAction: 'pan-y',
      WebkitTapHighlightColor: 'transparent',

      '&[data-keen-slider-v]': {
        flexWrap: 'wrap',
        '& $sliderItem': {
          width: '100%',
        },
      },

      '&[data-keen-slider-moves] *': { pointerEvents: 'none' },
    },

    sliderItem: {
      position: 'relative',
      overflow: 'hidden',
    },
    dotsContainer: {},
  }),
  { name: 'PrCarousel' },
)

export default usePrCarouselStyle
