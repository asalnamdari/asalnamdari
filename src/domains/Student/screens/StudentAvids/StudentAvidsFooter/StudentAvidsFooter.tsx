import { Button } from '@material-ui/core'
import { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { animated, useSpring } from 'react-spring'
import { useMeasure } from 'react-use'
import messages from './StudentAvidsFooter.messages'
import useStudentAvidsFooterStyle from './useStudentAvidsFooterStyle'
import { ReactComponent as Culture } from 'assets/svg/Culture.svg'
import { ReactComponent as Arrow2 } from 'assets/svg/Arrow2.svg'

const StudentAvidsFooter: FC = () => {
  const { formatMessage } = useIntl()
  const [isOpen, setIsOpen] = useState(false)
  const classes = useStudentAvidsFooterStyle({ isOpen })
  const [ref, { height: earnHeight }] = useMeasure()
  const earnAnimatedProps = useSpring({
    config: { duration: 500 },
    height: isOpen ? earnHeight : 0,
    opacity: isOpen ? 1 : 0,
  })
  return (
    <div className={classes.root}>
      <Button
        disableRipple
        disableTouchRipple
        disableFocusRipple
        size="large"
        onClick={() => setIsOpen(!isOpen)}
        className={classes.button}
      >
        <Culture width={30} />
        <span>
          {formatMessage(messages.title)} <Arrow2 />
        </span>
      </Button>
      <animated.div style={earnAnimatedProps}>
        <div
          ref={ref as any}
          className={classes.contentText}
          dangerouslySetInnerHTML={{ __html: formatMessage(messages.content) }}
        />
      </animated.div>
    </div>
  )
}

export default StudentAvidsFooter
