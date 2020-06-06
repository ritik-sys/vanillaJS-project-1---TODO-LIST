var form=document.querySelector(".new-task");
var add_task=document.querySelector(".new-task-text");
var add_task_btn=document.querySelector(".add-task");
var search_task=document.querySelector(".filter");
var clear_task_btn=document.querySelector(".clear-task");
var task_list=document.querySelector("ul")
var individual_task_name=document.querySelector(".task-name");
var delete_task=document.querySelector(".task-list");

document.querySelector("body").addEventListener("mousemove",function(e){
     var card=document.querySelector(".card");
     card.style.border=(`solid rgb(${e.offsetX+e.offsetY},${e.offsetY+30}, 100) 5px`);

    
    
})


form.addEventListener("submit",function(e){
    var task_val=add_task.value;
    const li= document.createElement("li");
    li.className="task-item";
    const div=document.createElement("div");
    div.className="card card-content";
    div.innerHTML=task_val;
    const a=document.createElement("a");
    a.className="delete-icon";
    a.style.cursor=("pointer");
    const i = document.createElement("i");
    i.className="material-icons secondary-content"
    i.innerHTML="highlight_off";
    a.appendChild(i);
    div.appendChild(a);
    li.appendChild(div);
    task_list.appendChild(li);
    add_task.value=" ";
    e.preventDefault();
})

delete_task.addEventListener("click",function(e){
    if(e.target.className==="material-icons secondary-content"){
         e.target.parentElement.parentElement.parentElement.remove();
    }

    e.preventDefault();   
})

clear_task_btn.addEventListener("click",function(){
    task_list.innerHTML="";
})

search_task.addEventListener("keydown",function(e){

    const typed_words=e.target.value.toLowerCase();
    document.querySelectorAll("li").forEach(function(item){
        const list_content=item.firstChild.textContent;
        console.log(list_content.toLocaleLowerCase().indexOf(typed_words));
        
        if(list_content.toLocaleLowerCase().indexOf(typed_words)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
        
    })
    



});








// const text=e.target.value.toLowerCase()+"highlight_off";
// var search_list=document.querySelectorAll("li");
// search_list.forEach(function(task){
//    const item=task.firstChild.textContent;
//    console.log((item.toLowerCase().indexOf(text)));

//    if(item.toLowerCase().indexOf(text)!=-1){
//        task.style.display='block';
//    }
//    else{
//        task.style.display='none';
//    }
    
// })

                                        