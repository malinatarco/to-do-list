var input = document.getElementById("inputF");
var list = document.querySelector(".list-items");
var button = document.querySelector("button");
var iValue = "";
input.addEventListener("change", () => {
    iValue = input.value;
});

button.addEventListener("click", createItem);

function createItem() {
    var newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <span class="forValue">${iValue}</span>
        <span class="done"><i class="fa fa-check" aria-hidden="true"></i></span>
        <span class="delete"><i class="fa fa-trash" aria-hidden="true"></i></span>
    `;
    list.appendChild(newItem);
    input.value="";

    var doneBtns = document.querySelectorAll(".fa.fa-check");
    var listValue = document.querySelectorAll(".forValue");
    var deleteItems = document.querySelectorAll(".fa.fa-trash");
    var items = document.querySelectorAll(".item");

    doneBtns.forEach((button, index)=> {
    button.addEventListener("click", function(){
        listValue[index].style.textDecoration = "line-through";
    });
});
    listValue.forEach(value => {
        value.addEventListener("click", function() {
            value.style.textDecoration = "line-through";
        });
    });

    deleteItems.forEach((delItem, index) => {
        delItem.addEventListener("click", function(){
            items[index].remove();
        })
    })
}



