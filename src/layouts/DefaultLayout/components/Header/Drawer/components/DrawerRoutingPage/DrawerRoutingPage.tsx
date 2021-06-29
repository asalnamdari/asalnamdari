import { ReactComponent as AboutIcon } from 'assets/svg/AboutIcon.svg'
import { ReactComponent as DrawerRodeIcon } from 'assets/svg/DrawerRodeIcon.svg'
import { ReactComponent as DrawerRahjooIcon } from 'assets/svg/DrawerRahjooIcon.svg'
import { ReactComponent as DrawerRahbanIcon } from 'assets/svg/DrawerRahbanIcon.svg'
import { ReactComponent as DrawerCultureIcon } from 'assets/svg/DrawerCultureIcon.svg'
import { ReactComponent as DrawerAvidIcon } from 'assets/svg/DrawerAvidIcon.svg'
import { ReactComponent as DrawerRaveshIcon } from 'assets/svg/DrawerRaveshIcon.svg'
import { ReactComponent as DrawerManeshIcon } from 'assets/svg/DrawerManeshIcon.svg'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AboutLink from '../AboutLink'
import BackButton from '../BackButton'
import DrawerItem from '../DrawerItem'
import DrawerPagesLink from '../DrawerPagesLink'
import useDrawerRoutingPageStyle from './useDrawerRoutingPageStyle'

const DrawerRoutingPage = () => {
  const history = useHistory()
  const classes = useDrawerRoutingPageStyle()
  return (
    <div>
      <BackButton onClick={() => history.goBack()} />
      <DrawerItem to="/about" icon={<AboutIcon />} title="کشف استعداد" />
      <div className={classes.root}>
        <DrawerPagesLink
          classes={{ root: classes.links, content: classes.contents }}
          top={45}
          data={[
            {
              title: 'راه ',
              link: `${process.env.REACT_APP_ROOT_STATIC}/Rahname/mobile/index.html#p=3`,
              backColor: '#68727C',
              textColor: '#EDEDED',
              icon: <DrawerRodeIcon />,
            },
            {
              title: 'رهجو ',
              link: `${process.env.REACT_APP_ROOT_STATIC}/Rahname/mobile/index.html#p=4`,
              backColor: '#91A1AF',
              textColor: '#EDEDED',
              icon: <DrawerRahjooIcon />,
            },
            {
              title: 'رهبان ',
              link: `${process.env.REACT_APP_ROOT_STATIC}/Rahname/mobile/index.html#p=5`,
              backColor: '#BDC8D1',
              textColor: '#EDEDED',
              icon: <DrawerRahbanIcon />,
            },
            {
              title: 'فرهنگ یادگیری ',
              link: `${process.env.REACT_APP_ROOT_STATIC}/Rahname/mobile/index.html#p=6`,
              backColor: '#91A1AF',
              textColor: '#EDEDED',
              icon: <DrawerCultureIcon />,
            },
            {
              title: 'کارراهه آوید ',
              link: `${process.env.REACT_APP_ROOT_STATIC}/Rahname/mobile/index.html#p=10`,
              backColor: '#BDC8D1',
              textColor: '#EDEDED',
              icon: <DrawerAvidIcon />,
            },
            {
              title: 'روش پارسه ',
              link: `${process.env.REACT_APP_ROOT_STATIC}/Rahname/mobile/index.html#p=14`,
              backColor: '#68727C',
              textColor: '#EDEDED',
              icon: <DrawerRaveshIcon />,
            },
            {
              title: 'منش پارسه ',
              link: `${process.env.REACT_APP_ROOT_STATIC}/Rahname/mobile/index.html#p=18`,
              backColor: '#91A1AF',
              textColor: '#EDEDED',
              icon: <DrawerManeshIcon />,
            },
            {
              link: '#',
              backColor: '#EDEDED',
              textColor: '#68727C',
            },
          ]}
        />
      </div>
      <AboutLink to="/drawer/about" />
    </div>
  )
}

export default DrawerRoutingPage
