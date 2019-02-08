/*
 * createPermutations accepts an array of objects with a key attribute and values attribute.
 * @param `input` - an array of objects with `key` and `values` attibutes
 * @return all possible permutations of objects from `key => value` pairs
 */
const createPermutations = (inputs) => {
  const result = []
  
  const helper = (obj, i) => {
    const {
      key,
      values
    } = inputs[i]
    
    values.forEach((val) => {
      const a = {
        ...obj,
        [key]: val
      }

      if (i === inputs.length-1) {
        result.push(a)
      } else {
        helper(a, i+1)
      }
    })
  }

  helper({}, 0);

  return result
}

module.exports = createPermutations