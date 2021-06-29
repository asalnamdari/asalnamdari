import { ReactComponent as AboutIcon } from 'assets/svg/AboutIcon.svg'
import { ReactComponent as HomeIcon } from 'assets/svg/HomeIcon.svg'
import { ReactComponent as Login1Icon } from 'assets/svg/Login1Icon.svg'
import { ReactComponent as Login2Icon } from 'assets/svg/Login2Icon.svg'
import { ReactComponent as Login3Icon } from 'assets/svg/Login3Icon.svg'
import { ReactComponent as MenuFroumIcon } from 'assets/svg/MenuFroumIcon.svg'
import { ReactComponent as MenuMagazinIcon } from 'assets/svg/MenuMagazinIcon.svg'
import { ReactComponent as RadioIcon } from 'assets/svg/RadioIcon.svg'
import React from 'react'
import AboutLink from './components/AboutLink'
import DrawerItem from './components/DrawerItem'

export const DrawerHomePage = () => (
  <>
    <DrawerItem
      to={`${process.env.REACT_APP_ROOT}`}
      icon={<HomeIcon />}
      title="خانه"
    />
    <DrawerItem
      to={`${process.env.REACT_APP_ROOT_USER}`}
      icon={<Login1Icon />}
      title="ورود رهجو"
    />
    <DrawerItem
      to={`${process.env.REACT_APP_ROOT_ADMIN}/Account/Login`}
      icon={<Login2Icon />}
      title="ورود رهبان"
    />
    <DrawerItem
      to="/drawer/job"
      icon={<Login3Icon />}
      title="کارراهه‌های آوید"
    />
    <DrawerItem
      to="#"
      icon={<MenuMagazinIcon />}
      title="نشریه الکترونیک پردیس پارسه"
    />
    <DrawerItem
      to="/drawer/routing"
      icon={<AboutIcon />}
      title="رهنامه‌ پارسه"
    />
    <DrawerItem
      to="/drawer/exam"
      icon={<MenuFroumIcon />}
      title="رهبانان افتخاری پارسه"
    />
    <DrawerItem to="/drawer/radio" icon={<RadioIcon />} title="رادیو پردیس" />
    <AboutLink to="/drawer/about" />
  </>
)
