//Remove Radio Button using replace
const changeRadio =document.querySelectorAll('input[type="radio"]');
console.log(changeRadio)
// const checkBox=document.createElement("input")
// checkBox.type = 'checkbox';
// console.log(checkBox);
// changeRadio?.replaceWith?.(checkBox);
changeRadio.forEach((radiobutton)=>{
  const checkBox=document.createElement("input")
  const changeRadio =document.querySelector('input[type="radio"]');
  checkBox.type = 'checkbox';
  changeRadio?.replaceWith?.(checkBox);
})



//Add an event Listener to the add more books read:

const SubButton= document.getElementById("addBookBtn");
const SubInput=document.getElementById("SubmitInput")
const bookList = document.getElementById("bookList");
console.log(SubButton)
// The function to handle adding new comments.
function storeSubmit() {
    const newBook = SubInput.value;
    if (newBook=== "") return;
  
    bookList.appendChild(document.createElement("li")).textContent = newBook;
    SubInput.value = "";
    SubInput.focus();
  }
  
  // Register the event listener.
SubButton.addEventListener("click", storeSubmit);