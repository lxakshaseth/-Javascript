// type of memory
// 1 . stack {primitive}    2. heap map  {non primitive}

// let mytarget = " to get job"

// let interview = mytarget

// interview = "js pratcie"

// console.log(interview);
// console.log(mytarget);


// heap concept

let userone = {
    email : "test@gmail.com",
    upi : "test@sbi..k"


}

let usertwo = userone 

usertwo.email = "tessst@gmail.com"
usertwo.upi = "tyestttttt@sbi-y"
console.log(usertwo);