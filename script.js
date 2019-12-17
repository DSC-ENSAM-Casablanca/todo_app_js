var data = document.getElementById("data");
var add = document.getElementById("add");
var list = document.getElementById("myList");

add.addEventListener("click", addItem);
data.addEventListener("keypress", keyboardAdd);

function addItem() {
    var item = document.createElement("li");
    var textItem = document.createTextNode(data.value);
    item.appendChild(textItem);
    list.appendChild(item);

    var buttonX = document.createElement("button");
    var textButton = document.createTextNode("X");
    buttonX.appendChild(textButton);

    item.appendChild(buttonX);

    buttonX.addEventListener("click", removeItem.bind(item));
    item.addEventListener("click", markDone);

    data.value = "";
}

function removeItem() {
    this.classList.toggle("deleted");
}

function markDone() {
    this.classList.toggle("done");
}

function keyboardAdd(event) {
    if (event.which === 13)
        addItem();
}