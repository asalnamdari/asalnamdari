import NotFound from 'domains/App/components'
import React, { FC } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { GraderHome, GraderSkils } from './screens'
import GraderAvids from './screens/GraderAvids'
import GraderExam from './screens/GraderExam'
import GraderPodcasts from './screens/GraderPodcasts'
import GraderResault from './screens/GraderResault'

const GraderRoutes: FC = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <GraderHome />
      </Route>
      <Route path={`${path}/exam`}>
        <GraderExam />
      </Route>
      <Route path={`${path}/skils`}>
        <GraderSkils />
      </Route>
      <Route path={`${path}/result/:userId`}>
        <GraderResault />
      </Route>
      <Route path={`${path}/podcasts`}>
        <GraderPodcasts />
      </Route>
      <Route path={`${path}/avids`}>
        <GraderAvids />
      </Route>
      <Route render={(props) => <NotFound {...props} />} />
    </Switch>
  )
}
export default GraderRoutes
