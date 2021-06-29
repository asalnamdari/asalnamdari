import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import { ReactComponent as Play } from 'assets/svg/PlayIcon.svg'
import PrBarChart from 'components/PrBarChart'
import { useLocalStorage } from 'core'
import usePrQuery from 'core/hooks/usePrQuery'
import { FC, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { useHistory, useParams } from 'react-router-dom'
import { IUserInfoResult } from 'types/serverTypes'
import arraySorter from 'utils/array'
import messages from './GraderResult.messages'
import useGraderResultStyle from './useGraderResultStyle'

const GraderResult: FC = () => {
  const classes = useGraderResultStyle()
  const { formatMessage } = useIntl()
  const { push } = useHistory()
  const { userId } = useParams<{ userId?: string }>()
  const [, setUserIdToStorage] = useLocalStorage('@ParseUserId', 'userId')
  useEffect(() => {
    setUserIdToStorage(userId)
  }, [userId])

  const { data } = usePrQuery<IUserInfoResult>({
    name: 'GetChartData',
    url: `/GetChartData/?userId=${userId}`,
  })
  const sortData =
    data?.examResult && arraySorter(data?.examResult, 'percent').reverse()
  const labels = sortData?.map((item) => item.title)
  const userResult = sortData?.map((item) => item.percent)

  return (
    <div className={classes.root}>
      <div className={classes.chart}>
        <div className={classes.chartContainer}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <TableCell component="th" align="center">
                    زمینه شغلی
                  </TableCell>
                  <TableCell component="th" align="center">
                    درصد علاقه مندی
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortData?.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell scope="row">{row.title}</TableCell>
                    <TableCell align="center">{row.percent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <PrBarChart
            labels={labels}
            className={classes.chartRoot}
            datasets={[
              {
                label: 'درصد علاقه مندی',
                data: userResult,
                fill: false,
                backgroundColor: '#486986',
                barPercentage: 1,
              },
            ]}
          />
        </div>
        <div className={classes.chartTitle}>
          <Typography variant="body2" color="textPrimary">
            {formatMessage(messages.chart)}
          </Typography>
        </div>
      </div>
      <Typography className={classes.contentText} variant="subtitle1">
        {formatMessage(messages.podcastTitle)}
      </Typography>
      <Button
        className={classes.submitBtn}
        onClick={() => push('/grader/podcasts')}
        size="large"
      >
        {formatMessage(messages.submitText)}
        <Play width={14} height={14} />
      </Button>
    </div>
  )
}

export default GraderResult
