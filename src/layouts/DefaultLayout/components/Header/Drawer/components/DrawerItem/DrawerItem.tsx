import { Typography } from '@material-ui/core'
import PrLink from 'components/PrLink'
import React, { ReactNode, VFC } from 'react'
import useDrawerItemStyle from './useDrawerItemStyle'

interface IDrawerItemProps {
  icon: ReactNode
  title: string
  to: string
}

const DrawerItem: VFC<IDrawerItemProps> = ({ icon, title, to }) => {
  const classes = useDrawerItemStyle()

  return (
    <PrLink className={classes.root} to={to}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.title}>
        <Typography variant="h5">{title}</Typography>
      </div>
    </PrLink>
  )
}

export default DrawerItem
