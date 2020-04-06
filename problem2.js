function vetoNext (team, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === team) return arr.splice(i, 1)
  }
  return arr
}

function vote (senators) {
  senators = senators.split('')
  while (senators.length > 1) {
    if (senators[0] === 'D') senators = vetoNext('R', senators)
    else senators = vetoNext('D', senators)
  }
  return senators[0] === 'D' ? 'Radient' : 'Dire'
}

// console.log(vote('RD'))
// console.log(vote('RD'))
// console.log(vote('DR'))
// console.log(vote('DRDR'))
// console.log(vote('RRRDDD'))
