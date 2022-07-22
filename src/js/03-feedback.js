import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const currentTimeKey = "feedback-form-state";
const formInput = {
    email: "",
    message: "",
};

if (localStorage.getItem(currentTimeKey) === null) {
    localStorage.setItem(currentTimeKey, JSON.stringify(formInput));
} ;

feedbackForm.elements.email.value = JSON.parse(localStorage.getItem(currentTimeKey)).email;
feedbackForm.elements.message.value = JSON.parse(localStorage.getItem(currentTimeKey)).message;
feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', throttle(onFormInputSubmit, 500));

function onFormInput(e) {
    formInput.email = feedbackForm.elements.email.value;
    formInput.message = feedbackForm.elements.message.value;

    localStorage.setItem(currentTimeKey, JSON.stringify(formInput));
    
}

function onFormInputSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(currentTimeKey);
    feedbackForm.reset();
    console.log(formInput);
} 
