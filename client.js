console.log('in client.js');

// FUNCTIONAL PROGRAMMING
// Modeling applications in such a way that functions play a pivotal role
// in the way data transfers through the application

// IMPERATIVE: Code that focuses on HOW to accomplish a task -->
// code that does what we tell it to do
// versus
// DECLARATIVE: Angular is considered declarative -->
// you declare in your markup WHAT you want to have happen, and Angular
// figures out how to make ithappen

// FUNCTIONAL PROGRAMMING seeks to use PATTERNS that have been tried and proven
// ideas that have been around for many years

// PURE FUNCTIONS & SIDE-EFFECTS
// foo is not necessarily a function from a functional programming perspective
// foo accomplishes nothing more than simply logging the parameters
function foo(x,y,z,w) {
  console.log(x,y,z,w);
}

// bar function calls the foo function
// bar is not necessarily a function from a functional programming perspective
// bar accomplishes nothing more than simply calling foo, a non-function
// x=2 is default ES6 parameter
// ...args is the rest or gather operator --> gathers the arguments into an arguments array
function bar(x=2,...args) {
              // ...args spreads out the array as individual positional parameters
  return foo(x,42,...args);
}

bar(); // 2 42 undefined undefined

bar(3,8,11);  // 3 42 8 11

bar(...[6,5]);  // 6 42 5 undefined



// a function without a return statement is simply a procedure
// a function must actually return a value
function foo2(x,y) {
  return [x + 1, y - 1];
}

var [a,b] = foo(...[5,10]);

a;  // 6
b;  // 9



// math detour
// f of x is 2 x squared + 3
// solve for x
f(x) = 2x² + 3
// true representation of above in JS:
function f(x) {
  return 2 * Math.pow(x,2) + 3;
};


function f2() {
  y = 2 * Math.pow(x,2) + 3;
}

var x, y;

x = 0;
f2();
y;  // 3

x = 2;
f2();
y;  // 11
