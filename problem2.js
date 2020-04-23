function vetoNext (team, arr) {
  // go through all the senators one by one
  for (let i = 0; i < arr.length; i++) {
    // if we find a team member who has been vetoed, we remove him from the list and return the edited array
    if (arr[i] === team) {
      // * edit here, was initially returning the removed item 😳
      arr.splice(i, 1)
      return arr
    }
  }
  return arr[0]
}

function vote (senators) {
  // turn the string of leters into an array
  senators = senators.split('')
  // while there is more than one senator
  while (senators.length > 1) {
    // if the current senator is dire it votes out the next radient
    if (senators[0] === 'D') senators = vetoNext('R', senators)

    // else if the current senator is radient it votes out the next dire
    else senators = vetoNext('D', senators)
  }
  return senators[0] === 'R' ? 'Radient' : 'Dire'
}

console.log(vote('RD'))
console.log(vote('RD'))
console.log(vote('DR'))
console.log(vote('DRDR'))
console.log(vote('RRRDDD'))
console.log(vote('RRRRD'))
console.log(vote('RRRRR'))
