import { ReactComponent as BackIcon } from 'assets/svg/BackIcon.svg'
import React, { VFC } from 'react'
import useBackButtonStyle from './useBackButtonStyle'

const BackButton: VFC<{ onClick(): void }> = ({ onClick }) => {
  const classes = useBackButtonStyle()

  return (
    <button className={classes.root} onClick={onClick}>
      <BackIcon fill="rgb(104, 114, 124)" />
    </button>
  )
}
export default BackButton
