// import { Typography, useMediaQuery, useTheme } from '@material-ui/core'
// import { ReactComponent as SunIcon } from 'assets/svg/SunIcon.svg'
// import React, { useEffect, useState, VFC } from 'react'
// import { useIntl } from 'react-intl'
// import { animated, useSpring } from 'react-spring'
// import messages from './FirstSlider.messages'
// import useFirstSliderStyles from './useFistSliderStyles'

// const FirstSlider: VFC<{
//   currentState: number
//   moveSectionDown?: () => void
// }> = ({ currentState, moveSectionDown }) => {
//   const { formatMessage } = useIntl()
//   const [state, setState] = useState(0)
//   useEffect(() => {
//     if (currentState !== 0) {
//       return setState(0)
//     }
//     const timer = setInterval(() => {
//       if (state < 2) {
//         return setState((prev) => prev + 1)
//       }
//       moveSectionDown?.()
//     }, 3000)

//     return () => {
//       clearInterval(timer)
//     }
//   }, [state, currentState, moveSectionDown])

//   const classes = useFirstSliderStyles({ state })
//   const {
//     breakpoints: { values },
//   } = useTheme()
//   const isDownSm = useMediaQuery(`@media (max-width: ${values.sm}px)`)
//   const isDownMd = useMediaQuery(`@media (max-width: ${values.md}px)`)

//   const sunHeight = isDownSm ? 300 : 641.66
//   const sunAnimatedProps = useSpring({
//     config: { duration: 2000 },
//     height: state === 1 ? sunHeight : 0,
//     opacity: state === 1 ? 1 : 0,
//     visibility: state === 1 ? 'visible' : 'hidden',
//     display: state === 1 ? 'block' : 'none',
//   })
//   const freeLifeAnimatedProps = useSpring({
//     config: { duration: 2000 },
//     width: state === 2 ? (isDownMd ? '60%' : '30%') : '0%',
//     opacity: state === 2 ? 1 : 0,
//     visibility: state === 2 ? 'visible' : 'hidden',
//     display: state === 2 ? 'block' : 'none',
//   })

//   return (
//     <div className={classes.root}>
//       <div
//         className={classes.container}
//         onClick={() => {
//           if (state < 2) {
//             return setState(state + 1)
//           }
//           return setState(0)
//         }}
//       >
//         <div className={classes.textContainer}>
//           <Typography classes={{ root: classes.txt }}>
//             {formatMessage(messages.txt1)}
//           </Typography>
//           <Typography classes={{ root: classes.txt }}>
//             {formatMessage(messages.txt2)}
//           </Typography>
//         </div>
//         <animated.div style={sunAnimatedProps} className={classes.sun}>
//           <SunIcon width={641.66} height={sunHeight} />
//         </animated.div>

//         <animated.div
//           style={freeLifeAnimatedProps}
//           className={classes.freeLife}
//         />
//       </div>
//       {/* {state === 2 && (
//         <div className={classes.exampleSection}>
//           <div className={classes.exampleSectionPlay}>
//             <PlayIcon />
//           </div>

//           <Typography
//             variant='h6'
//             classes={{ root: classes.exampleSectionText }}
//           >
//             {formatMessage(messages.examText)}
//           </Typography>
//           <div className={classes.exampleSectionCost}>
//             <div>
//               <ClockIcon />
//               <Typography>{formatMessage(messages.examTime)}</Typography>
//             </div>
//             <div>
//               <MoneyIcon />
//               <Typography>{formatMessage(messages.examCost)}</Typography>
//             </div>
//           </div>
//         </div>
//       )} */}
//     </div>
//   )
// }
// export default FirstSlider
import React from 'react'
import './firstSlider.css'
import { ReactComponent as Lamp } from './../../../../assets/svg/SVG/main/page1/Lamp.svg'
import { ReactComponent as Light } from './../../../../assets/svg/SVG/main/page1/Light.svg'
import { ReactComponent as UnderLight } from './../../../../assets/svg/SVG/main/page1/UnderLight.svg'
import Doller from './../../../../assets/svg/SVG/main/play/Doller.svg'
import Clock from './../../../../assets/svg/SVG/main/play/Clock.svg'

const FirstSlider = () => {
  return (
    <div id="third-frame">
      <Lamp id={'lamp'} />
      <Light id={'light'} />
      <UnderLight id={'underLight'} />
      <div id="underLightUl">
      
        <p dir="rtl">
          در ۱۵ دسته شغلی بر‌اساس استاندارد‌های جهانی علاقه‌های حرفه‌ای خودت
          رو بشناس !
        </p>
        <div>
        <a
                href="https://test.parseh.ac.ir/ApplicantAccount/Index/1"
                id="find-intrest"
              >
          <ul className="underLightUl-container">
            <li>
              <p className=" ">3 دقیقه</p>
              <img src={Clock} alt="Clock logo" />
            </li>
            <li>
              <p>رایگان</p>
              <img src={Doller} alt="Doller sign logo" />
            </li>
            <li>
            
                <p>همینجا علاقه هاتو بشناس</p>
                {/* <img src={Play} alt='play video'/> */}
            </li>
          </ul>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FirstSlider
