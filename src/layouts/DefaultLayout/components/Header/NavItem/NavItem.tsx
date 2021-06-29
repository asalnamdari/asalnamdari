import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { useRouteMatch } from 'react-router-dom'
import useNavItemStyle from './useNavItemStyle'

const NavItem: FC<{ link: string; children: string }> = ({
  children,
  link,
}) => {
  const { path } = useRouteMatch()
  const classes = useNavItemStyle({ path })
  return (
    <div className={classes.root}>
      <div className={classes.link}>
        <a href={link}>
          <Typography variant="h5" className={classes.text}>
            {children}
          </Typography>
        </a>
      </div>
    </div>
  )
}

export default NavItem
