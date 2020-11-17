import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useMedia } from '../useMedia'
import { Wrapper } from './Wrapper'
import PropTypes from 'prop-types'
import { SvgThumbsDown } from '../SvgThumbsDown'
import { SvgThumbsUp } from '../SvgThumbsUp'

export const YesOrNo = ({
  correctAnswer,
  urlRightAnswerExplanation,
  urlWrongAnswerExplanation,
  onComplete,
}) => {
  const [answer, setAnswer] = useState(null)
  const [answerIsCorrect, setAnswerIsCorrect] = useState(null)

  var rightAnswerExplanationAudio = useRef(new Audio(urlRightAnswerExplanation))

  const { play: playR, playing: playingR, loading: loadingR } = useMedia({
    mediaRef: rightAnswerExplanationAudio,
    onComplete: useCallback(() => {
      onComplete({ answer, answerIsCorrect })
    }, [answer, answerIsCorrect]),
  })

  var wrongAnswerExplanationAudio = useRef(new Audio(urlWrongAnswerExplanation))
  const { play: playW, playing: playingW, loading: loadingW } = useMedia({
    mediaRef: wrongAnswerExplanationAudio,
    onComplete: useCallback(() => {
      onComplete({ answer, answerIsCorrect })
    }, [answer, answerIsCorrect]),
  })

  useEffect(() => {
    if (answerIsCorrect) {
      playR()
    } else {
      playW()
    }
  }, [answerIsCorrect])

  const answerYes = useCallback(() => {
    setAnswer('yes')
    setAnswerIsCorrect(correctAnswer === 'yes')
  }, [setAnswer])

  const answerNo = useCallback(() => {
    setAnswer('no')
    setAnswerIsCorrect(correctAnswer === 'no')
  }, [setAnswer])

  const thumbsUpMode =
    answer === null
      ? 'active'
      : answer === 'yes'
      ? answerIsCorrect
        ? 'right'
        : 'wrong'
      : 'disabled'

  const thumbsDownMode =
    answer === null
      ? 'active'
      : answer === 'no'
      ? answerIsCorrect
        ? 'right'
        : 'wrong'
      : 'disabled'

  return (
    <Wrapper>
      <SvgThumbsUp mode={thumbsUpMode} onClick={answerYes} />
      <SvgThumbsDown mode={thumbsDownMode} onClick={answerNo} />
    </Wrapper>
  )
}

YesOrNo.propTypes = {
  correctAnswer: PropTypes.string,
  urlRightAnswerExplanation: PropTypes.string,
  urlWrongAnswerExplanation: PropTypes.string,
  onComplete: PropTypes.string,
}
