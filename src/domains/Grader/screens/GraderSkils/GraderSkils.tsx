import { Button, Typography } from '@material-ui/core'
import { useGetExamTags } from 'domains/Grader/services'
import queryString from 'query-string'
import { find, map, pipe, values } from 'ramda'
import { FC, useRef } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import GraderSkill from './GraderSkil/GraderSkil'
import messages from './GraderSkils.messages'
import useGraderSkilsStyle from './useGraderSkilsStyle'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from 'assets/animations/loading.json'

const GraderSkils: FC = () => {
  const classes = useGraderSkilsStyle()
  const { formatMessage } = useIntl()
  const {
    push,
    location: { search },
  } = useHistory()
  const params:
    | {
        category1Id?: number
        category2Id?: number
        category3Id?: number
      }
    | undefined = queryString.parse(search, { parseNumbers: true })
  const vals = values(params)
  const { data, isLoading } = useGetExamTags()

  type IDataType = {
    description: string
    descriptionArray: string[]
    examId: number
    id: number
    text: string
  }

  const skillsValue: IDataType[] =
    data &&
    map(
      pipe((item: number) =>
        find((itm: IDataType) => itm.id === item)(data?.data),
      ),
    )(vals as number[])

  const lottieRef = useRef(null)

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
      <div className={classes.skillsContainer}>
        {isLoading && (
          <Player
            ref={lottieRef}
            autoplay={true}
            style={{ width: 150 }}
            loop
            src={animationData}
          />
        )}
        {skillsValue?.map(
          (titles, index: number) =>
            titles && (
              <div key={index} className={classes.skils}>
                <Typography variant="body1" className={classes.skillNumber}>
                  {index + 1}
                </Typography>
                <Typography variant="h5" className={classes.skillTitle}>
                  {titles.text}
                </Typography>
                {titles?.descriptionArray.map((title) => (
                  <GraderSkill key={title}>{title}</GraderSkill>
                ))}
              </div>
            ),
        )}
      </div>
      <Button
        className={classes.submitBtn}
        onClick={() => push('exam')}
        size="large"
      >
        {formatMessage(messages.subminText)}
      </Button>
    </div>
  )
}

export default GraderSkils
