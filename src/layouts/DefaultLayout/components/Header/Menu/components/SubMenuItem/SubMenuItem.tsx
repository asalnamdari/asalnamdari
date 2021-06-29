import { Typography } from '@material-ui/core'
import PrLink from 'components/PrLink'
import { FC, ReactNode } from 'react'
import useSubMenuItemStyle from './useSubMenuItemStyle'

const SubMenuItem: FC<{ icon?: ReactNode; color?: string; link: string }> = ({
  icon,
  children,
  color,
  link,
}) => {
  const classes = useSubMenuItemStyle({ color })
  return (
    <PrLink to={link} className={classes.root}>
      {icon}
      <Typography variant="subtitle2" color="textSecondary">
        {children}
      </Typography>
    </PrLink>
  )
}

export default SubMenuItem
