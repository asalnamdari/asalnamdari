import NotFound from 'domains/App/components'
import React, { FC } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { StudentHome, StudentSkils } from './screens'
// import StudentAvids from './screens/StudentAvids'
import StudentAvids from './screens/StudentAvids'
import StudentExam from './screens/StudentExam'
import StudentNoGrade from './screens/StudentNoGrade'
import StudentResault from './screens/StudentResault'

const StudentRoutes: FC = () => {
  const { path } = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <StudentHome />
      </Route>
      <Route path={`${path}/exam`}>
        <StudentExam />
      </Route>
      <Route path={`${path}/skills`}>
        <StudentSkils />
      </Route>
      <Route path={`${path}/result/:userId`}>
        <StudentResault />
      </Route>
      <Route path={`${path}/avids/:type`}>
        <StudentAvids />
      </Route>
      <Route path={`${path}/avids`}>
        <StudentNoGrade />
      </Route>
      <Route render={(props) => <NotFound {...props} />} />
    </Switch>
  )
}
export default StudentRoutes
