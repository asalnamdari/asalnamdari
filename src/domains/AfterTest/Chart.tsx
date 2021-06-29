import React from 'react'
import { Link } from 'react-router-dom'
import './chart.css'

const Chart = () => {
  return (
    <div className="container-repor">
      <div className="container-report">
        <div id="iframe-chart">
          <iframe src="www.google.com" frameBorder="0"></iframe>
          <p>نمودار تحلیل آزمون شما</p>
        </div>
        <div id="text-chart">
        </div>
        <Link to="/report" id="button-chart">
            <h3>توی باشگاه کشف استعداد چه خبره؟</h3>
        </Link>
      </div>
    </div>
  )
}

export default Chart
