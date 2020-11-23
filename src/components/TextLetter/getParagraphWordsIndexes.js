const filterByParagraph = (filteredParagraphIndex) => ({ paragraphIndex }) =>
  paragraphIndex === filteredParagraphIndex

const filterByWord = (filteredWordIndex) => ({ wordIndex }) =>
  wordIndex === filteredWordIndex

export const getParagraphWordsIndexes = (
  clickedWords,
  paragraphIndex,
  wordIndex
) =>
  clickedWords
    .filter(filterByParagraph(paragraphIndex))
    .map(({ wordIndex }) => wordIndex)
    .filter(filterByWord(wordIndex))
    .map(({ letterIndex }) => letterIndex)
