// import { Player } from '@lottiefiles/react-lottie-player'
import { Button, Divider, InputBase, Typography } from '@material-ui/core'
// import { useLocalStorage } from 'core'
import usePostCommentWithMobile from 'domains/Student/services/hooks/usePostCommentWithMobile'
import { ChangeEvent, FC, useCallback, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import messages from './StudentNoGrade.messages'
import useStudentNoGradeStyle from './useStudentNoGradeStyle'

const StudentNoGrade: FC = () => {
  const classes = useStudentNoGradeStyle()
  const { formatMessage } = useIntl()
  // const lottieRef = useRef(null)
  // const { push } = useHistory()
  const [value, onChange] = useState('')
  const [phone, onPhoneChange] = useState('')
  const { mutate, isLoading, isSuccess } = usePostCommentWithMobile({
    name: 'postStudentComment',
    mobile: phone,
    flowId: 2,
  })
  const phoneNumberRegex = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/g
  const isPhoneValidate = useMemo(
    () => phone.length === 11 && phoneNumberRegex.test(phone),
    [phone],
  )

  const onInputChange = useCallback((e) => {
    if (e.target.value.length <= 11) {
      return onPhoneChange(e.target.value)
    }
    return
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <div className={classes.header}>
          <Typography variant="h5" style={{ fontWeight: 600 }}>
            {isSuccess ? ' ' : formatMessage(messages.inputTitle)}
          </Typography>
        </div>
        <div className={classes.main}>
          {isSuccess ? (
            <Typography variant="h3" style={{ lineHeight: 3 }}>
              {formatMessage(messages.successRequestText)}
            </Typography>
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
              <div className={classes.footer}>
                <InputBase
                  value={phone}
                  onChange={onInputChange}
                  className={classes.input}
                  placeholder="شماره تلفن همراه"
                  inputProps={{ inputMode: 'tel' }}
                  // endAdornment={
                  //   <InputAdornment
                  //     position="start"
                  //     classes={{ positionStart: classes.adornment }}
                  //   >
                  //     {phoneNumberRegex.test(phone) && (
                  //       <Player
                  //         ref={lottieRef}
                  //         autoplay={true}
                  //         loop
                  //         src={animationData}
                  //       />
                  //     )}
                  //   </InputAdornment>
                  // }
                />
                <Button
                  className={classes.submitMsg}
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    // if (isPhoneValidate) {
                    mutate({})
                    // }
                  }}
                  disabled={isLoading || value.length < 20 || !isPhoneValidate}
                >
                  {formatMessage(messages.submitMsg)}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <Divider className={classes.devider} />
      <div className={classes.content}>
        <Typography variant="h1">
          {formatMessage(messages.pageTitle)}
        </Typography>
        <Typography variant="subtitle1">
          {formatMessage(messages.pageContent)}
        </Typography>
        <Button
          className={classes.submitBtn}
          onClick={() =>
            // push('/student/exam')
            window.location.replace(
              `${process.env.REACT_APP_ROOT_EXAM}?id=1&flowId=student`,
            )
          }
          size="large"
        >
          {formatMessage(messages.submitBtn)}
        </Button>
      </div>
    </div>
  )
}

export default StudentNoGrade
