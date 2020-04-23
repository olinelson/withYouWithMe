function maxOcurrences (s, maxLetters, minSize, maxSize) {
  // to store the 'hits' / occurances of substrings
  const hits = {}
  // to store the current highest occurrance in hits
  let biggestNum = 0

  // create an array from the string provided
  const stringArray = s.split('')

  // loop through all the letters in the array
  for (let i = 0; i < stringArray.length; i++) {
    // loop through letters in array after i to create selection
    for (let j = i; j < stringArray.length; j++) {
      // create a selection from position of i and j + 1
      const selection = stringArray.slice(i, j + 1)

      if (
        // if number of unique letters is smaller than or equals the max letters specified
        numberOfLetters(selection) <= maxLetters &&
        // and its bigger than or equal to the min size
        selection.length >= minSize &&
        // and its smaller than or equal to the maxSize
        selection.length <= maxSize
      ) {
        // create a string from our selection
        const word = selection.join('')
        // if it exists in our hits record a new entry, other wise create one.
        hits[word] ? hits[word] += 1 : hits[word] = 1
        // if this word in hits occurs more than biggestNum then make it the new biggest num
        if (hits[word] > biggestNum) {
          biggestNum = hits[word]
        }
      }
    }
  }
  // return the biggest Num - is the maximum number of ocurrences
  return biggestNum
}

// to find the number of unique letters in a selection
function numberOfLetters (arr) {
  const bucket = []

  for (const letter of arr) {
    // if we don't have a letter, add it to bucket
    if (bucket.indexOf(letter) === -1) bucket.push(letter)
  }
  return bucket.length
}

// console.log(maxOcurrences('aababcaab', 2, 3, 4)) // 2
// console.log(maxOcurrences('aaaa', 1, 3, 3)) // 2
// console.log(maxOcurrences('aabcabcab', 2, 2, 3)) // 3
// console.log(maxOcurrences('abcde', 2, 3, 3)) // 0
