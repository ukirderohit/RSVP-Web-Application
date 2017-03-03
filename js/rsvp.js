console.log("Hello from Console");
const formIdRegistrar = document.getElementById('registrar');
const formInput = formIdRegistrar.getElementsByTagName('input')[0];
const formButton = formIdRegistrar.getElementsByTagName('button')[0];
const ul = document.getElementById('invitedList');
const li = document.createElement('li');

/*Creating a Invited List*/ 
formIdRegistrar.addEventListener('submit',(e)=>{
    e.preventDefault(); //to cancel the event to show o/p
    
    
        li.textContent = formInput.value;
        if (li.textContent == '') {
            formInput.placeholder = "Please Enter the Correct Name"; //if nothing is entered
        } else {
            const label = document.createElement('label'); //create label
            label.textContent = "Confirmed"; //named the label
            const checkBox = document.createElement('input'); //create input element
            checkBox.type = 'checkbox'; //give input element a type 
            label.appendChild(checkBox); //append chkbox to label
            li.appendChild(label); // append label to list
            ul.appendChild(li); //finaly append li to ul
            formInput.placeholder = "Invite Someone"
        }

    

        formInput.value = '';

});

            
        /* Event Listener if checkbox is checked*/
        ul.addEventListener('change', (e) => {
            const checkbox = e.target; //target element will be chkbox as it will be triggered
            const checked = checkbox.checked; //will be adding default checked to chkbox
            const listItem = checkbox.parentNode.parentNode //first node is checkbox its parent is label and its parent is listItem

            if (checked) {
                //if checkbox is checked 
                listItem.className = 'responded'; //add class responded 
            } else {
                listItem.className = '' ;
            }
        }); 