const twoNumberSum = (array, targetSum) => {
  let complements = {}
  for (let number of array) {
    const complement = targetSum - number
    if (complements[complement]) return [number, complement]
    else complements[number] = number
  }
  return []
}

// Do not edit the line below.
module.exports = { twoNumberSum }
