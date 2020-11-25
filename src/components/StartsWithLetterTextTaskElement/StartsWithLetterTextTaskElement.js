import React from 'react'
import { Card } from '../Card'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { CenterWrapper } from './CenterWrapper'
import { InnerWrapper } from './InnerWrapper'
import { useCompleteState } from '../useCompleteState'
import { colors } from '../colors'
import { TextWord } from '../TextWord'

const AudioButton = loadable(async () => {
  const { AudioButton } = await import('../AudioButton')
  const LoadableAudioButton = (props) => <AudioButton {...props} />
  return LoadableAudioButton
})

export const StartsWithLetterTextTaskElement = ({
  urlAudio,
  text,
  letter,
  actual,
  onComplete,
}) => {
  const { complete, doComplete } = useCompleteState({ actual, onComplete })

  const correctWords = text
    .split('\n')
    .map((line) => line.split(' '))
    .flat()
    .map((str) =>
      str.endsWith('.') || str.endsWith(',') ? str.slice(0, -1) : str
    )
    .map((str) => str.toLowerCase())
    .filter((str) => str.startsWith(letter))

  return (
    <Card first complete={complete}>
      <CenterWrapper>
        <InnerWrapper>
          <AudioButton
            color={actual ? colors.actual : null}
            onComplete={doComplete}
            src={urlAudio}
          />
        </InnerWrapper>
      </CenterWrapper>
      <TextWord text={text} correctWords={correctWords} />
    </Card>
  )
}

StartsWithLetterTextTaskElement.propTypes = {
  urlAudio: PropTypes.string,
  text: PropTypes.string,
  letter: PropTypes.string,
  actual: PropTypes.bool,
  onComplete: PropTypes.func,
}
