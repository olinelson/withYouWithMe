// Format: Row, Col

// forbidden columns: 1 & 10

function isSeatBooked (seat, reservedSeats) {
  console.log('is this iseat booked', { seat })
  for (const r of reservedSeats) {
    if (seat[0] === r[0] && seat[1] === r[1]) {
      console.log({ seat }, 'is booked')
      return true
    }
  }
  return false
}

function howManyFamilies (rows = 5, reservedSeats) {
//   console.log(reservedSeats)

  let numberOfFamilies = 0

  for (let row = 1; row <= rows; row++) {
    console.log({ row })
    for (let seat = 1; seat <= 10; seat++) {
    //   if (seat % 2 === 0) {
      if (
        isSeatBooked([row, seat], reservedSeats) &&
        isSeatBooked([row, seat + 1], reservedSeats) &&
        isSeatBooked([row, seat + 2], reservedSeats) &&
        isSeatBooked([row, seat + 3], reservedSeats)
      )
      {
        console.log('in condition')
        numberOfFamilies++
      }
      // console.log('is seat booked', isSeatBooked([row, seat], reservedSeats))
      // if (seat)
      // const familySpace = 0
      // console.log({ seat })
    //   }
    }
  }

  console.log({ numberOfFamilies })
  return numberOfFamilies
}

howManyFamilies(3, [[2, 1], [1, 8], [2, 6]]) // 4
