const twoNumberSum = (array, targetSum) => {
  let residues = {}
  for (let number of array) {
	if (residues[targetSum - number]) return [residues[targetSum - number], number]
    else residues[number] = number
  }
  return []
}

// Do not edit the line below.
module.exports = { twoNumberSum }
