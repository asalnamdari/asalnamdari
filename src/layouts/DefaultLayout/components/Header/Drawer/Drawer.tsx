import { IconButton, SwipeableDrawer } from '@material-ui/core'
import { ReactComponent as DrawerIcon } from 'assets/svg/drawerinnerIcon.svg'
import React, { VFC } from 'react'
import { MemoryRouter, Route } from 'react-router-dom'
import {
  DrawerAboutPage,
  DrawerExamPage,
  DrawerRadioPage,
  DrawerJobPage,
  DrawerMagazinePage,
  DrawerRoutingPage,
} from './components'
import { DrawerHomePage } from './DrawerHomePage'
import useDrawerStyle from './useDrawerStyle'

const Drawer: VFC<{
  open: boolean
  onClose: () => void
  onOpen: () => void
}> = (props) => {
  const { root, paper, drawerIcon, container, navsContainer } = useDrawerStyle()

  return (
    <SwipeableDrawer anchor="right" {...props} classes={{ ...{ root, paper } }}>
      <div className={container}>
        <IconButton
          onClick={props.onClose}
          color="inherit"
          className={drawerIcon}
        >
          <DrawerIcon />
        </IconButton>
        <div className={navsContainer}>
          <MemoryRouter
            initialIndex={0}
            initialEntries={[{ pathname: '/drawer' }]}
          >
            <Route exact path="/drawer">
              <DrawerHomePage />
            </Route>
            <Route path="/drawer/job">
              <DrawerJobPage />
            </Route>
            <Route path="/drawer/exam">
              <DrawerExamPage />
            </Route>
            <Route path="/drawer/magazin">
              <DrawerMagazinePage />
            </Route>
            <Route path="/drawer/radio">
              <DrawerRadioPage />
            </Route>
            <Route path="/drawer/routing">
              <DrawerRoutingPage />
            </Route>
            <Route path="/drawer/about">
              <DrawerAboutPage />
            </Route>
          </MemoryRouter>
        </div>
      </div>
    </SwipeableDrawer>
  )
}

export default Drawer
