/* exported updateResult */

// Reference needed elements
const result = document.getElementById('result');
const nameInput = document.getElementById('name');
// Action to take on user event
function updateResult(){
    result.textContent = nameInput.value;

}