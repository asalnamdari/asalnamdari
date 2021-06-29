import { Button, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { useOutsideClick } from 'core'

import { useField } from 'formik'
import React, { FC, useRef, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import usePrDropDownStyle from './usePrDropDownStyle'
// import { animated, useSpring } from 'react-spring'
// import usePrDropDownStyle from './usePrDropDownStyle'

export interface IPrDropDownItem {
  id: number
  examId: number
  text: string
  description: string
}

const PrDropDown: FC<{
  name: string
  data: IPrDropDownItem[]
  indexText: string
}> = ({ name, data, indexText }) => {
  const [{ value }, , { setValue }] = useField(name)
  const [isOpen, setIsOpen] = useState(false)
  const isSelectValue = value !== 0
  const classes = usePrDropDownStyle({ isOpen, isSelectValue })
  const ref = useRef(null)
  const handleClose = () => setIsOpen(false)

  // const handleOpen = () => setIsOpen(true)
  const dropDownAnimatedStyles = useSpring({
    config: { duration: 500 },
    height: isOpen ? 300 : 0,
    opacity: isOpen ? 1 : 0,
    display: isOpen ? 'block' : 'none',
  })
  const currentCategory =
    data.find((item) => item.id === value)?.text ?? '----------'

  useOutsideClick(ref, handleClose)

  return (
    <div ref={ref} className={classes.root}>
      <animated.div style={dropDownAnimatedStyles} className={classes.popOver}>
        <div className={classes.popOverContainer}>
          <Button
            onClick={() => {
              setValue(0)
              setIsOpen(false)
            }}
            className={clsx(classes.texts)}
            size="large"
          >
            - - - - - - -
          </Button>
          {data?.map((item) => (
            <Button
              key={item.id}
              onClick={() => {
                setValue(item.id)
                setIsOpen(false)
              }}
              className={clsx(
                item.id === value && classes.selectedItem,
                classes.texts,
              )}
              size="large"
            >
              {item.text}
            </Button>
          ))}
        </div>
      </animated.div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(classes.selected, classes.texts)}
        size="large"
        disableRipple
      >
        <Typography>{indexText}</Typography>
        {String(currentCategory)}
      </Button>
    </div>
  )
}

export default PrDropDown
