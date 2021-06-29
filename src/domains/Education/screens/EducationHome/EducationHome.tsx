import { Button } from '@material-ui/core'
import PrPodcast from 'components/PrPodcast'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import messages from './EducationHome.messages'
import useEducationHomeStyle from './useEducationHomeStyle'

const EducationHome: FC = () => {
  const classes = useEducationHomeStyle()
  const { formatMessage } = useIntl()
  // const { push, go } = useHistory()
  // const { path } = useRouteMatch()

  return (
    <div className={classes.root}>
      <PrPodcast
        title={formatMessage(messages.podcastTitle)}
        src={`${process.env.REACT_APP_ROOT_ASSETS}/YmeQY074oL/MA32A3YX5D/origin_RtJsAz5PMEgoARni9tD2lmMj8jFH2K5tkkOfX1Py.mp4`}
      />
      <Button
        type="submit"
        className={classes.submitBtn}
        onClick={() =>
          // push(`${path}/result/55313fba-54c5-483d-968f-ec9ea503f47a`)
          window.location.replace(
            `${process.env.REACT_APP_ROOT_EXAM}?id=1&flowId=education`,
          )
        }
        size="large"
      >
        {formatMessage(messages.subminText)}
      </Button>
    </div>
  )
}

export default EducationHome
