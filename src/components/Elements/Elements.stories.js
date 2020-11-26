import React from 'react'
import { Elements } from './Elements'

const Template = (args) => <Elements {...args} />

export default {
  title: 'Elements/Elements',
  component: Elements,
  argTypes: { onComplete: { action: 'onComplete' } },
}

export const BasicElements = Template.bind({})
BasicElements.args = {
  elements: [
    {
      letter: 'a',
      texto: 't6',
      text: 'Letra A',
      type: 'StartsWithLetterTextTask',
      urlAudio: 'a1.m4a',
      urlAudios: null,
      urlVideo: null,
      words: null,
    },
    {
      texto: 't3',
      type: 'Audio',
      urlAudio: 'a1.m4a',
    },
    {
      letter: null,
      texto: 'Boca falando o som "ã"',
      type: 'Video',
      urlVideo: 'small.mp4',
    },
    {
      letter: 'A',
      texto: 't2',
      type: 'LetterAndAudio',
      urlAudio: 'a1.m4a',
    },

    // {
    //   letter: null,
    //   texto: 't5',
    //   text: null,
    //   type: 'Audio',
    //   urlAudio: 'a2.m4a',
    //   urlAudios: null,
    //   urlVideo: null,
    //   words: null,
    // },
    {
      letter: null,
      texto: 't4. certa, errada',
      text: null,
      type: 'CheckFirstLetter',
      urlAudio: null,
      urlAudios: ['a1.m4a', 'a2.m4a', 'a3.m4a'],
      urlVideo: null,
      words: [
        {
          word: 'beleza',
          urlWord: 'a1.m4a',
          startsWithTheLetter: false,
          urlRightAnswerExplanation: 'a2.m4a',
          urlWrongAnswerExplanation: 'a3.m4a',
        },
        // {
        //   word: 'alimento',
        //   urlWord: 'a1.m4a',
        //   startsWithTheLetter: true,
        //   urlRightAnswerExplanation: 'a2.m4a',
        //   urlWrongAnswerExplanation: 'a3.m4a',
        // },
      ],
    },
  ],
}
