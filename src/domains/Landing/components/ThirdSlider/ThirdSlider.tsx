import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { ReactComponent as ClockIcon } from 'assets/svg/Clock.svg'
import { ReactComponent as EducationIcon } from 'assets/svg/EducationIcon.svg'
import { ReactComponent as GraderIcon } from 'assets/svg/GraderIcon.svg'
import { ReactComponent as MoneyIcon } from 'assets/svg/Money.svg'
import { ReactComponent as PlayIcon } from 'assets/svg/Play.svg'
import { ReactComponent as StudentIcon } from 'assets/svg/StudentIcon.svg'
import { useFireBaseContext } from 'domains/App/FireBaseProvider'
import React, { useEffect, useState, VFC } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import messages from './ThirdSlider.messages'
import useThirdSliderStyles from './useThirdSliderStyles'

const ThirdSlider: VFC<{
  currentState: any
  moveSectionDown?: () => void
}> = ({ moveSectionDown, currentState }) => {
  const { logEvent } = useFireBaseContext()

  const { formatMessage } = useIntl()
  const [state, setState] = useState(0)
  const {
    breakpoints: { values },
  } = useTheme()
  const isDown400 = useMediaQuery(`@media (max-width: 400px)`)
  const isDownSm = useMediaQuery(`@media (max-width: ${values.sm}px)`)

  useEffect(() => {
    if (currentState !== 2) {
      return setState(0)
    }
    const timer = setInterval(() => {
      if (state < 1) {
        setState((prev) => prev + 1)
      }
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [state, moveSectionDown, currentState])

  const classes = useThirdSliderStyles({ state })
  const QuestsSize = isDown400 ? 100 : isDownSm ? 120 : 185
  const questsAnimatedProps = useSpring({
    config: { duration: 500 },
    width: state === 1 ? QuestsSize : 0,
    height: state === 1 ? QuestsSize : 0,
    opacity: state === 1 ? 1 : 0,
    display: state === 1 ? 'flex' : 'none',
  })

  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        onClick={() => {
          if (state < 1) {
            return setState(state + 1)
          }
        }}
      >
        <div className={classes.textContainer}>
          <Typography classes={{ root: classes.txt }}>
            {formatMessage(messages.txt1)}
          </Typography>
        </div>
        <div className={classes.questsContainer}>
          <Link
            to="/grader"
            className={classes.quests}
            onClick={() => logEvent('Grader')}
          >
            <animated.div
              style={questsAnimatedProps}
              className={classes.linksBox}
            >
              <Typography className={classes.linksText}>
                {formatMessage(messages.grader)}
              </Typography>
            </animated.div>
            <GraderIcon
              width={70}
              height={70}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            />
          </Link>
          <Link
            to="/student"
            className={classes.quests}
            onClick={() => logEvent('Student')}
          >
            <animated.div
              style={questsAnimatedProps}
              className={classes.linksBox}
            >
              <Typography className={classes.linksText}>
                {formatMessage(messages.student)}
              </Typography>
            </animated.div>
            <StudentIcon
              width={70}
              height={70}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            />
          </Link>
          <Link
            to="/education"
            className={classes.quests}
            onClick={() => logEvent('Education')}
          >
            <animated.div
              style={questsAnimatedProps}
              className={classes.linksBox}
            >
              <Typography className={classes.linksText}>
                {formatMessage(messages.education)}
              </Typography>
            </animated.div>
            <EducationIcon
              width={70}
              height={70}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            />
          </Link>
        </div>
      </div>
      {state === 2 && (
        <div className={classes.exampleSection}>
          <div className={classes.exampleSectionPlay}>
            <PlayIcon />
          </div>
          <Typography
            variant="h6"
            classes={{ root: classes.exampleSectionText }}
          >
            {formatMessage(messages.examText)}
          </Typography>
          <div className={classes.exampleSectionCost}>
            <div>
              <ClockIcon />
              <Typography>{formatMessage(messages.examTime)}</Typography>
            </div>
            <div>
              <MoneyIcon />
              <Typography>{formatMessage(messages.examCost)}</Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default ThirdSlider
