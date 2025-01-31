// form nonsense
const password = document.querySelector('#password');
const passwordAgain = document.querySelector('#passwordAgain');
const feedback = document.querySelector('#feedback');

// focusout = clicking outside the box = un-focusing from this id's box
passwordAgain.addEventListener('focusout', check)

function check() {
    if (password.value !== passwordAgain.value) {
        console.log('values do not match');
        password.value = '';
        passwordAgain.value = '';
        password.focus();
        feedback.textContent = "Password doesn't match. Try again.";
    } else {
        console.log('they match woo');
        feedback.textContent = '';
    }
}

