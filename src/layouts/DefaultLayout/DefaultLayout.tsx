import React, { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { DashboardHeader } from './components'
import useDefaultLayoutStyle from './useDefaultLayoutStyle'

const DefaultLayout: FC = ({ children }) => {
  const { path } = useRouteMatch()
  const classes = useDefaultLayoutStyle({ path })

  return (
    <div className={classes.root}>
      <DashboardHeader />
      {children}
    </div>
  )
}

export default DefaultLayout
