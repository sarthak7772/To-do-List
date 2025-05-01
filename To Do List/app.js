const input=document.querySelector('input');
const s_button=document.querySelector('#save');
const view_1=document.querySelector('#view');
let tasks=[];


s_button.addEventListener('click',()=>{
    const task=input.value.trim();
    if(task!==""){
        tasks.push(task);
        alert("Task saved:"+ task);
        input.value="";
    }
    else{
        alert("Please enter a task");
    }
});

view_1.addEventListener('click',()=>{
    if(tasks.length===0){
        alert("No Task Saved");
    }
    else{
        alert("Your Tasks:\n" + tasks.map((t, i) => `${i + 1}. ${t}`).join("\n"));
    }
});