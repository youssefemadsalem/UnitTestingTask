function getCharactersCount(str) {
  const counts = {};

  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  return counts;
}

module.exports = getCharactersCount;
