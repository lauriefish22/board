import { signUp } from '../fetch.utils.js';

const signUpForm = document.querySelector('.sign-up');

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);

    alert(data.get('email') + data.get('password'));

    const user = await signUp(data.get('email'), data.get('password'));
});
