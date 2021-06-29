import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
// import { ReactComponent as Icon25 } from 'assets/svg/25Icon.svg'
// import Icon25 from 'assets/svg/25Icon.svg'
import { ReactComponent as PardisLeftIcon } from 'assets/svg/PardisLeftIcon.svg'
import { ReactComponent as PardisRightIcon } from 'assets/svg/PardisRightIcon.svg'
import React, { useEffect, useState, VFC } from 'react'
import { useIntl } from 'react-intl'
import { animated, useSpring } from 'react-spring'
import AbilityBox from './AbilityBox'
import MobileSliderBoxes from './MobileSliderBoxes'
import messages from './SecondSlider.messages'
import TXT2Component from './TXT2Component'
import useSecondSliderStyles from './useSecondSliderStyles'

const SecondSlider: VFC<{
  currentState: any
  moveSectionDown?: () => void
}> = ({ moveSectionDown, currentState }) => {
  const { formatMessage } = useIntl()
  const [state, setState] = useState<number>(0)
  const [pause, setPause] = useState<boolean>(false)
  const [pardisState, setPardisState] = useState<boolean>(false)
  const {
    breakpoints: { values },
  } = useTheme()
  const isDown400 = useMediaQuery(`@media (max-width: 400px)`)
  const isDownSm = useMediaQuery(`@media (max-width: ${values.sm}px)`)
  const isDownMd = useMediaQuery(`@media (max-width: ${values.md}px)`)

  useEffect(() => {
    if (currentState !== 1) {
      return setState(0)
    }
    const timer = setInterval(() => {
      if (!pause) {
        if (state < (isDownSm ? 6 : 4)) {
          setState((prev) => prev + 1)
        } else {
          moveSectionDown?.()
        }
      }
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [state, moveSectionDown, currentState, pause, isDownSm])

  const classes = useSecondSliderStyles({ state })
  // const isDownMd = useMediaQuery(`@media (max-width: ${values.md}px)`)
  const mobileAbilityTitleSelector = [
    {
      title: formatMessage(messages.knowledgeBoxTitle),
      text: formatMessage(messages.knowledgeBoxText),
    },
    {
      title: formatMessage(messages.abilityTitle),
      text: formatMessage(messages.abilityText),
    },
    {
      title: formatMessage(messages.valueTitle),
      text: formatMessage(messages.valueText),
    },
  ]
  const IconWidth =
    state === 1
      ? 380.4 - (isDownSm ? 80 : 0)
      : state === 3
      ? isDownSm
        ? 180
        : 380.4
      : 420 - (isDownSm ? 300 : 0)
  const IconHeight =
    state === 1
      ? 318.12 - (isDownSm ? 100 : 0)
      : state === 3
      ? isDownSm
        ? 120.354
        : 318.12
      : 360.354 - (isDownSm ? 300 : 0)
  const AnimatedProps = useSpring({
    config: { duration: 1000 },
    width: IconWidth,
    height: IconHeight,
    opacity: state === 0 ? 0 : 1,
    display: state === 1 || state === 2 || state === 3 ? 'block' : 'none',
  })
  const pardisAnimatedProps = useSpring({
    config: { duration: 500, mass: 5, tension: 500, friction: 80 },
    height: pardisState ? (isDown400 ? 231 : 281) : 0,
    opacity: pardisState ? 1 : 0,
    overflow: 'hidden',
  })

  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        onClick={() => {
          if (state < (isDownSm ? 6 : 4)) {
            return setState(state + 1)
          }
          return setState(0)
        }}
      >
        <div className={classes.sunContainer}>
          <animated.div style={AnimatedProps} className={classes.sun}>
            {!isDownMd && (
              <TXT2Component state={state}>
                {formatMessage(messages.txt2)}
              </TXT2Component>
            )}
          </animated.div>
          {isDownMd && (
            <TXT2Component state={state}>
              {formatMessage(messages.txt2)}
            </TXT2Component>
          )}
        </div>
        <div className={classes.textContainer}>
          {!isDownSm ? (
            <>
              <Typography classes={{ root: classes.txt }}>
                {formatMessage(messages.txt1)}
              </Typography>
              {state === 4 && (
                <div className={classes.sliderBoxesContainer}>
                  <AbilityBox
                    title={formatMessage(messages.knowledgeBoxTitle)}
                    text={formatMessage(messages.knowledgeBoxText)}
                  />
                  <AbilityBox
                    title={formatMessage(messages.abilityTitle)}
                    text={formatMessage(messages.abilityText)}
                  />
                  <AbilityBox
                    title={formatMessage(messages.valueTitle)}
                    text={formatMessage(messages.valueText)}
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {state >= 4 ? (
                <MobileSliderBoxes
                  {...{ classes, mobileAbilityTitleSelector, state }}
                />
              ) : (
                <Typography classes={{ root: classes.txt }}>
                  {formatMessage(messages.txt1)}
                </Typography>
              )}
            </>
          )}
        </div>
      </div>
      {state === 3 && (
        <div
          onMouseOver={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          className={classes.pardisSection}
          onClick={() => setPardisState((prev) => !prev)}
        >
          {pardisState && (
            <animated.div style={pardisAnimatedProps}>
              <Typography variant="subtitle2">
                {formatMessage(messages.pardisText)}
              </Typography>
            </animated.div>
          )}
          <Typography
            variant="h6"
            classes={{ root: classes.pardisSectionText }}
          >
            {formatMessage(messages.pardisTitle)}
          </Typography>
          <div className={classes.pardisIcons}>
            <PardisRightIcon />
            <PardisLeftIcon />
          </div>
        </div>
      )}
    </div>
  )
}
export default SecondSlider
