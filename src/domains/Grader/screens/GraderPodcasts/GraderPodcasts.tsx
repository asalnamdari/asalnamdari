import { Button, Typography } from '@material-ui/core'
import PrPodcastPlayer from 'components/PrPodcastPlayer'
import { useLocalStorage } from 'core'
import useGetPodcast from 'domains/Grader/services/hooks/useGetPodcast'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import { Podcast, ServerRootType } from 'types/serverTypes'
import messages from './GraderPodcasts.messages'
// import { podcasts } from './mokeData'
import useGraderPodcastsStyle from './useGraderPodcastsStyle'

const GraderPodcasts: FC = () => {
  const classes = useGraderPodcastsStyle()
  const { formatMessage } = useIntl()
  const { push } = useHistory()
  const [userId] = useLocalStorage('@ParseUserId', 'userId')
  const { data, isLoading } = useGetPodcast<ServerRootType<Podcast[]>>()
  console.log({ userId })
  return (
    <div className={classes.root}>
      {!isLoading && <PrPodcastPlayer data={data?.data ?? []} />}
      <div className={classes.content}>
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
          onClick={() => push('avids')}
          size="large"
        >
          {formatMessage(messages.subminText)}
        </Button>
      </div>
    </div>
  )
}

export default GraderPodcasts
