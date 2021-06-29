import { FC } from 'react'
import GraderAvidsRoutes from './GraderAvidsRoutes'
import useGraderAvidsStyle from './useGraderAvidsStyle'

const GraderAvids: FC = () => {
  const classes = useGraderAvidsStyle()
  return (
    <div className={classes.root}>
      <GraderAvidsRoutes />
    </div>
  )
}

export default GraderAvids
