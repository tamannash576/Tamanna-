//string =collection of char in upper qoutes
/*let name='tamanna'
let name2='sharma'
console.log(name.length)              //to find length
console.log(name.concat(" ",name2))   //join two string
*/

//split
/*let str="apple,banana,orange"
console.log(str.split(","))*/

//indexof
/*let str="tamanna sharma"
console.log(str.indexOf("tamanna"))*/

//touppercase
/*let str="tamanna sharma"
console.log(str.toUpperCase())*/

//replace
 /*let str="i love cats"
 console.log(str.replace("cats","dogs"))*/

 //trim
 /*let str = "   Hello World   ";
 console.log(str)
console.log(str.trim());*/

//includes
/*let str = "Hello javascript";
console.log(str.includes("javascript")); 
console.log(str.includes("Hi")); */




//homework

    const fruits = [
    { Name: "Apple", count: 4},
    { Name: "Banana", count: 6 },
    { Name: "Mango", count: 6},
     {Name:"Apple",count:1}]
console.log("Simple Array :", fruits)

function addfruits(FruitAdd) {
    const fruitfind = fruits.find(item => item.Name === FruitAdd.Name);
    if (fruitfind) {
        fruitfind.count += 1
    }
    else {
        fruits.push(FruitAdd)
    }
}
addfruits({ Name: "Cherry", count: 1 })
addfruits({ Name: "Watermelon", count: 1 })
addfruits({ Name: "Apple", count: 1 })
addfruits({ Name: "Banana", count: 1 })
console.log( fruits)
