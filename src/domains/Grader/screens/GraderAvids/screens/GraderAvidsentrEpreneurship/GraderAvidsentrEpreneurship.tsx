import { Button, Typography } from '@material-ui/core'
import { ReactComponent as ButtonsIcon } from 'assets/svg/PardisRightIcon.svg'
import { ReactComponent as BackIcon } from 'assets/svg/BackIcon.svg'
import clsx from 'clsx'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import messages from './GraderAvidsentrEpreneurship.messages'
import useGraderAvidsentrEpreneurshipStyle from './useGraderAvidsentrEpreneurshipStyle'
import { useLocalStorage } from 'core'
import usePostComment from 'domains/Grader/services/hooks/usePostComment'

const GraderAvidsentrEpreneurship: FC = () => {
  const classes = useGraderAvidsentrEpreneurshipStyle()
  const { formatMessage } = useIntl()
  const { goBack, push } = useHistory()
  const [userId] = useLocalStorage('@ParseUserId', 'userId')
  const { mutate, isSuccess, isLoading } = usePostComment({
    name: 'postCultivationSubmit',
    userId: userId as string,
    insurabceId: 3,
  })

  return (
    <div className={classes.root}>
      {isSuccess ? (
        <Typography
          variant="h2"
          color="textPrimary"
          style={{ lineHeight: 1.5 }}
        >
          {formatMessage(messages.successRequestText)}
        </Typography>
      ) : (
        <>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button
              className={classes.headerBtn}
              onClick={() => {}}
              size="large"
            >
              <ButtonsIcon width={30} />
              {formatMessage(messages.headerTitle)}
            </Button>
            <Button
              className={classes.backBtn}
              onClick={() => goBack()}
              size="large"
            >
              <BackIcon width={20} />
            </Button>
          </div>
          <div className={classes.box}>
            <div className={classes.main}>
              <div>
                <Typography className={classes.title} variant="h4">
                  {formatMessage(messages.contentItemTitle)}
                </Typography>
                <ul>
                  <li>
                    <Typography className={classes.contentText} variant="h5">
                      {formatMessage(messages.contentItem1)}
                    </Typography>
                  </li>
                  <li>
                    <Typography className={classes.contentText} variant="h5">
                      {formatMessage(messages.contentItem2)}
                    </Typography>
                  </li>
                  <li>
                    <Typography className={classes.contentText} variant="h5">
                      {formatMessage(messages.contentItem3)}
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.footer}>
              <Button
                className={clsx(classes.btns, classes.questBtn)}
                size="large"
                onClick={() => push('quest/3')}
              >
                {formatMessage(messages.questText)}
              </Button>
              <Button
                className={classes.btns}
                size="large"
                disabled={isLoading}
                onClick={() => mutate({})}
              >
                {formatMessage(messages.subminText)}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default GraderAvidsentrEpreneurship
