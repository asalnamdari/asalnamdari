import React from 'react'
import { IPrCarouselArrowProps } from '../PrCarousel.type'
import { ButtonBase } from '@material-ui/core'
import { makePrStyles } from 'theme'
import clsx from 'clsx'
import { ReactComponent as Arrow } from 'assets/svg/Arrow.svg'

const usePrCarouselArrowStyle = makePrStyles(
  () => ({
    root: {
      position: 'absolute',
      top: '50%',
      borderRadius: 50,
    },

    prevArrow: {
      right: 5,
      transform: 'rotate(-90deg) translateX(-50%)',
    },
    nextArrow: {
      right: 'auto',
      left: 5,
      transform: 'rotate(90deg) translateX(50%)',
    },
    disable: {
      '& svg > path': {
        fill: 'rgba(255, 255, 255, 0.5)',
      },
      cursor: 'not-allowed!important',
    },
  }),
  { name: 'PrCarouselArrow' },
)

export const PrCarouselArrow: React.FC<IPrCarouselArrowProps> = ({
  direction,
  disabled,
  onClick,
}) => {
  const classes = usePrCarouselArrowStyle()

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    event.stopPropagation()
    onClick()
  }
  return (
    <ButtonBase
      data-testid="surcarousel-arrows-button-testid"
      {...{
        disabled,
        onClick: handleClick,
        className: clsx(classes.root, {
          [classes.disable]: disabled,
          [classes.prevArrow]: direction === 'prev',
          [classes.nextArrow]: direction === 'next',
        }),
      }}
    >
      <Arrow />
    </ButtonBase>
  )
}
