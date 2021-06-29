import { Button, Typography } from '@material-ui/core'
import { ReactComponent as ButtonsIcon } from 'assets/svg/PardisRightIcon.svg'
import { ReactComponent as BackIcon } from 'assets/svg/BackIcon.svg'
import clsx from 'clsx'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import messages from './GraderAvidsEfficiency.messages'
import useGraderAvidsEfficiencyStyle from './useGraderAvidsEfficiencyStyle'
import usePostComment from 'domains/Grader/services/hooks/usePostComment'
import { useLocalStorage } from 'core'

const GraderAvidsEfficiency: FC = () => {
  const classes = useGraderAvidsEfficiencyStyle()
  const { formatMessage } = useIntl()
  const { goBack, push } = useHistory()
  const [userId] = useLocalStorage('@ParseUserId', 'userId')
  const { mutate, isLoading, isSuccess } = usePostComment({
    name: 'postCultivationSubmit',
    userId: userId as string,
    insurabceId: 2,
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
              {formatMessage(messages.headerText)}
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
                onClick={() => push('quest/2')}
              >
                {formatMessage(messages.questText)}
              </Button>
              <Button
                className={classes.btns}
                disabled={isLoading}
                onClick={() => mutate({})}
                size="large"
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

export default GraderAvidsEfficiency
