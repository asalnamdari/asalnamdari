import { Button } from '@material-ui/core'
import clsx from 'clsx'
import { FC } from 'react'
import useGraderSkilStyle from './useGraderSkilStyle'

const GraderSkil: FC = ({ children }) => {
  const classes = useGraderSkilStyle()
  return (
    <Button className={clsx(classes.btns, classes.questBtn)} size="large">
      {children}
    </Button>
  )
}

export default GraderSkil
