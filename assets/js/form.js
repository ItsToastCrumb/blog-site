//VARIABLE DECLARATIONS
const submitButton = document.querySelector('#submit');
const blogFormEl = document.querySelector('#blogForm');
const usernameEl = document.querySelector('#username');
const titleEl = document.querySelector('#title');
const blogPostEl = document.querySelector('#content');

// let blogArray = [];

//Event listener to store information in local storage when user clicks the submit button
blogFormEl.addEventListener('submit', function(event) {
    event.preventDefault();

    //Alert user if any fields are blank
    if (usernameEl.value === '' || titleEl.value === '' || blogPostEl.value === ''){  
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

    const storedBlogs = JSON.parse(localStorage.getItem('blogArray'));

    //Push object with blog info into array
    blogArray.push(blogPosts);
    
    // //Store array into local storage using JSON
    localStorage.setItem('blogArray', JSON.stringify(blogArray));
    
    //Redirect to blog posts page with new post updated
    window.location.href = "https://itstoastcrumb.github.io/blog-site/blog";

}})

function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogArray'));

    if (storedBlogs !== null) {
        blogArray = storedBlogs;
    }
}

init();