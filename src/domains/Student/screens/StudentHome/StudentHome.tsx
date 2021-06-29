import { Typography } from '@material-ui/core'
import PrPodcast from 'components/PrPodcast'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { Link, useRouteMatch } from 'react-router-dom'
import messages from './StudentHome.messages'
import useStudentHomeStyle from './useStudentHomeStyle'

const StudentHome: FC = () => {
  const classes = useStudentHomeStyle()
  const { formatMessage } = useIntl()
  const { path } = useRouteMatch()
  return (
    <div className={classes.root}>
      <PrPodcast
        title={formatMessage(messages.podcastTitle)}
        src={`${process.env.REACT_APP_ROOT_ASSETS}/YmeQY074oL/rK2WPqBxQk/origin_ulj9Ig1Lbv6UIPO16f2z8OnFJbJMUX8ltm2ObPRX.mp4`}
      />
      {/* <Typography color="textPrimary" variant="h2" className={classes.title}>
        {formatMessage(messages.pageTitle)}
      </Typography> */}
      <div className={classes.questsContainer}>
        <Link to={`${path}/avids/grad1`} className={classes.quests}>
          <div className={classes.linksBox}>
            <Typography className={classes.linksText}>
              {formatMessage(messages.grade1)}
            </Typography>
          </div>
        </Link>
        <Link to={`${path}/avids/grad2`} className={classes.quests}>
          <div className={classes.linksBox}>
            <Typography className={classes.linksText}>
              {formatMessage(messages.grade2)}
            </Typography>
          </div>
        </Link>
        <Link to={`${path}/avids/grad3`} className={classes.quests}>
          <div className={classes.linksBox}>
            <Typography className={classes.linksText}>
              {formatMessage(messages.grade3)}
            </Typography>
          </div>
        </Link>
        <Link to={`${path}/avids`} className={classes.quests}>
          <div className={classes.linksBox}>
            <Typography className={classes.linksText}>
              {formatMessage(messages.noGrade)}
            </Typography>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default StudentHome
