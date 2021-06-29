import { Typography } from '@material-ui/core'
import React, { VFC } from 'react'
import AbilityBox from './AbilityBox'

const MobileSliderBoxes: VFC<{
  classes: Record<string, string>
  mobileAbilityTitleSelector: { title: string; text: string }[]
  state: number
}> = ({ classes, mobileAbilityTitleSelector, state }) => {
  return (
    <div>
      <Typography classes={{ root: classes.txt }}>
        {mobileAbilityTitleSelector[state - 4].title}
      </Typography>
      <AbilityBox
        title={mobileAbilityTitleSelector[state - 4].title}
        text={mobileAbilityTitleSelector[state - 4].text}
      />
    </div>
  )
}

export default MobileSliderBoxes
