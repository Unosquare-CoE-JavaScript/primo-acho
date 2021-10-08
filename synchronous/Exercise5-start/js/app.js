//Create a function that will retrieve the posts from the jsonplaceholder site (https://jsonplaceholder.typicode.com/posts). Set up the function so you can pass in the userID and the function will assign only the posts for that user to a variable. The data should be stored in an array.

async function FilterComments(userID) {
    let posts = [];
    let URL = "https://jsonplaceholder.typicode.com/posts";
    posts = await fetch(URL).then(data=>data.json());
    let userPosts = posts.filter(post=>post.userId===userID);
    console.log(userPosts);
}

FilterComments(5);