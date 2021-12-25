import throttle from 'lodash.throttle';

const inputEmailEl = document.querySelector('input');
const inputMessageEl = document.querySelector('textarea');
const submitBtnEl = document.querySelector('button');

inputEmailEl.addEventListener('input', onEmailInput);
inputMessageEl.addEventListener('input', onMessageInput);
submitBtnEl.addEventListener('submit', onFormSubmit);


// inputEmailEl.value = localStorage['feedback-form-state-email'];
// inputMessageEl.value = localStorage['feedback-form-state-message'];
    
    
// function onEmailInput(e) {
//     localStorage['feedback-form-state-email'] = e.currentTarget.value;
// }


// function onMessageInput(e) {
//     localStorage['feedback-form-state-message'] = e.currentTarget.value;
// }

// function onFormSubmit(e) {
//     inputEmailEl.value = '';
//     inputMessageEl.value = '';
//     delete localStorage['feedback-form-state-email'];
//     delete localStorage['feedback-form-state-message'];

//     console.log(localStorage['feedback-form-state-email']);
//     console.log(localStorage['feedback-form-state-message']);
// }
// __________________________________________


if (localStorage['feedback-form-state']) {
    console.log(localStorage['feedback-form-state']);
    try {
        
        const parsedData = JSON.parse(localStorage['feedback-form-state']);
    } catch (error) {
        console.log(error.name); 
        console.log(error.message);
    }
    // console.log(parsedData);
        
    // inputEmailEl.value = parsedData.email;
    // inputMessageEl.value = parsedData.message;
} 
 
const inputDataObj = { }
    
function onEmailInput(e) {
    inputDataObj.email = e.currentTarget.value;
    localStorage['feedback-form-state'] = JSON.stringify(inputDataObj);
}

function onMessageInput(e) {
    inputDataObj.message = e.currentTarget.value;
    localStorage['feedback-form-state'] = JSON.stringify(inputDataObj);

}
   
function onFormSubmit() {
    preventDefault();

    console.log(inputDataObj);
    console.log(localStorage['feedback-form-state']);

    localStorage.removeItem("feedback-form-state"); 

}