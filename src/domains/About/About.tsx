import { Typography } from '@material-ui/core'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import messages from './About.messages'
import useAboutStyle from './useAboutStyle'
import { ReactComponent as CallIcon } from 'assets/svg/call.svg'
import { ReactComponent as EmailIcon } from 'assets/svg/email.svg'
import { ReactComponent as InstagramIcon } from 'assets/svg/instagram.svg'
import { ReactComponent as AboutIcon } from 'assets/svg/About-Icon.svg'

const About: FC = () => {
  const classes = useAboutStyle()
  const { formatMessage } = useIntl()

  return (
    <div className={classes.root}>
      {/* <Typography color="textPrimary" variant="h1" className={classes.title}>
        {formatMessage(messages.title)}
      </Typography> */}
      <Typography
        className={classes.contentText}
        variant="body1"
        dangerouslySetInnerHTML={{
          __html: formatMessage(messages.content),
        }}
      />
      <div className={classes.footer}>
        <div className={classes.divider} />
        <div className={classes.footerContentWrapper}>
          <div className={classes.contactUs}>
            <div>
              parseh.ac.ir
              <InstagramIcon />
            </div>
            <div>
              info@Parseh.ac.ir
              <EmailIcon />
            </div>
            <div>
              84388 - 021
              <CallIcon />
            </div>
          </div>
          <AboutIcon className={classes.copyRight} />
        </div>
      </div>
    </div>
  )
}

export default About
