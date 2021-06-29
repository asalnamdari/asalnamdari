import { ReactComponent as RadioIcon } from 'assets/svg/RadioIcon.svg'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AboutLink from '../AboutLink'
import BackButton from '../BackButton'
import DrawerItem from '../DrawerItem'
import DrawerPagesLink from '../DrawerPagesLink'

const DrawerRadioPage = () => {
  const history = useHistory()
  return (
    <div>
      <BackButton onClick={() => history.goBack()} />

      <DrawerItem to="/drawer/from" icon={<RadioIcon />} title="رادیو پردیس" />
      <DrawerPagesLink
        data={[
          {
            title: 'رهبانان برجسته',
            link: '/radio',
            backColor: '#68727C',
            textColor: '#EDEDED',
          },
          {
            title: 'رهجویان برجسته',
            link: '/radio',
            backColor: '#91A1AF',
            textColor: '#EDEDED',
          },
          {
            link: '#',
            backColor: '#DBDBDB',
            textColor: '#68727C',
          },
        ]}
      />
      <AboutLink to="/drawer/about" />
    </div>
  )
}

export default DrawerRadioPage
