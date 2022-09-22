//declare your variables for the text field and access DOM
const mail = document.querySelector('#email');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const userName = document.querySelector('#userN')
const form = document.querySelector('#form');


//declare an error function
function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}
//declare a success function
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
//validation regex function for email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)[a-zA-Z]{2,}))$/.test(email);

}


//form check function
function checkInput() {
    //get the values from the inputs
    const usernameValue = userName.value.trim();
    const mailValue = mail.value.trim();
    const passValue = pass.value.trim();
    const pass2Value = pass2.value.trim();



    if (usernameValue === '') {
        setErrorFor(userName, 'Username is required');
        //add error class

    } else {
        //add success class
        setSuccessFor(userName);
    }
    //check email is valid
    if (mailValue === '') {
        setErrorFor(mail, 'Email cannot be blank');
    } else if (!isEmail(mailValue)) {
        setErrorFor(mail, 'Email is not valid');
    } else {
        setSuccessFor(mail);
    }
    //check input length for password
    if (passValue.length < 8) {
        setErrorFor(pass, 'Password must be at least 8 characters');
    } else {
        setSuccessFor(pass);

    }
    //check the two passwords match
    if (passValue !== pass2Value) {
        setErrorFor(pass2, 'Passwords do not match');
    } //check if pass2 is empty
    else if (pass2Value === '') {
        setErrorFor(pass2, 'Password cannot be blank');

    } else {
        setSuccessFor(pass2);
    }
}



//add event listener 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();

});