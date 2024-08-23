//use sibling to change favorite movie

let listLength = document.getElementsByTagName("li").length
console.log(listLength)
document.getElementsByTagName("p")[0].innerHTML = "use innerHTML to change the first paragraph!";

const submitButton = document.querySelector('input[type="submit"]');
console.log(submitButton)
submitButton.setAttribute("value", "My Favorite");
//change button submit to "My favorite"

//use style and classList for editing CSS style
const award = document.getElementById("filmlist");
console.log(award)
award.style.backgroundColor = "pink";

const div = document.getElementById("Movie");
div.style.borderBlockStyle='dashed'

// const list = h3.classList;
// list.remove("myStyle");