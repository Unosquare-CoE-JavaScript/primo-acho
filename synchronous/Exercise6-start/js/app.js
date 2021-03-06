"use strict";

//Refactor the promise code to create an async function that will take a todo object as a parameter and add the todo to the jsonplaceholder site. Make sure you account for possible errors.


// fetch('https://jsonplaceholder.typicode.com/todos/', {
//     method: 'POST',
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify(todo)
// })
// .then(resp => resp.json())
// .then(obj => console.log(obj))
// .catch(reject => console.log(`Unable to create todo ${reject}`));
(async function () {
    let todo = {
        completed: false,
        userId: 1,
        title: "Learn Promises"
    };
    try {
        let todoObj = await fetch('https://jsonplaceholder.typicode.com/todos/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(todo)
        });
        let todoResponse = await todoObj.json();
        console.log(todoResponse);
    } catch (e) {
        console.log(e);
    }
} )()

console.log('Other code');