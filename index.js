/*
 * createPermutations accepts an array of objects with a key attribute and values attribute.
 * @param `input` - an array of objects with `key` and `values` attibutes
 * @return all possible permutations of objects from `key => value` pairs
 */
const createPermutations = inputs => {
  if (!inputs || !inputs.length) return []

  const restObjects = createPermutations(inputs.slice(1))
  const { key, values } = inputs[0]
  const headObjects = values.map(value => ({ [key]: value }))
  if (!restObjects.length) return headObjects
  return [].concat(
    ...headObjects.map(headObject => restObjects.map(restObject => Object.assign({}, headObject, restObject)))
  )
}

module.exports = createPermutations
