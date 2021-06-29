import { Typography } from '@material-ui/core'
import React, { VFC } from 'react'
import useAbilityBoxStyle from './useAbilityBoxStyle'

interface IAbilityBoxProps {
  title: string
  text: string
}

const AbilityBox: VFC<IAbilityBoxProps> = ({ title, text }) => {
  const classes = useAbilityBoxStyle()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </div>
      <Typography variant="h5" className={classes.content}>
        {text}
      </Typography>
    </div>
  )
}
export default AbilityBox
