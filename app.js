/* Imports */
import { getPosts, renderPosts } from './fetch.utils.js';

/* Get DOM Elements */
const displayEl = document.querySelector('.post-display');
const loginButton = document.querySelector('#login');
/* State */
let postsData = [];

/* Events */

//user should be able to see a list of posts on load

window.addEventListener('load', async () => {
    const posts = await getPosts();

    postsData = posts;

    displayPosts();
});

loginButton.addEventListener('click', () => {
    window.location.href = './auth';
});

function displayPosts() {
    for (let post of postsData) {
        const postEl = renderPosts(post);
        displayEl.append(postEl);
    }
}

//on load check if user is logged in and if So redirect them to home pageXOffset.toExponential

//Submit the sign in Form.
//get the email and PW from the form
//call signIn auth function with email and PW
//redirect to home page.

//submit sign up form
//get the email and PW from the form
//call signUp auth function with email and PW
//redirect to home page.

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
