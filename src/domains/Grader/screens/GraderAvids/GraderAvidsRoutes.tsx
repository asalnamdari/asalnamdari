import NotFound from 'domains/App/components'
import React, { FC } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import {
  GraderAvidsCultivation,
  GraderAvidsHome,
  GraderAvidsEfficiency,
  GraderAvidsentrEpreneurship,
  GraderAvidsQuest,
} from './screens'

const GraderAvidsRoutes: FC = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <GraderAvidsHome />
      </Route>
      <Route path={`${path}/cultivation`}>
        <GraderAvidsCultivation />
      </Route>
      <Route path={`${path}/efficiency`}>
        <GraderAvidsEfficiency />
      </Route>
      <Route path={`${path}/entrepreneurship`}>
        <GraderAvidsentrEpreneurship />
      </Route>
      <Route path={`${path}/quest/:insuranceId`}>
        <GraderAvidsQuest />
      </Route>
      <Route render={(props) => <NotFound {...props} />} />
    </Switch>
  )
}
export default GraderAvidsRoutes
