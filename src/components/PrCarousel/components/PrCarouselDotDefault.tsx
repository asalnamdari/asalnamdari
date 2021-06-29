import React, { FC } from 'react'
import { ButtonBase } from '@material-ui/core'
import { IPrCarouselDotProps } from '../PrCarousel.type'
import { makePrStyles } from 'theme'
import clsx from 'clsx'

const usePrCarouselDotDefaultStyle = makePrStyles(
  ({ spacing }) => ({
    root: {
      border: 'none',
      width: '10px',
      height: '10px',
      background: '#c5c5c5',
      borderRadius: '50%',
      margin: spacing(0, 1),
      padding: spacing(1),
      cursor: 'pointer',
    },

    active: {
      backgroundColor: '#000',
    },
  }),
  { name: 'PrCarouselDotDefault' },
)

const PrCarouselDotDefault: FC<IPrCarouselDotProps> = ({ active, onClick }) => {
  const classes = usePrCarouselDotDefaultStyle()
  return (
    <ButtonBase
      onClick={onClick}
      className={clsx(classes.root, { [classes.active]: active })}
    />
  )
}

export default PrCarouselDotDefault
