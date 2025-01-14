const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// i know c# is an object oriented language but holy moly 
// i feel like doing some c# helped me get comfortable with
// all the dot stuff
button.addEventListener('click', () => {
    if (input.value != '') { 
        // making new element friends
        const li = document.createElement('li');
        const deleteButton = document.createElement('button')

        // making sure there's actual content in my new elements
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = '';

    }
})