// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

const logInButton = document.querySelector("#auth");

    logInButton.addEventListener('click', () => {
        

        if (logInButton.innerText === "Log in") {
            logInButton.innerText = "Log out";
            
        } else {
            logInButton.innerText = "Log in"
        };
    });


// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

document.querySelector('#send-alert').addEventListener('submit', (event) => {

    event.preventDefault();
    let submittedText = document.querySelector('#alert-message').value

    alert(`${submittedText}`)


})

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-click to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

const adderButton = document.querySelector('#item-adder')

adderButton.addEventListener('click',() => {

    let list = document.querySelector('#list');
    let item = document.createElement('li');
    item.innerText = "Item"

    list.appendChild(item)



})

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.



let changers = document.querySelectorAll('.changes-colors')

const colorChange = (element,color) => {
    element.style.color = `${color}`
}

document.querySelector('#red').addEventListener('click', () => {
    
    for (let element of changers) {
        colorChange(element,'red')
    }
})

document.querySelector('#blue').addEventListener('click', () => {
    
    for (let element of changers) {
        colorChange(element,'blue')
    }
})

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

document.querySelector('#factorial-calculator').addEventListener('submit', (event) => {
    event.preventDefault();

    let num = document.querySelector('#factorial-input').value
    const numbersArray = []
    let factorial = 1


    for (let i = 1; i <= num; i++) {
        numbersArray.push(i)


    }

    for (let number of numbersArray) {
        factorial = number * factorial
    }

    document.querySelector('#result').innerText = factorial


})

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is four or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than four characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

document.querySelector('.form-feedback').innerText = ''

document.querySelector('#recommend-word').addEventListener('submit',(event) => {

    event.preventDefault();
    let submittedWord = document.querySelector('#word').value

    if (submittedWord.length >= 4) {
        document.querySelector('.form-feedback').innerText = 'Thanks for your submission!';
        document.querySelector('.form-feedback').style.color = 'green'

    } else {
        document.querySelector('.form-feedback').innerText = 'The word must be at least 4 characters long.'
        document.querySelector('.form-feedback').style.color = 'red'
    }




})
