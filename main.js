var form = document.getElementById("addForm");
var itemsList = document.getElementById("items");
var filter = document.getElementById("filter");

//  Добавление новой задачи - Прослушка события
form.addEventListener("submit", addItem);

// Удаление элемента - Прослушка клика
itemsList.addEventListener("click", removeItem);

// Фильтрация спика - прослушка ввода
filter.addEventListener("keyup", filterItems);

//  Добавление новой задачи - Функция
function addItem (e){
    e.preventDefault();   //-чтобы страница не обновлялась при отправке форма
    console.log("Fired!!!")

    // Находим инпут с текстом для новой задачи
    var newItemInput = document.getElementById("newItemText");
    
    // Получаем текст из инпута
    var newItemText = newItemInput.value;

    // Создаем элемент для ввода новой задачи
    var newElement = document.createElement("li");
    newElement.className = "list-group-item";

    //Добавим текст в новый элемент
    var newTextNode = document.createTextNode(newItemText);
    newElement.appendChild(newTextNode);

    // Создаем кнопку
    var deleteBtn = document.createElement("button");
    
    // Добавляем текст в кнопку
    deleteBtn.appendChild(document.createTextNode("Удалить"));
    
    //Добавляем CSS class
    deleteBtn.className = "btn btn-light btn-sm float-right";

    // Добавляем data атрибут
    deleteBtn.dataset.action = "delete";

    //Помещаем кнопку внутрь тега li
    newElement.appendChild(deleteBtn)

    console.log("addItem -> deleteBtn", deleteBtn);

    //Добавляем новую задачу в список со всеми задачами
    itemsList.prepend(newElement);

    // Очистим поле добавления новой задачи
    newItemInput.value = "";

    console.log(newItemText);
    
}

// Удаление элемента - Функция
function removeItem(e){
    if (
        e.target.hasAttribute("data-action") && 
        e.target.getAttribute("data-action") == "delete"
    ){
        if (confirm("Удалить задачу?") ) {
            e.target.parentNode.remove();
        }
    }
}

// Фильтрация спика - Функция
function filterItems(e){
    //Получаем фразу для поиска и переводим её в нижний регистр
    var searchedText = e.target.value.toLowerCase();

    //1. Получаем список всех задач
    var items = itemsList.querySelectorAll("li");

    //2. Перебираем циклом все найденные теги li с задачами
    items.forEach(function(item){
        //Получаем текст задачи из списка и переводим его в нижний регистр
        var itemText = item.firstChild.textContent.toLowerCase();

        // Проверяем вхождение (наличие) искомой подстроки в тексте задачи
        if (itemText.indexOf(searchedText) != -1) {
            //Если вхождение есть - показываем элемент с задачей
            item.style.display = "block";
        } else {
            //Если вхождения нет - скрываем элемент с задачей
            item.style.display = "none";
        }
    })
}