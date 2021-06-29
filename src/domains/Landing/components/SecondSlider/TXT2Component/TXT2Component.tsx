import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import useTXT2ComponentStyle from './useTXT2ComponentStyle'

const TXT2Component: FC<{ state: number; children: string }> = ({
  state,
  children,
}) => {
  const classes = useTXT2ComponentStyle({ state })

  return (
    <div className={classes.root}>
      <Typography classes={{ root: classes.txt }}>{children}</Typography>
    </div>
  )
}

export default TXT2Component
