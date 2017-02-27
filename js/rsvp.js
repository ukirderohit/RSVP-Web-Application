console.log("Hello from Console");
const formIdRegistrar = document.getElementById('registrar');
const formInput = formIdRegistrar.getElementsByTagName('input')[0];
const formButton = formIdRegistrar.getElementsByTagName('button')[0];

formIdRegistrar.addEventListener('submit',(e)=>{
    e.preventDefault(); //to cancel the event to show o/p
    
    let ul = document.getElementById('invitedList');
    let li = document.createElement('li');
        li.textContent = formInput.value;
        if (li.textContent == '') {
            formInput.placeholder = "Please Enter the Correct Name"
        } else {
            ul.appendChild(li);
            formInput.placeholder = "Invite Someone"
        }
        formInput.value = '';
});