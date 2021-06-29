import { Typography } from '@material-ui/core'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import messages from './Honorary.messages'
import useHonoraryStyle from './useHonoraryStyle'
// import { ReactComponent as RahbananEftekhari } from 'assets/svg/RahbananEftekhari.svg'

const Honorary: FC = () => {
  const classes = useHonoraryStyle()
  const { formatMessage } = useIntl()

  return (
    <div className={classes.root}>
      <Typography color="textPrimary" variant="h1" className={classes.title}>
        {formatMessage(messages.felicitationTitle)}
      </Typography>
      <Typography
        className={classes.contentText}
        variant="subtitle1"
        dangerouslySetInnerHTML={{
          __html: formatMessage(messages.felicitationContent),
        }}
      />
      {/* <RahbananEftekhari className={classes.icon} /> */}
    </div>
  )
}

export default Honorary
