// import { useAuth } from 'domains/Auth'
import { Hidden, IconButton, useMediaQuery, useTheme } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ReactComponent as MobileParseHeader } from 'assets/svg/MobileParse.svg'
import { ReactComponent as ParseHeader } from 'assets/svg/ParseHeader.svg'
import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import { useRouteMatch } from 'react-router-dom'
import Drawer from './Drawer'
import messages from './Header.messages'
import Menu from './Menu'
import NavItem from './NavItem'
import useHeaderStyle from './useHeaderStyle'

const DashboardHeader = () => {
  const { formatMessage } = useIntl()
  const { path } = useRouteMatch()
  const {
    breakpoints: { values },
  } = useTheme()
  const isDownSm = useMediaQuery(`@media (max-width: ${values.sm}px)`)
  const isDownMd = useMediaQuery(`@media (max-width: ${values.md}px)`)

  const classes = useHeaderStyle({ path })
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openMenu, setOpenMenu] = useState(true)

  const onOpenDrawer = () => {
    setOpenDrawer(true)
  }

  const onCloseDrawer = () => {
    setOpenDrawer(false)
  }
  return (
    <header className={classes.root}>
      {isDownMd && (
        <Drawer
          {...{
            open: openDrawer,
            onOpen: onOpenDrawer,
            onClose: onCloseDrawer,
          }}
        />
      )}
      <div className={classes.headerContainer}>
        <Hidden xsDown>
          <div className={classes.shapeContainer}>
            <ParseHeader />
          </div>
        </Hidden>
        {isDownMd && (
          <>
            {/* <PrLink to="/" className={classes.mobileHomeLink} /> */}
            {isDownSm && <MobileParseHeader />}
            <IconButton
              onClick={onOpenDrawer}
              color="inherit"
              className={classes.drawerButton}
            >
              <MenuIcon fontSize="large" color="inherit" />
            </IconButton>
          </>
        )}
        <Hidden smDown>
          <div className={classes.headerButtons}>
            <IconButton
              onClick={() => {
                if (openMenu) {
                  setOpenMenu(false)
                }
              }}
              color="inherit"
              className={classes.drawerButton}
            >
              <MenuIcon fontSize="large" color="inherit" />
            </IconButton>
            {!isDownMd && (
              <div
                style={{
                  display: 'inline-grid',
                  width: '100%',
                  height: '100%',
                  gridAutoFlow: 'column',
                  columnGap: 20,
                }}
              >
                <NavItem
                  link={`${process.env.REACT_APP_ROOT_ADMIN}/Account/Login`}
                >
                  {formatMessage(messages.nav1)}
                </NavItem>
                <NavItem
                  link={`${process.env.REACT_APP_ROOT_ADMIN}/Account/Login`}
                >
                  {formatMessage(messages.nav2)}
                </NavItem>
                <NavItem
                  link={`/`}
                >
                  {formatMessage(messages.nav3)}
                </NavItem>
              </div>
            )}
          </div>
        </Hidden>
      </div>
      {!isDownSm && <Menu isOpen={openMenu} onOpenChange={setOpenMenu} />}
    </header>
  )
}

export default DashboardHeader
