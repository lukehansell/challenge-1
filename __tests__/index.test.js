const createPermutations = require('../')

const testInputOutput = [
  {
    description: 'with one key it returns x permutations where x is the length of the values array',
    input: [{
      key: 'foo',
      values: [true, false]
    }],
    expected: [{
      foo: true
    }, {
      foo: false
    }]
  },
  {
    description: 'with two keys it creates x*y permutations where x is the first keys values and y is the seconds',
    input: [{
      key: 'foo',
      values: [true, false]
    }, {
      key: 'bar',
      values: [1, 2, 3]
    }],
    expected: [{
      foo: true,
      bar: 1
    }, {
      foo: true,
      bar: 2
    }, {
      foo: true,
      bar: 3
    }, {
      foo: false,
      bar: 1
    }, {
      foo: false,
      bar: 2
    }, {
      foo: false,
      bar: 3
    }]
  },
  {
    description: 'with three keys it creates x*y*z permutations where x, y, z are the length of possible values from each object',
    input: [{
      key: 'foo',
      values: [true, false]
    }, {
      key: 'bar',
      values: [1, 2, 3]
    }, {
      key: 'qux',
      values: ['a', 'b']
    }],
    expected: [{
      foo: true,
      bar: 1,
      qux: 'a'
    }, {
      foo: true,
      bar: 2,
      qux: 'a'
    }, {
      foo: true,
      bar: 3,
      qux: 'a'
    }, {
      foo: false,
      bar: 1,
      qux: 'a'
    }, {
      foo: false,
      bar: 2,
      qux: 'a'
    }, {
      foo: false,
      bar: 3,
      qux: 'a'
    }, {
      foo: true,
      bar: 1,
      qux: 'b'
    }, {
      foo: true,
      bar: 2,
      qux: 'b'
    }, {
      foo: true,
      bar: 3,
      qux: 'b'
    }, {
      foo: false,
      bar: 1,
      qux: 'b'
    }, {
      foo: false,
      bar: 2,
      qux: 'b'
    }, {
      foo: false,
      bar: 3,
      qux: 'b'
    }]
  }
]

testInputOutput.forEach(({description, input, expected}) => {
  let result

  beforeEach(() => {
    result = createPermutations(input)
  })

  describe(description, () => {
    test(`length is equal`, () => {
      expect(result.length).toEqual(expected.length)
    })

    test(`all expected are contained in result`, () => {
      expected.forEach((val) => {
        expect(result).toContainEqual(val)
      })
    })
  
    test(`all results are contained in expected`, () => {
      result.forEach((val) => {
        expect(expected).toContainEqual(val)
      })
    })
  })
})
