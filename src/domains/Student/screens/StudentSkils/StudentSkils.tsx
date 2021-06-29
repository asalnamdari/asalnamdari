import { Button, Typography } from '@material-ui/core'
import { useLocalStorage } from 'core'
import api from 'core/handler'
import { Formik, FormikConfig } from 'formik'
import moment from 'moment-jalaali'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useMutation } from 'react-query'
import { string as YupString, object as YupObject } from 'yup'
import messages from './StudentSkils.messages'
import StudentTimeSelect from './StudentTimeSelect'
import useStudentSkilsStyle from './useStudentSkilsStyle'

interface IValues {
  userDate?: number
}

function post({ userId, userDate }: { userId: string; userDate: string }) {
  return api.post(`/SetUserInterviewDate?userId=${userId}&userDate=${userDate}`)
}

moment.loadPersian()

const timeList = Array(6)
  .fill({})
  .map((_, i) =>
    moment(new Date()).weekday(7).add(i, 'days').format('jYYYY/jM/jD'),
  )

const StudentSkils: FC = () => {
  const classes = useStudentSkilsStyle()
  const [userId] = useLocalStorage('@ParseUserId', 'userId')
  const { formatMessage } = useIntl()

  const { mutate, isSuccess } = useMutation<
    any,
    any,
    { userId: string; userDate: string },
    any
  >(post)

  const validationSchema = YupObject().shape({
    userDate: YupString().nullable().required(),
  })
  const initialValues: IValues = {
    userDate: undefined,
  }
  const onSubmit: FormikConfig<typeof initialValues>['onSubmit'] = ({
    userDate,
  }) => {
    if (userDate) {
      mutate({
        userId,
        userDate: moment(userDate, 'jYYYY/jM/jD').format('YYYY/MM/DD'),
      })
    }
  }

  return (
    <div className={classes.root}>
      {isSuccess ? (
        <Typography
          className={classes.contentText}
          variant="subtitle1"
          dangerouslySetInnerHTML={{
            __html: formatMessage(messages.submitFormText),
          }}
        />
      ) : (
        <>
          <Typography
            className={classes.contentText}
            variant="subtitle1"
            dangerouslySetInnerHTML={{
              __html: formatMessage(messages.felicitationContent),
            }}
          />
          <Formik {...{ initialValues, validationSchema, onSubmit }}>
            {({ handleSubmit }) => (
              <>
                <StudentTimeSelect data={timeList} name="userDate" />
                <Button
                  className={classes.submitBtn}
                  size="large"
                  onClick={() => handleSubmit()}
                >
                  {formatMessage(messages.subminText)}
                </Button>
              </>
            )}
          </Formik>
        </>
      )}
    </div>
  )
}

export default StudentSkils
