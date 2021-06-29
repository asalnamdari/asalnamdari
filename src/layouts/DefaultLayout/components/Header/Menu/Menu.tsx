import { Collapse, List } from '@material-ui/core'
import { ReactComponent as AboutIcon } from 'assets/svg/AboutIcon.svg'
import { ReactComponent as HomeIcon } from 'assets/svg/HomeIcon.svg'
import { ReactComponent as Login1Icon } from 'assets/svg/Login1Icon.svg'
import { ReactComponent as Login2Icon } from 'assets/svg/Login2Icon.svg'
import { ReactComponent as Login3Icon } from 'assets/svg/Login3Icon.svg'
import { ReactComponent as MenuFroumIcon } from 'assets/svg/MenuFroumIcon.svg'
import { ReactComponent as MenuMagazinIcon } from 'assets/svg/MenuMagazinIcon.svg'
import { ReactComponent as RadioIcon } from 'assets/svg/RadioIcon.svg'
import { ReactComponent as SubMenuIcon } from 'assets/svg/SubMenuIcon.svg'
import { useOutsideClick } from 'core'
import { useRef, useState, VFC } from 'react'
import { useHistory } from 'react-router-dom'
import AboutLink from '../Drawer/components/AboutLink'
import { MenuParentItem } from './components'
import SubMenuItem from './components/SubMenuItem'
import useMenuStyle from './useMenuStyle'

interface IMenuProps {
  isOpen: boolean
  onOpenChange(value: boolean): void
}

const Menu: VFC<IMenuProps> = ({ isOpen, onOpenChange }) => {
  const classes = useMenuStyle()
  const [open, setOpen] = useState<number | undefined>()
  const { push } = useHistory()
  const ref = useRef(null)
  useOutsideClick(ref, () => {
    onOpenChange(true)
    setOpen(undefined)
  })

  const handleClick = (id: number) => {
    if (open === id) {
      return setOpen(undefined)
    }
    setOpen(id)
  }
  return (
    <div className={classes.root} ref={ref}>
      <div className={classes.container}>
        <Collapse in={!isOpen} timeout="auto" unmountOnExit>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.nav}
          >
            <MenuParentItem
              index={0}
              onClick={() => {
                onOpenChange(true)
                push('/')
              }}
              icon={<HomeIcon />}
            >
              خانه
            </MenuParentItem>
            <MenuParentItem
              index={1}
              onClick={() =>
                window.location.replace(`${process.env.REACT_APP_ROOT_USER}`)
              }
              icon={<Login1Icon />}
            >
              ورود رهجو
            </MenuParentItem>
            <MenuParentItem
              index={2}
              onClick={() =>
                window.location.replace(
                  `${process.env.REACT_APP_ROOT_ADMIN}/Account/Login`,
                )
              }
              icon={<Login2Icon />}
            >
              ورود رهبان
            </MenuParentItem>
            <MenuParentItem
              index={3}
              onClick={() => handleClick(3)}
              isOpen={open === 3}
              icon={<Login3Icon />}
              collapse
            >
              کارراهه‌های آوید
            </MenuParentItem>
            <Collapse in={open === 3} classes={{ wrapper: classes.subMenu }}>
              <SubMenuItem
                // link="/grader/avids/cultivation"
                link="#"
                icon={<SubMenuIcon />}
                color="#84909B"
              >
                آوید فرهیختگی
              </SubMenuItem>
              <SubMenuItem
                // link="/grader/avids/efficiency"
                link="#"
                icon={<SubMenuIcon />}
                color="#9EAFBE"
              >
                آوید کارآمــادگی
              </SubMenuItem>
              <SubMenuItem
                // link="/grader/avids/entrepreneurship"
                link="#"
                icon={<SubMenuIcon />}
                color="#DBDBDB"
              >
                آوید کارآفـــرینی
              </SubMenuItem>
            </Collapse>
            <MenuParentItem index={4} icon={<MenuMagazinIcon />}>
              نشریه الکترونیک پردیس پارسه
            </MenuParentItem>
            <MenuParentItem
              onClick={() =>
                window.location.replace(
                  `${process.env.REACT_APP_ROOT_STATIC}/Rahname/mobile/index.html`,
                )
              }
              index={5}
              icon={<AboutIcon />}
            >
              رهنامه‌ پارسه
            </MenuParentItem>
            <MenuParentItem
              index={6}
              icon={<MenuFroumIcon />}
              onClick={() => {
                onOpenChange(true)
                push('/honorary')
              }}
            >
              رهبانان افتخاری پارسه
            </MenuParentItem>
            <MenuParentItem
              index={7}
              onClick={() => handleClick(7)}
              isOpen={open === 7}
              icon={<RadioIcon />}
              collapse
            >
              رادیو پردیس
            </MenuParentItem>
            <Collapse in={open === 7} classes={{ wrapper: classes.subMenu }}>
              <SubMenuItem link="/radio" icon={<SubMenuIcon />} color="#84909B">
                رهبانان برجسته
              </SubMenuItem>
              <SubMenuItem link="/radio" icon={<SubMenuIcon />} color="#9EAFBE">
                رهجویان برجسته
              </SubMenuItem>
            </Collapse>
          </List>
          <AboutLink to="/about" isRed classes={{ root: classes.about }} />
        </Collapse>
      </div>
    </div>
  )
}
export default Menu
