 window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             element.innerText = task;
             controlTask(element);

             
             
             /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/
             
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });

     let controlTask = element =>{
        let button = document.createElement("button");
             button.setAttribute("class","btn_complete");
             button.innerText="Complete";
            
             button.addEventListener("click", () => {
                let parent = button.parentNode;
                if(parent){
                    element.style="text-decoration: line-through";
                }
             });
             
        let buttonEND = document.createElement("button");
             buttonEND.setAttribute("class","btn_close");
             buttonEND.innerText="Delete";
             
             buttonEND.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });


             element.appendChild(button);
             element.appendChild(buttonEND);

             button.style="margin:0 1em 3px 1em;";
     }
 }