import DashboardLayout from 'layouts/DefaultLayout'
import React, { FC } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import NotFound from './components'
import routes from './routes'

const AppRoutes: FC = () => (
  <Router>
    <Switch>
      {routes.map(({ path, component: Component, exact, layout: Layout }) => (
        // <Route
        //   key={`Route${route.path}`}
        //   path={route.path}
        //   render={(props) => {
        //     if (route.layout) {
        //       return (
        //         <route.layout {...props}>
        //           <route.component {...props} />
        //         </route.layout>
        //       )
        //     }
        //     return (
        //       <DashboardLayout {...props}>
        //         <route.component {...props} />
        //       </DashboardLayout>
        //     )
        //   }}
        //   exact={route.exact}
        // />
        <Route key={`Route-${path}`} {...{ exact, path }}>
          {Layout ? (
            <Layout>
              <Component />
            </Layout>
          ) : (
            <DashboardLayout>
              <Component />
            </DashboardLayout>
          )}
        </Route>
      ))}
      <Route render={(props) => <NotFound {...props} />} />
    </Switch>
  </Router>
)
export default AppRoutes
