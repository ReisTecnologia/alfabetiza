import React, { useState, useRef, useCallback } from 'react'
import { useMedia } from '../useMedia'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { AudioWrapper } from './AudioWrapper'
import { PlayWrapper } from './PlayWrapper'
import { CenterWrapper } from './CenterWrapper'
import { Play } from '../Play'
import { YesOrNo } from '../YesOrNo'
import { Card } from '../Card'

const AudioButton = loadable(async () => {
  const { AudioButton } = await import('../AudioButton')
  return props => <AudioButton {...props} />
})

export const CheckFirstLetter = ({ urlAudio, words }) => {
  const [state, setState] = useState({
    instructionsCompleted: false,
    end: false,
    actualWordIndex: 0,
    showYesOrNo: false,
  })

  const { actualWordIndex, showYesOrNo, instructionsCompleted, end } = state
  const actualWord = words[actualWordIndex]
  const urlWord = actualWord.urlWord
  const setListened = () => {
    setState({ ...state, showYesOrNo: true })
  }

  const setInstructionsCompleted = useCallback(
    () => setState({ ...state, instructionsCompleted: true }),
    [setState]
  )

  const setAnswered = () => {
    const thisIsTheEnd = actualWordIndex === words.length - 1
    if (thisIsTheEnd) {
      setState({
        ...state,
        showYesOrNo: false,
        end: true,
      })
    } else {
      setState(({ actualWordIndex }) => ({
        ...state,
        showYesOrNo: false,
        actualWordIndex: actualWordIndex + 1,
      }))
    }
  }

  return (
    <Card>
      <CenterWrapper>
        <AudioWrapper>
          <AudioButton
            disabled={instructionsCompleted}
            src={urlAudio}
            width={20}
            onComplete={setInstructionsCompleted}
          />
        </AudioWrapper>
        <PlayWrapper>
          {showYesOrNo ? (
            <YesOrNo
              correctAnswer={actualWord.startsWithTheLetter ? 'yes' : 'no'}
              urlRightAnswerExplanation={actualWord.urlRightAnswerExplanation}
              urlWrongAnswerExplanation={actualWord.urlWrongAnswerExplanation}
              onComplete={setAnswered}
            />
          ) : (
            <AudioButton
              beforeTrailCount={actualWordIndex}
              afterTrailCount={words.length - actualWordIndex - 1}
              disabled={!instructionsCompleted || end}
              icon="play"
              src={urlWord}
              width={20}
              onComplete={setListened}
            />
          )}
        </PlayWrapper>
      </CenterWrapper>
    </Card>
  )
}

CheckFirstLetter.propTypes = {
  urlAudio: PropTypes.string,
}
