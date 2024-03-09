//VARIABLE DECLARATIONS
const submitButton = document.querySelector('#submit');
const blogFormEl = document.querySelector('blogForm')

//Event listener to store information in local storage when user clicks the submit button
blogFormEl.on('submit', function(event) {
    event.preventDefault();

    //Redirect to blog posts page with new post updated
    window.location.href = "https://itstoastcrumb.github.io/blog-site/blog";

})