const promiseOne = new Promise(function(resolve , reject){
    //Do an asyn task
    //DB calls , crytography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async 2 reolved");
        resolve()
    },1000)
}).then (function(){
    console.log("Aysnc 2 resolved");
})
 


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username :  "chai", email : "chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve ({username :"hitesh" , password : "123"})

        } else{
            reject('error:something went wrong')
        }
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);
}).catch()