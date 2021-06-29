import { Typography } from '@material-ui/core'
import React, { FC, useEffect, useRef } from 'react'
import usePodcastStyle from './usePrPodcastStyle'

const PrPodcast: FC<{ title: string; src?: string }> = ({ title, src }) => {
  const classes = usePodcastStyle()
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const toggleFullscreen = () => {
      videoRef.current?.play().then(() => {
        if (!document.fullscreenElement) {
          videoRef.current?.requestFullscreen?.().catch((err) => {
            console.log(
              `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
            )
          })
        } else {
          document?.exitFullscreen?.()
        }
      })
    }
    toggleFullscreen()
  }, [])
  return (
    <div className={classes.root}>
      <Typography className={classes.controllerTitle}>{title}</Typography>
      <div className={classes.content}>
        {src && (
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            onEnded={() => {
              if (document.fullscreenElement) {
                document?.exitFullscreen()
              }
            }}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        )}
      </div>
      {/* <div className={classes.controller}>
        
        <div className={classes.controllerContainer}>
          <PodcastTextIcon />
          <Button
            className={classes.controlBtn}
            onClick={() => {
              if (videoRef?.current?.paused) {
                return videoRef?.current?.play()
              }
              videoRef?.current?.pause()
            }}
          >
            <PlayPodcastIcon />
          </Button>
        </div>
      </div> */}
    </div>
  )
}

export default PrPodcast
