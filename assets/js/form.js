//VARIABLE DECLARATIONS
const submitButton = document.querySelector('#submit');
const blogFormEl = document.querySelector('#blogForm');
const usernameEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const blogPostEl = document.querySelector('#content');
let inputs = document.querySelector('input');

const blogArray = [];

//Event listener to store information in local storage when user clicks the submit button
blogFormEl.addEventListener('submit', function(event) {
    event.preventDefault();

    //Alert user if any fields are blank
    if (inputs.value === ''){  
        alert('Please fill in all fields in order to make the blog post.');
        return;
    } else {
        
    //Collect info from user input of form
    let nameInput = usernameEl.value;
    let titleInput = titleEl.value;
    let blogInput = blogPostEl.value;
    
    //Object to store blog info
    let blogPosts = {
        username: nameInput,
        title: titleInput,
        blog: blogInput
    }

    console.log(blogPosts);

    //Push object with blog info into array
    blogArray.push(blogPosts);

    console.log(blogArray);
    
    // //Store array into local storage using JSON
    // localStorage.setItem(blogArray);
    
    // //Redirect to blog posts page with new post updated
    // window.location.href = "https://itstoastcrumb.github.io/blog-site/blog";

}})