/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when you use 'this' and it is used without call(), apply(), or bind(), and it becomes global.
* 2. Implicit binding happens when a dot is used to call a function and anything left of the dot is the context for the 'this' in the function.
* 3. New binding allows developers to create an instance of a object type that has a constructor function.
* 4. Explicit binding occurs when .call(), .apply(), and .bind() are used in a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function phoneRings(rings) {
    console.log(this);
    return rings;
}
phoneRings("Ring, ring");

// Principle 2

// code example for Implicit Binding



// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding