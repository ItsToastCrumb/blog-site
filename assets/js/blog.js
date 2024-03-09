//VARIABLE DECLARATIONS
const backButtonEl = document.querySelector('#backButton');

//Back Button to return to blog entry form page
backButtonEl.addEventListener('click', function(event) {
    event.preventDefault();

    window.location.href = "https://itstoastcrumb.github.io/blog-site/";
});