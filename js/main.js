
//==============get elements====================
let taskInput = document.getElementById('taskInput');
let taskButton = document.getElementById('taskButton');
let allTasks = document.getElementById('allTasks');
let noTasks = document.getElementById('noTasks');

//===============show div of no tasks=============
let showTasks= ()=>{
    if(allTasks.childElementCount == 0 ){
        noTasks.classList.remove("none");
    }
}


//=====================add new task===========
let clickbutton = () => {

    let newTask = taskInput.value;

    if (newTask.trim() == "") {
        alert("please enter valid data");
    } else {

        noTasks.classList.add("none");
        allTasks.innerHTML += ` <div class="alert  check" style=" background-color: #2ce1d3; color:white;">
        ${newTask}
        <button style="float:right;padding: 5px;width: 90px;margin:5px;border: 1px solid black;background-color: red;border-radius: 10px;" class="delete">Delete</button></div> `

        taskInput.value = "";


    }
}




//===================delete task====================
taskButton.addEventListener('click', clickbutton);

document.addEventListener('click' , function(e){

   if(e.target.classList.contains('delete')){
       e.target.parentElement.remove();
       showTasks();
   }

})


// =======================checked task================

document.addEventListener('click' , function(ch){

    if(ch.target.classList.contains('check')){
        ch.target.classList.toggle("checked")
        
    }

})

//===========delete all===================

let deleteAll = document.getElementById('deleteAll');


let delet = ()=>{
    allTasks.innerHTML = "";
    showTasks();
}

deleteAll.addEventListener('click' , delet);










