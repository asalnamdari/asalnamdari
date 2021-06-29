import { Button, Typography } from '@material-ui/core'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import messages from './GraderExam.messages'
import useGraderExamStyle from './useGraderExamStyle'

const GraderExam: FC = () => {
  const classes = useGraderExamStyle()
  const { formatMessage } = useIntl()
  // const { push } = useHistory()

  return (
    <div className={classes.root}>
      <Typography color="textPrimary" variant="h1">
        {formatMessage(messages.felicitationTitle)}
      </Typography>
      <Typography
        className={classes.contentText}
        variant="subtitle1"
        dangerouslySetInnerHTML={{
          __html: formatMessage(messages.felicitationContent),
        }}
      />
      <Button
        className={classes.submitBtn}
        onClick={() =>
          // push(`result/55313fba-54c5-483d-968f-ec9ea503f47a`)
          window.location.replace(
            `${process.env.REACT_APP_ROOT_EXAM}?id=1&flowId=grader`,
          )
        }
        size="large"
      >
        {formatMessage(messages.subminText)}
      </Button>
    </div>
  )
}

export default GraderExam
