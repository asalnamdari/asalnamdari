import { Button, Typography } from '@material-ui/core'
import { ReactComponent as BackIcon } from 'assets/svg/BackIcon.svg'
import { useLocalStorage } from 'core'
import usePostInsuranceAsk from 'domains/Grader/services/hooks/usePostInsuranceAsk'
import { ChangeEvent, FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { useHistory, useParams } from 'react-router-dom'
import messages from './GraderAvidsQuest.messages'
import useGraderAvidsQuestStyle from './useGraderAvidsQuestStyle'

const GraderAvidsQuest: FC = () => {
  const classes = useGraderAvidsQuestStyle()
  const { formatMessage } = useIntl()
  const { goBack } = useHistory()
  const { insuranceId } = useParams<{ insuranceId: string }>()
  const [userId] = useLocalStorage('@ParseUserId', 'userId')
  const [value, onChange] = useState('')

  const { mutate, isLoading, isSuccess } = usePostInsuranceAsk({
    name: 'postQuest',
    userId: userId as string,
    message: value,
    insurabceId: +insuranceId ?? 0,
  })
  return (
    <div className={classes.root}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button className={classes.headerBtn} onClick={() => {}} size="large">
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
          {isSuccess ? (
            <Typography
              variant="h3"
              style={{ lineHeight: 2 }}
              dangerouslySetInnerHTML={{
                __html: formatMessage(messages.successRequestText),
              }}
            />
          ) : (
            <>
              <Typography
                value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  onChange(e.target.value)
                }
                component="textarea"
                id="w3review"
                name="w3review"
                rows={4}
                cols={50}
                className={classes.textArea}
              />
              <Button
                className={classes.submitMsg}
                variant="contained"
                color="secondary"
                onClick={() => mutate({})}
                disabled={isLoading || value.length < 20}
              >
                {formatMessage(messages.submitMsg)}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default GraderAvidsQuest
