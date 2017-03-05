console.log("Hello from Console");
const formIdRegistrar = document.getElementById('registrar');
const formInput = formIdRegistrar.getElementsByTagName('input')[0];
const formButton = formIdRegistrar.getElementsByTagName('button')[0];
const mainElement = document.querySelector('.main');
const ul = document.getElementById('invitedList');

/* Local Storage */


/* Creating a hide button for those who doesnt responded  */
const div = document.createElement('div'); //create a div 
const hidelabel = document.createElement('label'); //label
const hideChkbox = document.createElement('input'); //chkbox
hidelabel.textContent = "Hide those did'nt responded";// label text
hideChkbox.type = 'checkbox'; 
div.appendChild(hidelabel); //append both label and chkbox to div
div.appendChild(hideChkbox);
mainElement.insertBefore(div,ul); //and insert it before ul in mainElement 

hideChkbox.addEventListener('change',(e) => {
    const isChecked = e.target.checked; //target
   
    listitems = ul.children //this property will all child elements of ul in a list
    if (isChecked) {
        for(let i=0 ; i<listitems.length ; i+=1) {
            let li = listitems[i];
            if (li.className === 'responded' ){ //we have added the class responded to every li which is chked 
                li.style.display=""; //it will display the elements
            }else{
                li.style.display='none';//not displayed
            }
    }} else {
            for(let i=0 ; i<listitems.length ; i+=1) {
                let li = listitems[i];
                li.style.display=""; 
            }
        } 
    });


/* Create List Items */

function CreateListItemForUl(text) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    
    span.textContent = text; //assign value of text to text content of span 
    li.appendChild(span); //append span to the list

    const label = document.createElement('label'); //create label
    label.textContent = "Confirmed"; //named the label
    const checkBox = document.createElement('input'); //create input element
    checkBox.type = 'checkbox'; //give input element a type 
    label.appendChild(checkBox); //append chkbox to label
    li.appendChild(label); // append label to list

    const editButton = document.createElement('button'); //create button to Edit li
    editButton.textContent = 'edit'; //give name to a button 
    li.appendChild(editButton); //append button to label

    const removeButton = document.createElement('button'); //create button to remove li
    removeButton.textContent = 'remove'; //give name to a button 
    li.appendChild(removeButton); //append button to label

    
    return li;
}


/*Creating a Invited List*/ 
formIdRegistrar.addEventListener('submit',(e)=>{
    e.preventDefault(); //to cancel the event to show o/p
    
    
        text = formInput.value; //take the input from user
        formInput.value = "" // making the textbox clear
        
        if (text == '') {
            formInput.placeholder = "Please Enter the Correct Name"; //if nothing is entered
        } else {
            const li = CreateListItemForUl(text); //function call to create list element which will return li
            ul.appendChild(li); //finaly append li  to ul
            formInput.placeholder = "Invite Someone"
        }

});

            
/* Event Listener if checkbox is checked*/
ul.addEventListener('change', (e) => {
    const checkbox = e.target; //target element will be chkbox as it will be triggered
    const checked = checkbox.checked; //will be adding default checked to chkbox
    const listItem = checkbox.parentNode.parentNode //first node is checkbox its parent is label and its parent is listItem

    if (checked) {
        //if checkbox is checked 
        listItem.className = 'responded'; //add class responded which contains css that highlights box
    } else {
        listItem.className = '' ;
    }
}); 


/* Event Listener to the edit and  remove button */
ul.addEventListener('click' , (e) => {
    if (e.target.tagName === 'BUTTON') {
        const Button = e.target; //target element will be button
        const li = Button.parentNode; //get its parent that is list
        const ul = li.parentNode; //get its parent that is ul
        if (Button.textContent === 'remove') {
            ul.removeChild(li); //remove li item from ul
        } else if (Button.textContent === 'edit') {
            console.log("Edit Button"); //edit the li item name 
            const span = li.firstElementChild; //list first item is span element so target that
            const input = document.createElement('input'); //now create a textbox input
            input.type = 'text';
            li.insertBefore(input,span); //insertbefore the span element by new input element/textbox
            input.value = span.textContent //the value of span i.e name will be displayed on the textbox
            li.removeChild(span); //and then remove the span element
            Button.textContent = 'save';
        } else if (Button.textContent === 'save') { /*Reverse of Edit*/ 
            console.log("Save Button"); //edit the li item name 
            const textbox = li.firstElementChild; //list first item is input element so target that
            const span = document.createElement('span'); //now create a span element
            span.textContent = textbox.value; 
            li.insertBefore(span, textbox); //insertbefore the input element by new span element
            span.textContent = textbox.value  //the value of span i.e name will be displayed on the textbox
            li.removeChild(textbox); //and then remove the span element
            Button.textContent = 'edit';
        }
}});