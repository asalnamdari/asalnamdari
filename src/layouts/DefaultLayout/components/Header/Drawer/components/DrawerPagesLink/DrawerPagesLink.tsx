import React, { VFC } from 'react'
import DrawerPagesLinkItem from './DrawerPagesLinkItem'
import useDrawerRoutingPageStyle from '../DrawerRoutingPage/useDrawerRoutingPageStyle'
import { IDrawerPageLinkItem } from './DrawerPagesLinkItem/DrawerPagesLinkItem'

interface IDrawerPagesLink extends Pick<IDrawerPageLinkItem, 'classes'> {
  data: Omit<IDrawerPageLinkItem, 'classes' | 'top' | 'index'>[]
  top?: number
}

const DrawerPagesLink: VFC<IDrawerPagesLink> = ({
  data,
  classes,
  top = 65,
}) => {
  const innerClasses = useDrawerRoutingPageStyle()
  return (
    <div className={innerClasses.root}>
      {data.map((item, index) => (
        <DrawerPagesLinkItem
          key={index}
          {...{ ...item, top, classes, index }}
        />
      ))}
    </div>
  )
}

export default DrawerPagesLink
