import ReactFullpage from '@fullpage/react-fullpage'
import React, { FC, useState } from 'react'
import { FirstSlider, SecondSlider, ThirdSlider } from './components'
import useLandingStyle from './useLandigStyle'

const Landing: FC = () => {
  const classes = useLandingStyle()
  const [destinationIndex, setDestinationIndex] = useState(0)

  return (
    <div className={classes.root}>
      <ReactFullpage
        afterLoad={(_, destination) => setDestinationIndex(destination.index)}
        scrollingSpeed={1000}
        render={({ fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <FirstSlider />
            </div>
            <div className="section">
              <SecondSlider
                {...{
                  currentState: destinationIndex,
                  moveSectionDown: fullpageApi?.moveSectionDown,
                }}
              />
            </div>
            <div className="section">
              <ThirdSlider
                {...{
                  currentState: destinationIndex,
                  moveSectionDown: fullpageApi?.moveSectionDown,
                }}
              />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  )
}

export default Landing
