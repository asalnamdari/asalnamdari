import About from 'domains/About/About'
import AfterTest from 'domains/AfterTest/AfterTest'
import Chart from 'domains/AfterTest/Chart'
import Education from 'domains/Education'
import Grader from 'domains/Grader'
import Honorary from 'domains/Honorary'
import Landing from 'domains/Landing'
import RadioPardis from 'domains/RadioPardis'
import Student from 'domains/Student'
import Exam from 'domains/ExamTest/ExamResault'

import type { ComponentType } from 'react'
import type { RouteProps } from 'react-router-dom'

interface IRoutes extends Pick<RouteProps, 'path'> {
  layout?: ComponentType<RouteProps>
  component: ComponentType<RouteProps>
  exact?: boolean
}

export default [
  {
    path: '/',
    component: Landing,
    exact: true,
  },
  {
    path: '/grader',
    component: Grader,
  },
  {
    path: '/education',
    component: Education,
  },
  {
    path: '/student',
    component: Student,
  },
  {
    path: '/honorary',
    component: Honorary,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/radio',
    component: RadioPardis,
  },
  {
    path: '/report',
    component: AfterTest,
  },
  {
    path: '/exam',
    component: Exam,
  },
  {
    path: '/chart',
    component: Chart,
  },
] as IRoutes[]
