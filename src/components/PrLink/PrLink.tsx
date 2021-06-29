import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Link as MaterilLink, LinkProps } from '@material-ui/core'
import usePrLinkStyle from './usePrLinkStyle'

interface IPrLinkProps extends Omit<LinkProps, 'href'> {
  to: string
  children?: any
}

const PrLink: FC<IPrLinkProps> = ({ to, children, ...props }) => {
  const classes = usePrLinkStyle()
  if (!to) return <span {...props}>{children}</span>
  if (/^https?:\/\//.test(to))
    return (
      <MaterilLink className={classes.root} href={to} {...props}>
        {children}
      </MaterilLink>
    )

  return (
    <Link className={classes.root} to={to} {...props}>
      {children}
    </Link>
  )
}

export default PrLink
