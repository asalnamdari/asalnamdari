import { Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AboutLink from '../AboutLink'
import BackButton from '../BackButton'
import DrawerPagesLinkItem from '../DrawerPagesLink/DrawerPagesLinkItem'
import useDrawerAboutPageStyle from './useDrawerAboutPageStyle'
import { ReactComponent as CallIcon } from 'assets/svg/call.svg'
import { ReactComponent as EmailIcon } from 'assets/svg/email.svg'
import { ReactComponent as InstagramIcon } from 'assets/svg/instagram.svg'
import AddressItem from './AddressItem'

const DrawerAboutPage = () => {
  const history = useHistory()
  const classes = useDrawerAboutPageStyle()
  const handleClick = () => history.goBack()
  return (
    <div className={classes.root}>
      <BackButton onClick={handleClick} />
      <AboutLink to="/drawer" classes={{ root: classes.aboutLink }} />
      <div className={classes.itemsContainer}>
        <DrawerPagesLinkItem
          index={0}
          classes={{ root: classes.about }}
          backColor="#68727C"
        >
          <Typography className={classes.aboutText}>
            ٢٥ سال است كه پارسه محيطی است پويا و پيشرو براي پرورش جوانان ايران
            زمين؛ به گونه ای كه توانايی ايجاد تغييرات ارزشمند در زندگی خود،
            جامعه و جهان داشته باشند.
          </Typography>
        </DrawerPagesLinkItem>
        <DrawerPagesLinkItem
          index={1}
          classes={{ root: classes.addressContainer }}
          backColor="#fff"
        >
          <AddressItem icon={<CallIcon />}>021 - 84388</AddressItem>
          <AddressItem icon={<EmailIcon />}>info@Parseh.ac.ir</AddressItem>
          <AddressItem icon={<InstagramIcon />}>parseh.ac.ir</AddressItem>
          <Typography className={classes.copyRight}>
            مؤسسه آموزش عالی آزاد پارسه تمامی حقوق مادی و معنوی محفوظ است.
          </Typography>
        </DrawerPagesLinkItem>
      </div>
    </div>
  )
}

export default DrawerAboutPage
