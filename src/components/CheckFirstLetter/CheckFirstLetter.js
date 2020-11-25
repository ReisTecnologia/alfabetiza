import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { Wrapper } from './Wrapper'
import { YesOrNo } from '../YesOrNo'
import { Card } from '../Card'
import { Icon } from '../Icon'
import { colors } from '../colors'

const AudioButton = loadable(async () => {
  const { AudioButton } = await import('../AudioButton')
  const LoadableAudioButton = (props) => <AudioButton {...props} />
  return LoadableAudioButton
})

export const CheckFirstLetter = ({ src, words, actual }) => {
  const [state, setState] = useState({
    instructionsCompleted: false,
    showYesIcon: false,
    showNoIcon: false,
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

  const onStepComplete = useCallback(
    (step) =>
      setState((state) => ({
        ...state,
        showYesIcon: step === 0,
        showNoIcon: step === 1,
      })),
    [setState]
  )

  const onStepStart = useCallback(
    () =>
      setState((state) => ({
        ...state,
        showYesIcon: false,
        showNoIcon: false,
      })),
    [setState]
  )

  return (
    <Card>
      <Wrapper>
        <AudioButton
          src={src}
          onStepStart={onStepStart}
          onStepComplete={onStepComplete}
          width={20}
          loop={true}
          color={actual && !instructionsCompleted ? colors.actual : null}
          onComplete={setInstructionsCompleted}
        />
        {state.showYesIcon && <Icon shape="ThumbsUp" />}
        {state.showNoIcon && <Icon shape="ThumbsDown" />}
        {showYesOrNo ? (
          <YesOrNo
            color={actual && instructionsCompleted ? colors.actual : null}
            correctAnswer={actualWord.startsWithTheLetter ? 'yes' : 'no'}
            urlRightAnswerExplanation={actualWord.urlRightAnswerExplanation}
            urlWrongAnswerExplanation={actualWord.urlWrongAnswerExplanation}
            onComplete={setAnswered}
          />
        ) : (
          <AudioButton
            beforeTrailCount={actualWordIndex}
            afterTrailCount={words.length - actualWordIndex - 1}
            color={actual && instructionsCompleted ? colors.actual : null}
            disabled={end}
            icon="Play"
            src={urlWord}
            width={20}
            onComplete={setListened}
          />
        )}
      </Wrapper>
    </Card>
  )
}

CheckFirstLetter.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.arrayOf(PropTypes.string.isRequired),
  ]),
  actual: PropTypes.bool,
  words: PropTypes.array,
}
