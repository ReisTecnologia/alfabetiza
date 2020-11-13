import React, { useState } from "react";
import { Wrapper } from "./Wrapper";
import PropTypes from "prop-types";
import { Paragraph } from "./Paragraph";

import { getParagraphWordsIndexes } from "./getParagraphWordsIndexes";
import { addOrRemoveFromArray } from "./addOrRemoveFromArray";

export const Text = ({ text, correctWords }) => {
  const paragraphs = text.split("\n");

  const notEmpty = (text) => text.trim(text) !== "";
  const paragraphsWords = paragraphs
    .filter(notEmpty)
    .map((paragraph) => paragraph.trim().split(" "));

  const [correctClickedWords, setCorrectClickedWords] = useState([]);
  const [wrongClickedWords, setWrongClickedWords] = useState([]);

  const clickedWords = [];

  const toggleWord = (_, { paragraphIndex, wordIndex }) => {
    const clickedWordAddress = { paragraphIndex, wordIndex };
    const wordWithPunctuation = paragraphsWords[paragraphIndex][wordIndex];
    const punctuation = /[.,]/;
    let word = {};
    if (wordWithPunctuation.search(punctuation) !== -1) {
      word = wordWithPunctuation.slice(0, -1);
    } else {
      word = wordWithPunctuation;
    }
    const isCorrect = !!correctWords.find(
      (correctWord) => correctWord.toLowerCase() === word.toLowerCase()
    );
    if (isCorrect) {
      addOrRemoveFromArray(
        correctClickedWords,
        clickedWordAddress,
        setCorrectClickedWords
      );
    } else {
      addOrRemoveFromArray(
        wrongClickedWords,
        clickedWordAddress,
        setWrongClickedWords
      );
    }
  };

  return (
    <Wrapper>
      {paragraphsWords.map((singleParagraphWords, paragraphIndex) => (
        <Paragraph
          key={paragraphIndex}
          words={singleParagraphWords}
          paragraphIndex={paragraphIndex}
          onWordClick={toggleWord}
          correctWords={getParagraphWordsIndexes(
            correctClickedWords,
            paragraphIndex
          )}
          wrongWords={getParagraphWordsIndexes(
            wrongClickedWords,
            paragraphIndex
          )}
        />
      ))}
    </Wrapper>
  );
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  correctWords: PropTypes.arrayOf(PropTypes.string),
};
