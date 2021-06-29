import React from 'react'
import './aftertest.css'
const AfterTest = () => {
  return (
    <div className='container-scor'>
      <div className='container-score'>

        {/* .container-score>div:nth-child(1) */}
        <div>
          <h1 className='header-score'>نقطه ی تلاقی استعدادهای شما</h1>
          <h1 className='header-score'>با نیازهای جهان کجاست؟</h1>
        </div>
        {/* .container-score>div:nth-child(2) */}
        <div id={'text-video'}>
          <p>تنها با سه هفته عضویت در باشگاه کشف استعداد پارسه می‌تونی</p>
          <p>همه‌ی استعداد‌های شغلی و حرفه‌ای خودت رو کشف کن</p>
        </div>
        {/* .container-score>div:nth-child(3) */}
        <div>
          <video controls autoPlay typeof='video/mp4' style={{borderRadius:'10px'}}>
            <source src="https://new.parseh.ac.ir/ve_project_45.ogg" type="video/ogg" />
            <source src="https://new.parseh.ac.ir/ve_project_45.webm" type="video/webm" />
          </video>
          {/* <video controls={true}>
            <source src={'https://new.parseh.ac.ir/ve_project_45.mp4'} type='video/mp4' />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <a href='#' id='text-button-score'>

        {/* .container-score>div:nth-child(4) */}
          <div>
            <h4>عضویت در باشگاه کشف استعداد</h4>
          </div>
          <div>
            <h4>مبلغ پذیرانه : یک و نیم میلیون تومان</h4>
          </div>
          </a>
      </div>
    </div>
  )
}

export default AfterTest
