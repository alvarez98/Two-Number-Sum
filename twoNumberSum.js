const twoNumberSum = (array, targetSum) => {
  let complements = {}
  for (let number of array) {
    if (complements[targetSum - number]) return [number, targetSum - number]
    else complements[number] = number
  }
  return []
}

// Do not edit the line below.
module.exports = { twoNumberSum }
