var customMatchers = {
  toBeCustomTest: function () {
    return {
      compare: function(actual, expected) {
        var isPassed = (actual === expected);
        return {
            pass: isPassed,
            message: 'Value  ' + actual + ' is' + (isPassed ? '' : ' not') + ' equal to ' + expected
        }
      }
    }
  }
}
