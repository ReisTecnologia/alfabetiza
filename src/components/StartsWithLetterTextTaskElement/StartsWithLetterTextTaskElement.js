import React from 'react'
import { Card } from '../Card'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { CenterWrapper } from './CenterWrapper'
import { InnerWrapper } from './InnerWrapper'
import { useCompleteState } from '../useCompleteState'
import { Text } from '../Text'

const AudioButton = loadable(async () => {
  const { AudioButton } = await import('../AudioButton')
  return props => <AudioButton {...props} />
})

export const StartsWithLetterTextTaskElement = ({ urlAudio, text, letter }) => {
  const { complete, doComplete } = useCompleteState()

  const correctWords = text
    .split('\n')
    .map(line => line.split(' '))
    .flat()
    .map(str =>
      str.endsWith('.') || str.endsWith(',') ? str.slice(0, -1) : str
    )
    .map(str => str.toLowerCase())
    .filter(str => str.startsWith(letter))

  return (
    <Card first complete={complete}>
      <CenterWrapper>
        <InnerWrapper>
          <AudioButton onComplete={doComplete} src={urlAudio} />
        </InnerWrapper>
      </CenterWrapper>
      <Text text={text} correctWords={correctWords} />
    </Card>
  )
}

StartsWithLetterTextTaskElement.propTypes = {
  urlAudio: PropTypes.string,
  text: PropTypes.string,
  letter: PropTypes.string,
}
