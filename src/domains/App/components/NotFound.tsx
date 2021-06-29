import React from 'react'
import { RouteComponentProps } from 'react-router'

type INotFoundProps = RouteComponentProps
const NotFound = (props: INotFoundProps) => {
  console.log(props)
  return <div className="error-wrapper">404</div>
}

export default NotFound
