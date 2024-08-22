const changeRadio = document.querySelectorAll("input[type=radio]");
console.log(changeRadio);
const checkBox=document.createElement("input[type=checkbox]");
changeRadio.replaceChild(checkBox,changeRadio)