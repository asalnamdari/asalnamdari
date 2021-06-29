import { Button, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { useField } from 'formik'
// import 'moment/locale/fa'
import moment from 'moment-jalaali'
import useStudentTimeSelectStyle from './useStudentTimeSelectStyle'

const StudentTimeSelect = ({
  name,
  data,
}: {
  name: string
  data?: string[]
}) => {
  const [{ value }, , { setValue }] = useField(name)
  const classes = useStudentTimeSelectStyle()
  return (
    <div className={classes.root}>
      {data?.map((item) => {
        const isActive = item === value
        const week = moment(item, 'jYYYY/jM/jD').format('dddd')
        return (
          <Button
            key={item}
            className={clsx(classes.itemContainer, isActive && classes.active)}
            onClick={() => setValue(item)}
          >
            <Typography className={classes.item}>{week}</Typography>
          </Button>
        )
      })}
    </div>
  )
}

export default StudentTimeSelect
