// JavaScript run code line by line
// this mean a code that takes time to execute will prevent other line of code from executing
// Asynchronous help us to allow other code runs while the intial code takes time
// Asynchronous pattern are
// 1. CallBack 2. Event 3. Promise 4. Async/ Await

// with what was taught there is need to create a feedback to know when the long time code has finish loading
// CallBack
const displayDiv = document.getElementById('display')

setTimeout(function(){
    cb('I am hungry')
}, 2000)

function cb(value){
    displayDiv.innerHTML =value
}


// promise



const displayPromise = new Promise(function(resolve, reject){
    const successful =true;
   
setTimeout(function () {

     if(successful){
    resolve({
        successful:true,
    });
    } else{
        reject({
            successful:false
        })
    }
}, 10000);
});


// .then(use to listen to result) will only work because we have resolve. 
// If it is reject the below would run. the if statement was added later for clarifiction

displayPromise.then(function(data){
    console.log(data, "this is for success")
})

// the .catch is use to listen to the event when it is false
// or rejected
displayPromise.catch(function(err){
    console.log(err, "from catch")
})