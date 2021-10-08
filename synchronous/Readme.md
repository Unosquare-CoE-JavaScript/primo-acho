### Asynchronous Function Js
- Java Script is single threaded, it means Js only execute one process at a time
- the way JS seems like multithreaded is fo the event loop. The event loop put all async code in a queue and, when it's ready, it is executed
- the native async functions in JS are, setTimeout and setInterval
- the way async functionality becomes sync where the callbacks

------------

###### Promises
- Promises are also async functionality in JS
- a Promise is an event that eventually wil be resolve as success or fail
- the main words in a promise are resolve and reject
- there's another way to process promises. with then and catch(proccessing resolve and reject eachone), and finally which is executed no matter the promise success or fail
- a way to execute two or more promise is promise.all(wait till all promises has been executed) and promise.raice(wait until the first promise has resolved)

------------

###### Async and Await
- async become every function in a promise
- async is the keyword to becomes async code into sync code
- we use await keyword before a promise is executed(or async code like setTimeout)

------------

###### Generators
- generators are functions that execute parcially, in defined actions or blocks of code
- we define a generator with an * before de named function
- to stop a function we use the yield keyword
- when we call that functions until the first block we use fn.next()
- the response is the returned object in the function and a flag that tells us if the function has already finished

