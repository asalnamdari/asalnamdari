import { Typography } from '@material-ui/core'
import * as Files from 'assets/degrees'
import PrCarousel from 'components/PrCarousel'
import { useBreakpoint } from 'core'
import { keys } from 'ramda'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import useEducationDegreesStyle from './useEducationDegreesStyle'
import messages from './EducationDegrees.messages'

const slidesPerView = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
}

const EducationDegrees: FC = () => {
  const { width } = useBreakpoint()
  const classes = useEducationDegreesStyle()
  const { formatMessage } = useIntl()
  const fileNames = keys(Files)
  console.log(fileNames)

  return (
    <div className={classes.root}>
      <div className={classes.degreesTitle}>
        <Typography variant="h2" color="textPrimary">
          {formatMessage(messages.title)}
        </Typography>
      </div>
      <div className={classes.degrees}>
        <PrCarousel
          autoplay
          slidesPerView={slidesPerView[width ?? 1]}
          loop
          autoplayInterval={4000}
          showArrows
          spacing={12}
        >
          {fileNames.map((file) => (
            <a
              className={classes.carouselItem}
              href={`${process.env.REACT_APP_ROOT_STATIC_CERTIFICATES}/${file}/mobile/index.html`}
              key={file}
            >
              <img src={Files[file]} alt="Parse" />
            </a>
          ))}
        </PrCarousel>
      </div>
    </div>
  )
}

export default EducationDegrees
