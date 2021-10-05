var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    /*
    Change this code to use async await. Make sure to use promise.all so that we await all three pieces of data without awaiting each individually which would take much longer.

    Which pattern do you prefer for this application? promises or async await?
    */
    (async function (){
        let posts = fetch(url + 'posts/')
    .then(response1 => response1.json());

    let comments = fetch(url + 'comments/')
    .then(response2 => response2.json())

    let todos = fetch(url + 'todos/')
    .then(response3 => response3.json())

    let results = await Promise.all([posts, comments, todos]);
    nsp.posts = results[0];
    nsp.comments = results[1];
    nsp.todos = results[2];
    console.log("Remaining Code.")
    })()

    //public
    return nsp;
})(MAINAPP || {});

