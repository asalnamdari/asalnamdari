import NotFound from 'domains/App/components'
import React, { FC } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { EducationHome, EducationResault } from './screens'
import EducationDegrees from './screens/EducationDegrees'

const EducationRoutes: FC = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <EducationHome />
      </Route>
      <Route exact path={`${path}/result/:userId`}>
        <EducationResault />
      </Route>
      <Route exact path={`${path}/degrees`}>
        <EducationDegrees />
      </Route>
      <Route render={(props) => <NotFound {...props} />} />
    </Switch>
  )
}
export default EducationRoutes
