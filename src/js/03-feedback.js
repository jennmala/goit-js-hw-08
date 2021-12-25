import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const inputEmailEl = document.querySelector('input');
const inputMessageEl = document.querySelector('textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));


if (localStorage['feedback-form-state']) {
    try {
        
        const parsedData = JSON.parse(localStorage['feedback-form-state']);
        inputEmailEl.value = parsedData.email;
        inputMessageEl.value = parsedData.message;
    } catch (error) {
        console.log(error.name); 
        console.log(error.message);
    }      
}  

function onFormInput(e) {
    const inputDataObj = {};
    inputDataObj.email = e.currentTarget.elements.email.value;
    inputDataObj.message = e.currentTarget.elements.message.value;
    localStorage['feedback-form-state'] = JSON.stringify(inputDataObj);
}
   
function onFormSubmit(e) {
    e.preventDefault();

    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    const dataSubmit = { email, message };
    console.log(dataSubmit);

    inputEmailEl.value = '';
    inputMessageEl.value = '';    

    localStorage.removeItem("feedback-form-state"); 
}