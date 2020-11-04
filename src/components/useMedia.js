import { useEffect, useState } from 'react'

export const useMedia = ({ mediaRef }) => {
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    mediaRef.current.addEventListener('loadeddata', () => {
      setLoading(false)
    })
    mediaRef.current.addEventListener('play', () => {
      setPlaying(true)
    })
    mediaRef.current.addEventListener('ended', () => {
      setPlaying(false)
    })
    mediaRef.current.addEventListener('pause', () => {
      setPlaying(false)
      setPaused(true)
    })
  })
  const play = () => {
    if (!loading) {
      if (playing) {
        mediaRef.current.pause()
      } else {
        if (paused) {
          console.log('paused', mediaRef.current)
          mediaRef.current.currentTime = 0
        }
        mediaRef.current.play()
      }
    }
  }

  return {
    play,
    playing,
    loading,
  }
}
