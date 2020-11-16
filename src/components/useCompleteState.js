import { useState, useCallback } from 'react'

export const useCompleteState = () => {
  const [complete, setComplete] = useState(false)
  const doComplete = useCallback(() => setComplete(true), [setComplete])
  return { complete, doComplete }
}
