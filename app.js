let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {

    let items = document.createElement("li");
    items.innerText = inp.value;
    ul.appendChild(items);
    inp.value = "";

    let btns = document.createElement("button");
    btns.innerText = "Remove";
    btns.classList.add("btns");
    items.appendChild(btns);
});

ul.addEventListener("click", function(event) {
   if(event.target.nodeName == "BUTTON") {
    let listItems = event.target.parentElement;
    listItems.remove();
   }
});