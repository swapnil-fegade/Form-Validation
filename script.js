var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;

    }
    if(!name.match(/^[A-Za-z\s]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write the full name";
        return false;
    }

    nameError.innerHTML = "<i class='fa-solid fa-check-circle'></i>";
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if(!phone.match(/^\d{10}$/)){
        phoneError.innerHTML = "Phone number must be 10 digits";
        return false;
    }

    phoneError.innerHTML = "<i class='fa-solid fa-check-circle'></i>";
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = "Invalid email format";
        return false;
    }

    emailError.innerHTML = "<i class='fa-solid fa-check-circle'></i>";
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;

    if(message.length == 0){
        messageError.innerHTML = "Message is required";
        return false;
    }
    if(message.length < 30){
        messageError.innerHTML = (30 - message.length) + " characters remaining";
        return false;
    }

    messageError.innerHTML = "<i class='fa-solid fa-check-circle'></i>";
    return true;
}

function validateForm() {
    var isValid = true;

    if(!validateName()) isValid = false;
    if(!validatePhone()) isValid = false;
    if(!validateEmail()) isValid = false;
    if(!validateMessage()) isValid = false;

    if(!isValid) {
        submitError.innerHTML = "Please fix the errors above.";
    }

    return isValid;
}