// 1. Добавление новой задачи
var form = document.getElementById("addForm");

form.addEventListener("submit", addItem);

function addItem (e){
    e.preventDefault();   //-чтобы страница не обновлялась при отправке форма
    console.log("Fired!!!")

    // Находим инпут с текстом для новой задачи
    var newItemInput = document.getElementById("newItemText");
    
    // Получаем текст из инпута
    var newItemText = newItemInput.value;

    // Создаем элемент для новой задачи
    var newElement = document.createElement("li");
    newElement.className = "list-group-item";

    //Добавим текст в новый элемент
    var newTextNode = document.createTextNode(newItemText);
    newElement.appendChild(newTextNode);

    // Создаем кнопку
    



    console.log(newItemText);
    
}