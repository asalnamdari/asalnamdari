import { Link, Typography } from '@material-ui/core'
import React, { FC, ReactNode } from 'react'
import useDrawerPagesLinkItemStyle from './useDrawerPagesLinkStyle'

export interface IDrawerPageLinkItem {
  index: number
  top?: number
  title?: string
  icon?: ReactNode
  link?: string
  backColor?: string
  textColor?: string
  classes?: Partial<Record<'root' | 'title' | 'content', string>>
}

const DrawerPagesLinkItem: FC<IDrawerPageLinkItem> = ({
  index,
  icon,
  link,
  top,
  title,
  backColor,
  textColor,
  children,
  classes: externalClasses,
}) => {
  const classes = useDrawerPagesLinkItemStyle({
    top,
    index,
    backColor,
    textColor,
    classes: externalClasses,
  })

  return (
    <Link className={classes.root} href={link}>
      {children ? (
        children
      ) : (
        <div className={classes.content}>
          {icon}
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
        </div>
      )}
    </Link>
  )
}

export default DrawerPagesLinkItem
