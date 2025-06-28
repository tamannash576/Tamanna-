//PROMISES TASK
//Task 1  : Create a promise that resolves if a number is even, rejects if odd.

/*function check(a){
 return new Promise((resolve,reject)=>{
    if(a%2==0){
        resolve("your number is even")
    } else{
        reject("your number is odd")
    }
});
}
check(6).then((msg)=>{
    console.log(msg)
})*/ 

//Task2  : Create a promise that returns a number, then chain .then() to multiply by 2, then by 3.

/*let numPromise=new Promise((resolve)=>{
    resolve(3);
});
numPromise
    .then(num => {                                                 //Har .then() ka output next .then() me chala jata hai.
        console.log("Step 1:", num);
        return num * 2;
    })
    .then(num => {
        console.log("Step 2:", num);
        return num * 3;
    })
    .then(result => {
        console.log("Final Result:", result); 
    });*/

//Task3: Check username and password with a Promise.
    

/*function login(username,password){
        return  new Promise((resolve,reject)=>{
            if(username==="Tamanna" && password==="1234"){
                resolve("login sucessfully")
            }else{
                reject("your password is incorrect")
            }
        });
    }
        login("Tamanna","1234").then((msg)=>{
            console.log(msg)
        }).catch((err=>{
            console.log(err)
        }));*/


//FETCH() TASK

//Task: Use fetch() to get user data and log their name.

/*fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response=>response.json())
.then(data=>{
    console.log("user name",data.name);
})
.catch(error => {
        console.error("Error fetching user:", error);
    });*/



    
