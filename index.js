/*
 * createPermutations accepts an array of objects with a key attribute and values attribute.
 * @param `input` - an array of objects with `key` and `values` attibutes
 * @return all possible permutations of objects from `key => value` pairs
 */

const hasAll = keys => {
  return item => {
    // rough comparison of keys
    return '' + Object.keys(item) === '' + keys
  }
}

const reducer = keys => {
  return (output, { key, values }) => {
    values.forEach(value => {
      output.push({ [key]: value })
    })
    const newOutput = []
    output.forEach((item, index) => {
      output.forEach(otherItem => {
        if (item === otherItem) return
        const mashed = { ...otherItem, ...item }
        newOutput.push(mashed)
      })
    })
    return newOutput
  }
}

const createPermutations = (inputs) => {
  const keys = inputs.map(item => item.key)
  return inputs.reduce(reducer(keys), [])
    .filter(hasAll(keys))
}

module.exports = createPermutations
