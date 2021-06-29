import { Button, Typography } from '@material-ui/core'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import messages from './StudentExam.messages'
import useStudentExamStyle from './useStudentExamStyle'

const StudentExam: FC = () => {
  const classes = useStudentExamStyle()
  const { formatMessage } = useIntl()
  // const { push } = useHistory()

  return (
    <div className={classes.root}>
      <Typography
        color="textPrimary"
        variant="h1"
        className={classes.title}
        dangerouslySetInnerHTML={{
          __html: formatMessage(messages.felicitationTitle),
        }}
      />
      <Typography
        className={classes.contentText}
        variant="h2"
        dangerouslySetInnerHTML={{
          __html: formatMessage(messages.felicitationContent),
        }}
      />
      <Button
        className={classes.submitBtn}
        onClick={() =>
          window.location.replace(
            `${process.env.REACT_APP_ROOT_EXAM}?id=1&flowId=student`,
          )
        }
        size="large"
      >
        {formatMessage(messages.subminText)}
      </Button>
    </div>
  )
}

export default StudentExam
