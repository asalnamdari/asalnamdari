import { ListItem, Typography } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'
import useMenuItemStyle from './useMenuItemStyle'

interface IMenuItemProps {
  index: number
  icon: ReactNode
  children: ReactNode
  isOpen?: boolean
  collapse?: boolean
  onClick?(index: number): void
}

const MenuItem: FC<IMenuItemProps> = ({
  icon,
  index,
  collapse: collapse,
  children,
  isOpen,
  onClick,
}) => {
  const classes = useMenuItemStyle()

  return (
    <ListItem className={classes.root} button onClick={() => onClick?.(index)}>
      <div className={classes.content}>
        <div className={classes.icon}>{icon}</div>
        <Typography
          className={clsx(classes.title, isOpen && classes.active)}
          variant="h5"
        >
          {children}
        </Typography>
      </div>
      {collapse && (isOpen ? <ExpandLess /> : <ExpandMore />)}
    </ListItem>
  )
}

export default MenuItem
