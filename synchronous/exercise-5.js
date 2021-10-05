async function FilterComments(userID) {
    let comments = [];
    let URL = "https://jsonplaceholder.typicode.com/posts";
    comments = await fetch(URL);
    console.log(comments);
}

FilterComments(5);