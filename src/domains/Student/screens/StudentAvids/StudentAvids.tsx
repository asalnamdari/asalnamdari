import { Button, Typography } from '@material-ui/core'
import { ReactComponent as EarnArrow } from 'assets/svg/earnArrow.svg'
import { useFireBaseContext } from 'domains/App/FireBaseProvider'
import { path } from 'ramda'
import React, { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import { useMeasure } from 'react-use'
import messages from './StudentAvids.messages'
import StudentAvidsListContent from './StudentAvidsEarnContent'
import StudentAvidsFooter from './StudentAvidsFooter'
import useStudentAvidsStyle from './useStudentAvidsStyle'

const StudentAvids: FC = () => {
  const { formatMessage } = useIntl()
  const [isEarnOpen, setIsEarnOpen] = useState(false)
  const classes = useStudentAvidsStyle({ isEarnOpen })
  const [parseRef, { height: parseHeight }] = useMeasure()
  const [earnRef, { height: earnHeight }] = useMeasure()
  const { params } = useRouteMatch<{ type: string }>()
  const { push } = useHistory()
  const { logEvent } = useFireBaseContext()

  const parseAnimatedProps = useSpring({
    config: { duration: 500 },
    height: !isEarnOpen ? parseHeight : 0,
    opacity: !isEarnOpen ? 1 : 0,
  })
  const earnAnimatedProps = useSpring({
    config: { duration: 500 },
    height: isEarnOpen ? earnHeight : 0,
    opacity: isEarnOpen ? 1 : 0,
  })

  const contentSelector = (st: string) => {
    const msg = path([`${params.type}${st}`], messages) as any
    return formatMessage?.(msg)
  }

  const earnData = [
    [contentSelector('Earn1Title'), contentSelector('Earn1Content')],
    [contentSelector('Earn2Title'), contentSelector('Earn2Content')],
    [contentSelector('Earn3Title'), contentSelector('Earn3Content')],
    [contentSelector('Earn4Title'), contentSelector('Earn4Content')],
    [contentSelector('Earn5Title'), contentSelector('Earn5Content')],
    [contentSelector('Earn6Title'), contentSelector('Earn6Content')],
    [contentSelector('Earn7Title'), contentSelector('Earn7Content')],
    [contentSelector('Earn8Title'), contentSelector('Earn8Content')],
  ]

  const contentData = [
    [contentSelector('contentItem1')],
    [contentSelector('contentItem2')],
    [contentSelector('contentItem3')],
  ]
  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
        color="textPrimary"
        className={classes.headerBtn}
      >
        {contentSelector('title')}
      </Typography>

      <div className={classes.box}>
        <div className={classes.main}>
          <div className={classes.mainContainer}>
            <animated.div
              style={parseAnimatedProps}
              className={classes.content}
            >
              <div ref={parseRef as any}>
                <Typography className={classes.title} variant="h4">
                  {formatMessage(messages.grad1contentTitle)}
                </Typography>
                <StudentAvidsListContent data={contentData} />
              </div>
            </animated.div>
            <Button
              size="large"
              className={classes.earnBtn}
              onClick={() => {
                setIsEarnOpen(!isEarnOpen)
                logEvent('EarnEvent')
              }}
            >
              {formatMessage(messages.grad1contentEarnTitle)}
              <EarnArrow
                width={15}
                height={20}
                style={{
                  margin: '0 6px',
                  transition: '0.5s all',
                  transform: `rotate(${isEarnOpen ? 180 : 0}deg)`,
                }}
              />
            </Button>
            <animated.div style={earnAnimatedProps} className={classes.content}>
              <div ref={earnRef as any}>
                <StudentAvidsListContent
                  data={earnData}
                  classes={{ contentText: classes.earnContentText }}
                />
              </div>
            </animated.div>
          </div>
        </div>
        <div className={classes.footer}>
          <Button
            className={classes.btns}
            size="large"
            onClick={() => push('/student/exam')}
          >
            {formatMessage(messages.grad1submitBtn)}
          </Button>
        </div>
      </div>
      <StudentAvidsFooter />
    </div>
  )
}

export default StudentAvids
