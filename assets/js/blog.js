//VARIABLE DECLARATIONS
const backButtonEl = document.querySelector('#backButton');
const blogListEl = document.querySelector('#blogList');

// let blogArray = [];

//Back Button to return to blog entry form page
backButtonEl.addEventListener('click', function(event) {
    event.preventDefault();

    window.location.href = "https://itstoastcrumb.github.io/blog-site/";
});

//Assigns function to declared variable that will display list of blog posts
function renderBlog() {
    for (let i = 0; i < blogArray.length; i++) {
        const blogs = blogArray[i];

        //Creating elements for blog posts
        const newPost = document.createElement('li');
        const blogContent = document.createElement('div');
        const blogHeader = document.createElement('div');
        const blogBody = document.createElement('div');
        const blogFooter = document.createElement('div');

        //Update content of created elements
        blogHeader.textContent = blogs.title;
        blogBody.textContent = blogs.blog;
        blogFooter.textContent = `Written by: ${blogs.username}.`;
        
        //Append new elements to HTML
        blogContent.appendChild(blogHeader);
        blogContent.appendChild(blogBody);
        blogContent.appendChild(blogFooter);

        newPost.appendChild(blogContent);

        blogListEl.appendChild(newPost);

        //Style elements in blog list
        blogContent.setAttribute('style', 'border: 2px solid rgb(128, 128, 128); margin: 10px');
        blogHeader.setAttribute('style', 'border: 2px solid rgb(128, 128, 128); font-size: 48px; padding: 10px');
        blogBody.setAttribute('style', 'font-size: 32px; margin: 15px')
        blogFooter.setAttribute('style', 'color: rgb(128, 128, 128); font-size: 24px; margin: 5px 40px');
    }
}

//Pull blog info from local storage
function init() {
    const storedBlogs = JSON.parse(localStorage.getItem('blogArray'));

    if (storedBlogs !== null) {
        blogArray = storedBlogs;
    }

    renderBlog();
}

init();