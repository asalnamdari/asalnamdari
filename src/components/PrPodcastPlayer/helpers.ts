import { useCallback, useEffect, useState } from 'react'
import { IPrPodcastPlayerItemProps } from './PrPodcastPlayerItem/PrPodcastPlayerItem'

export const useMultiAudio = (
  data: Omit<IPrPodcastPlayerItemProps, 'onToggle' | 'playing'>[],
) => {
  const [sources] = useState(
    data.map((item) => {
      return {
        ...item,
        audio: new Audio(item.mediaContent),
      }
    }),
  )

  const [players, setPlayers] = useState(
    data.map((item) => {
      return {
        ...item,
        playing: false,
      }
    }),
  )

  const onToggle = useCallback(
    (targetIndex: number) => {
      const newPlayers = [...players]
      const currentIndex = players.findIndex((p) => !!p.playing)
      if (currentIndex !== -1 && currentIndex !== targetIndex) {
        newPlayers[currentIndex].playing = false
        newPlayers[targetIndex].playing = true
      } else if (currentIndex !== -1) {
        newPlayers[targetIndex].playing = false
      } else {
        newPlayers[targetIndex].playing = true
      }
      setPlayers(newPlayers)
    },
    [players],
  )

  useEffect(() => {
    sources.forEach((source, i) => {
      players[i].playing ? source.audio.play() : source.audio.pause()
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener('ended', () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener('ended', () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [sources, players])

  return { items: players, onToggle }
}

export default useMultiAudio
