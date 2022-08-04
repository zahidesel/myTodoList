

//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const deadlineInput = document.querySelector(".deadline-input");
const filterOption= document.querySelector(".filter-todo");


//event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click',deleteCheck);


//functions

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerHTML=todoInput.value+ "<br>"+ "Deadline: "+ deadlineInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    
    const options= filterOption.options[filterOption.selectedIndex].value;
   if(options=="notstarted"){
    document.querySelector(".todo").style.background="red";
   }else if(options=="done"){
    document.querySelector(".todo").style.background="green";
   }else if(options=="inprogress"){
    document.querySelector(".todo").style.background="yellow";
   }

    todoInput.value="";
    deadlineInput.value="";
    filterOption.value="status";


}

function deleteCheck(e){
    const item =e.target;

    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


