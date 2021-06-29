import { Button, Typography } from '@material-ui/core'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useHistory, useRouteMatch } from 'react-router-dom'
import messages from './GraderAvidsHome.messages'
import useGraderAvidsHomeStyle from './useGraderAvidsStyle'
import { ReactComponent as ButtonsIcon } from 'assets/svg/PardisRightIcon.svg'

const GraderAvidsHome: FC = () => {
  const classes = useGraderAvidsHomeStyle()
  const { formatMessage } = useIntl()
  const { push } = useHistory()
  const { path } = useRouteMatch()

  return (
    <div className={classes.root}>
      <Typography
        color="textPrimary"
        variant="h3"
        className={classes.title}
        dangerouslySetInnerHTML={{
          __html: formatMessage(messages.title),
        }}
      />
      <Typography
        className={classes.contentText}
        variant="h1"
        dangerouslySetInnerHTML={{
          __html: formatMessage(messages.content),
        }}
      />
      <div className={classes.buttonsContainer}>
        <Button
          className={classes.submitBtn}
          onClick={() => push(`${path}/cultivation`)}
          size="medium"
        >
          <ButtonsIcon width={30} />
          {formatMessage(messages.cultivation)}
        </Button>
        <Button
          className={classes.submitBtn}
          onClick={() => push(`${path}/efficiency`)}
          size="medium"
        >
          <ButtonsIcon width={30} />
          {formatMessage(messages.efficiency)}
        </Button>
        <Button
          className={classes.submitBtn}
          onClick={() => push(`${path}/entrepreneurship`)}
          size="medium"
        >
          <ButtonsIcon width={30} />
          {formatMessage(messages.entrepreneurship)}
        </Button>
      </div>
    </div>
  )
}

export default GraderAvidsHome
