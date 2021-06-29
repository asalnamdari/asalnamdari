import { ReactComponent as Login3Icon } from 'assets/svg/Login3Icon.svg'
import React from 'react'
import { useHistory } from 'react-router-dom'
import AboutLink from '../AboutLink'
import BackButton from '../BackButton'
import DrawerItem from '../DrawerItem'
import DrawerPagesLink from '../DrawerPagesLink'

const DrawerJobPage = () => {
  const history = useHistory()
  return (
    <div>
      <BackButton onClick={() => history.goBack()} />

      <DrawerItem
        to="/drawer/job"
        icon={<Login3Icon />}
        title="کارراهه‌های آوید"
      />

      <DrawerPagesLink
        data={[
          {
            title: 'دوره فرهیختگی',
            link: '/grader/avids/cultivation',
            backColor: '/68727C',
            textColor: '/EDEDED',
          },
          {
            title: 'دوره کارآمادگی',
            link: '/grader/avids/efficiency',
            backColor: '#91A1AF',
            textColor: '#EDEDED',
          },
          {
            title: 'دوره کارآفرینی',
            link: '/grader/avids/entrepreneurship',
            backColor: '#DBDBDB',
            textColor: '#68727C',
          },
        ]}
      />
      <AboutLink to="/drawer/about" />
    </div>
  )
}

export default DrawerJobPage
