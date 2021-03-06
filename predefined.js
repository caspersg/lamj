var curry = require('lodash.curry')

// basic maths
var jsPlus = function(x,y) { return x + y }
var jsMinus = function(x,y) { return x - y }
var jsMultiply = function(x,y) { return x * y }
var jsDivide = function(x,y) { return x / y }
var jsModulus = function(x,y) { return x % y }

// boolean
//var and = function(x) { return function(y) { return x && y } }
//var or = function(x) { return function(y) { return x || y } }
//var not = function(x) { return ! x }

// comparisons
var jsLessThan = function(x,y) { return x < y }
var jsLessThanEqual = function(x,y) { return x <= y }
var jsEqual = function(x,y) { return x == y }

// string parsers
var toInt = function(s) { return parseInt(s, 10)}
var toFloat = function(s) { return parseFloat(s, 10)}
var toBool = function(s) { return s.toLowerCase() == "true" }

// toString
var toString = function(o) { return o.toString() }

// uncurry, to use with javascript libraries
// only curried functions can actually be called in lamj though
var uncurry = function(curriedFunc) {
  // returns a function which will, for each argument, call the curried function on each.
  // basically popping each curried argument, depending on the arguments called
  return function() {
    var func = curriedFunc;
    for(var i = 0, j = arguments.length; i < j; i++) {
        func = func(arguments[i]);
    }
    return func;
  }
}
