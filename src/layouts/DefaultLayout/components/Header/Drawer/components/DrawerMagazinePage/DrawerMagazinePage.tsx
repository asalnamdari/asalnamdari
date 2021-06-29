import { ReactComponent as MenuMagazinIcon } from 'assets/svg/MenuMagazinIcon.svg'
import { ReactComponent as LinkIcon } from 'assets/svg/LinkIcon.svg'
import MagazinImage from 'assets/MagazinImage.png'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AboutLink from '../AboutLink'
import BackButton from '../BackButton'
import DrawerItem from '../DrawerItem'
import DrawerPagesLink from '../DrawerPagesLink'
import useDrawerMagazinePageStyle from './useDrawerMagazinePageStyle'
import PrLink from 'components/PrLink'

const DrawerMagazinePage = () => {
  const history = useHistory()
  const classes = useDrawerMagazinePageStyle()
  return (
    <div>
      <BackButton onClick={() => history.goBack()} />
      <DrawerItem
        to="/"
        icon={<MenuMagazinIcon />}
        title="نشریه الکترونیک پردیس پارسه"
      />
      <div className={classes.root}>
        <DrawerPagesLink
          classes={{ root: classes.links, content: classes.contents }}
          top={45}
          data={[
            {
              title: 'دانلود ',
              link: '#',
              backColor: '#68727C',
              textColor: '#EDEDED',
              icon: <LinkIcon />,
            },
            {
              link: '#',
              backColor: '#91A1AF',
              textColor: '#EDEDED',
            },
            {
              link: '#',
              backColor: '#EDEDED',
              textColor: '#68727C',
            },
          ]}
        />
        <PrLink to="">
          <img src={MagazinImage} alt="پارسه" className={classes.image} />
        </PrLink>
        <img src={MagazinImage} alt="پارسه" />
      </div>
      <AboutLink to="/drawer/about" />
    </div>
  )
}

export default DrawerMagazinePage
