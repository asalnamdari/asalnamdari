import { ReactComponent as Who } from 'assets/svg/who.svg'
import React, { VFC } from 'react'
import { Link } from 'react-router-dom'
import useAboutLinkStyle from './useAboutLinkStyle'

export type IAboutLinkProps = {
  to: any
  isRed?: boolean
  classes?: Partial<Record<'root', string>>
}

const AboutLink: VFC<IAboutLinkProps> = ({
  to,
  classes: externalClasses,
  isRed,
}) => {
  const classes = useAboutLinkStyle({ classes: externalClasses, isRed })
  return (
    <Link className={classes.root} to={to}>
      <Who />
    </Link>
  )
}

export default AboutLink
