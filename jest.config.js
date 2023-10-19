const jestConfig = {
    verbose: true,
    testURL: "http://localhost/",
    'transform': {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__test__/**-test.js'],
  }
  
  module.exports = jestConfig