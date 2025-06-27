//isfinite                                                       //Checks whether a value is a finite number
/*let salary=350000;
console.log(isFinite(salary))
console.log(isFinite(Infinity));*/

//parsefloat                                                     // Converts string to a floating number
/*let value= '45.76'
console.log(parseFloat(value))
console.log(parseInt(value))*/                                   // Converts string to an integer (with base)

//let intvalue='733'
//console.log(parseInt(intvalue))


//math
/*console.log(Math.PI)
console.log(Math.sin(90))                                             //Returns the sine of an angle.
console.log(Math.cos(30))                                             //Returns the cos of an angle.
console.log(Math.floor(4.8));                                         //Rounds a number down to the nearest whole integer.
console.log(Math.max(2,7,5))                                          //Returns the largest of the provided values.
console.log(Math.min(2,7,5))                                          //Returns the smallest of the provided values.
console.log(Math.pow(2,7))                                            //Raises a number to a power (base^exponent).
console.log(Math.random())                                            //Returns a random decimal between 0 and 1.
console.log(Math.round(2.7))                                          //Rounds a number to the nearest integer.
console.log(Math.ceil(-2.7))                                          //Rounds a number up to the nearest whole number.
console.log(Math.log(1))                                              //Returns the natural logarithm (base e) of a number.*/



//object in built method

/*assign                                                               //Copies properties from one or more source objects to a target object.
const target={a:'Tamanna'};
const source = { b: 'Sharma' };
Object.assign(target, source);
console.log(target);*/

//Object.defineProperty(obj, prop, descriptor)                         // Adds or modifies a property on an object with precise control.

/*const person = {};
Object.defineProperty(person, 'name', {
  value: 'Tamanna',
  writable: false
});
console.log(person.name); */

//Object.entries(obj)                                                  //Returns an array of the object’s own enumerable [key, value] pairs.

/*const value = { name: 'Tamanna', age: 22 };
console.log(Object.entries(value)); */

//Object.freeze(obj)                                                  // no new properties can be added, removed, or changed.

/*const user = { name: 'Tamanna', age:22 };
console.log("before freeze =", user.name='Sharma',user.age=23)
Object.freeze(user);
user.name = 'AVISHA';   
user.age = 25;        
console.log("after freeze",user); */

//Object.seal(obj)                                                    // you can’t add or remove properties, but can modify existing values (if writable).

/*const user = { name: 'Tamanna'};
Object.seal(user);
user.name = 'AVISHA';   
user.age = 25;
console.log(user) */       
