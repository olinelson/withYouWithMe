function maxOccurrances (s, maxLetters, minSize, maxSize) {
  const hits = {}
  let biggestNum = 0

  const stringArray = s.split('')

  for (let i = 0; i < stringArray.length; i++) {
    for (let j = i; j < stringArray.length; j++) {
      const selection = stringArray.slice(i, j + 1)

      if (
        numberOfLetters(selection) <= maxLetters &&
        selection.length >= minSize &&
        selection.length <= maxSize
      ) {
        const word = selection.join('')
        hits[word] ? hits[word] += 1 : hits[word] = 1

        if (hits[word] > biggestNum) {
          biggestNum = hits[word]
        }
      }
    }
  }
  return biggestNum
}

function numberOfLetters (arr) {
  const bucket = []

  for (const letter of arr) {
    if (bucket.indexOf(letter) === -1) bucket.push(letter)
  }
  return bucket.length
}

// console.log(maxOccurrances('aababcaab', 2, 3, 4)) // 2
// console.log(maxOccurrances('aaaa', 1, 3, 3)) // 2
// console.log(maxOccurrances('aabcabcab', 2, 2, 3)) // 3
// console.log(maxOccurrances('abcde', 2, 3, 3)) // 0
