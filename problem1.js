function isSeatBooked (seat, reservedSeats) {
  for (const r of reservedSeats) {
    if (seat[0] === r[0] && seat[1] === r[1]) {
      return true
    }
  }
  return false
}

function isThereRoomForAFamily (potentialSeats, reservedSeats) {
  for (const s of potentialSeats) {
    if (isSeatBooked(s, reservedSeats) === true) return false
  }
  return true
}

function howManyFamilies (rows = 5, reservedSeats) {
  let numberOfFamilies = 0

  for (let row = 1; row <= rows; row++) {
    for (let seat = 1; seat <= 6; seat++) {
      if (seat % 2 === 0) {
        const potentialSeats = [
          [row, seat],
          [row, seat + 1],
          [row, seat + 2],
          [row, seat + 3]
        ]

        if (isThereRoomForAFamily(potentialSeats, reservedSeats)) {
          numberOfFamilies++
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
