//Asynchronous JavaScript                                           //Ek kaam background me chalu hota hai.Baaki ka code uska wait nahi karta — wo execute hota rehta hai.
//work in three ways
//1.  setTimeout / setInterval

/*let timer=setTimeout(()=>{                                         //Ek baar delay ke baad kaam karta hai
    console.log('hello')
},1000)
clearTimeout(timer)*/                                                //for clear

/*let count=0;
let interval=setInterval(()=>{                                       //Har fixed interval me baar-baar kaam karta hai
    console.log(count)                                               //Repeat hota rahega jab tak roko nahi
    count++
    if(count==5){
        clearInterval(interval)
    }
})*/


//print a table using function ,setintervals
/*function printMultiplesOfEight(number,times) {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        console.log(number* count);
        if (count === times) {
            clearInterval(interval);
        }
    }, 1000);
}

printMultiplesOfEight(8,10);*/

//2.callbacks                                                          //Function ko argument ke roop me pass karte hain, jo baad me call hota hai.

/*function fn1 (cb){
    setTimeout(()=>{
        console.log('step 1 ')
        cb()
    },1000)
}

function fn2(cb){
     setTimeout(()=>{
        console.log('step 2 ')
        cb()
    },1000)
}

function fn3(cb){
     setTimeout(()=>{
        console.log('step 3 ')
        cb()
    },1000)
}

fn1(()=>{
    fn2(()=>{
        fn3(()=>{
            console.log('all done')
        })
    })
})*/

//fetch data                                                          //fetch() ek browser API hai jo server se data lene ke liye use hoti hai – jaise kisi API se JSON data fetch karna.
/*basic syntax
fetch(url)
  .then(response => response.json())
  .then(data => {
    // use data here
  })
  .catch(error => {
    // handle error here
  });

  //examples
/*function fetchData(cb){                                     
     setTimeout(()=>{
         console.log('Data Fetched') // api calling
       cb()
     },2000)
}

 function processData(){
    console.log('processed')
}
fetchData(processData)*/

//example2
/*fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())  // convert response to JSON
  .then(data => {
    console.log("Post data:", data); // use the data
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });*/

  //3. promises                                                                     //Ek object jo future me result (success ya failure) return karega.

  /*let promise = new Promise((resolve, reject) => {
    // async logic 
    let gotMyBack = false
    if (gotMyBack) {
        resolve('your credit is recieved')                                          //Kaam sahi hua
    } else {
        reject("he didn't gave my monay back")                                       //Kaam fail hua
    }
}).then((msg) => {                                                                   //Success pe kya karna hai
    console.log(msg)
}).catch((err) => {                                                                  //Failure pe kya karna hai
    console.log(err)
}).finally(() => {
    console.log('work is done finally')
})*/











