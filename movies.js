//use sibling to change favorite movie

let listLength = document.getElementsByTagName("li").length
console.log(listLength)
document.getElementsByTagName("p")[0].innerHTML = "use innerHTML to change the first paragraph!";

const submitButton = document.querySelector('input[type="submit"]');
console.log(submitButton)
submitButton.setAttribute("value", "My Favorite");
//change button submit to "My favorite"

