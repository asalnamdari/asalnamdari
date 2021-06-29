import { Typography } from '@material-ui/core'
import PrPodcastPlayer from 'components/PrPodcastPlayer'
import { useLocalStorage } from 'core'
import useGetPodcast from 'domains/Grader/services/hooks/useGetPodcast'
import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Podcast, ServerRootType } from 'types/serverTypes'
import messages from './RadioPardis.messages'
import useRadioPardisStyle from './useRadioPardisStyle'

const RadioPardis: FC = () => {
  const classes = useRadioPardisStyle()
  const { formatMessage } = useIntl()
  const [userId] = useLocalStorage('@ParseUserId', 'userId')
  const { data, isLoading } = useGetPodcast<ServerRootType<Podcast[]>>()
  console.log({ userId })
  return (
    <div className={classes.root}>
      {!isLoading && (
        <PrPodcastPlayer
          data={data?.data ?? []}
          classes={{ content: classes.podcastContent }}
        />
      )}
      <div className={classes.content}>
        <Typography
          className={classes.contentText}
          variant="h2"
          dangerouslySetInnerHTML={{
            __html: formatMessage(messages.text),
          }}
        />
      </div>
    </div>
  )
}

export default RadioPardis
