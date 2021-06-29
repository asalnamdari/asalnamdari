import { Typography } from '@material-ui/core'
import { ReactComponent as MenuFroumIcon } from 'assets/svg/MenuFroumIcon.svg'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AboutLink from '../AboutLink'
import BackButton from '../BackButton'
import DrawerItem from '../DrawerItem'
import DrawerPagesLinkItem from '../DrawerPagesLink/DrawerPagesLinkItem'
import useDrawerExamPageStyle from './useDrawerExamPageStyle'

const DrawerExamPage = () => {
  const history = useHistory()
  const classes = useDrawerExamPageStyle()
  return (
    <>
      <BackButton onClick={() => history.goBack()} />
      <DrawerItem
        to="/"
        icon={<MenuFroumIcon />}
        title="رهبانان افتخاری پارسه"
      />
      <div className={classes.itemsContainer}>
        <DrawerPagesLinkItem
          index={0}
          // classes={{ root: classes.about }}
          backColor="#68727C"
        >
          <Typography variant="h5" color="textPrimary" className={classes.text}>
            آن دسته از اعضا برجسته خانواده پارسه که با سخت کوشی خویش، دانش را
            برای خلق ارزش به خدمت گرفتند. و اینک تجربه های زیسته خود را در
            اختیار نسل جوان ایران زمین قرار می دهند.
          </Typography>
        </DrawerPagesLinkItem>
      </div>
      <AboutLink to="/drawer/about" />
    </>
  )
}

export default DrawerExamPage
