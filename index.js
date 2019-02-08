/*
 * createPermutations accepts an array of objects with a key attribute and values attribute.
 * @param `input` - an array of objects with `key` and `values` attibutes
 * @return all possible permutations of objects from `key => value` pairs
 */
const createPermutations = (inputs) => {
  let permutations = []
  inputs.forEach(i => {
    permutations = appendPermutations(i.key, i.values, permutations)
  })
  return permutations
}

const appendPermutations = (key, values, running) => {
  if (!running.length) {
    return values.reduce((acc, curr) => {
      return [...acc, { [key]: curr }]
    }, [])
  }

  const updated = []
  values.forEach(v => {
    running.forEach(r => {
      updated.push({ ...r, [key]: v })
    })
  })
  return updated
}

module.exports = createPermutations
