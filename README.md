# Challenge 1
## the one with all the permutations

We have an array of objects in the form

```
{
  key: 'blah',
  values: [1, 2, 3]
}
```

We want to create an array of objects whereby each possible permutation of value combinations is represented such that the input:

```
[{
  key: 'foo',
  values: [true, false]
}, {
  key: 'bar',
  values: [1, 2]
}]
```

would return:

```
[{
  foo: true,
  bar: 1
}, {
  foo: true,
  bar: 2
}, {
  foo: false,
  bar: 1
}, {
  foo: false,
  bar: 2
}]
```

See the tests in `__tests__` for examples of the expected output.

The `index.js` file has a function outline for you to write your answer into and push up here, openning a pull request so people can discuss the best implementation. Use the tests in `__tests__/index.test.js` (written for jest) to help you.

### to install

`npm i`

### to run the tests

`npm test`

run the tests with the watch flag by running `npm test -- --watch`
