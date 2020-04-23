
function isSeatBooked (seat, reservedSeats) {
  for (const r of reservedSeats) {
    // if the seat matches one of the reserved seats then its booked, true!
    if (seat[0] === r[0] && seat[1] === r[1]) {
      return true
    }
  }
  // if none of them are matches then its free!
  return false
}

function isThereRoomForAFamily (potentialSeats, reservedSeats) {
  // go through all of the potential seats that we want an answer to
  for (const s of potentialSeats) {
    // if any  of them are booked the answer is no!
    if (isSeatBooked(s, reservedSeats) === true) return false
  }
  // if not the answer is yes!
  return true
}

function howManyFamilies (rows = 5, reservedSeats) {
  // the counter to add up our result
  let numberOfFamilies = 0

  // go through every row
  for (let row = 1; row <= rows; row++) {
    // go through every seat, stop at 6 as this is the last option
    for (let seat = 1; seat <= 6; seat++) {
      // only continue if the seat is an even number
      if (seat % 2 === 0) {
        // these are the seats that we need to be available
        const potentialSeats = [
          [row, seat],
          [row, seat + 1],
          [row, seat + 2],
          [row, seat + 3]
        ]

        // if there is room for a family
        if (isThereRoomForAFamily(potentialSeats, reservedSeats)) {
          // add that family to the count
          numberOfFamilies++
          // go to the next available space, so that we don't count a spot twice. (its three because the loop always adds 1)
          seat += 3
        }
      }
    }
  }

  console.log({ numberOfFamilies })
  return numberOfFamilies
}

howManyFamilies(3, [[1, 2], [1, 3], [1, 8], [2, 6], [3, 1], [3, 10]]) // 4
howManyFamilies(2, [[2, 1], [1, 8], [2, 6]]) // 2
howManyFamilies(4, [[4, 3], [1, 4], [4, 6], [1, 7]]) // 4

// My Approach
// - Very literal
// - Aimed for easiest conceptual approach
// - Small example => no real consequences for inefficiency
// - Attempt to break up code to single purpose functions

// Improvements/Limitations
// - So many loops! processing time would grow with the theatre & booking size! for every check through a row an additonal 3 loops are used!!!
// - If this would be used in production code I would do further research on searching/booking style algorythms
