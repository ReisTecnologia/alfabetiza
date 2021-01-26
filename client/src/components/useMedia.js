import { useEffect, useState, useRef } from 'react'

export const useMedia = ({ mediaRef, onComplete }) => {
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [paused, setPaused] = useState(false)
  const listeners = useRef({
    loadeddata: null,
    play: null,
    ended: null,
    pause: null,
  })

  useEffect(() => {
    if (listeners.current.loadeddata) {
      mediaRef.current.removeEventListener(
        'loadeddata',
        listeners.current.loadeddata
      )
      mediaRef.current.removeEventListener('play', listeners.current.play)
      mediaRef.current.removeEventListener('ended', listeners.current.ended)
      mediaRef.current.removeEventListener('pause', listeners.current.pause)
    }
    listeners.current.loadeddata = () => {
      setLoading(false)
    }
    listeners.current.play = () => {
      setPlaying(true)
    }
    listeners.current.ended = () => {
      setPlaying(false)
      onComplete()
    }
    listeners.current.pause = () => {
      setPlaying(false)
      setPaused(true)
    }

    if (mediaRef.current) {
      mediaRef.current.addEventListener(
        'loadeddata',
        listeners.current.loadeddata
      )
      mediaRef.current.addEventListener('play', listeners.current.play)
      mediaRef.current.addEventListener('ended', listeners.current.ended)
      mediaRef.current.addEventListener('pause', listeners.current.pause)
    }
  }, [mediaRef.current, onComplete])

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
