window.addEventListener('load', () =>{
    console.log('star')
    const form = document.querySelector('#newSubjectForm');
    const input = document.querySelector('#newSubject__input');
    const list_el = document.querySelector('#subjects');
    form.addEventListener('submit',(e) =>{
        e.preventDefault();
        const subject = input.value;
        if(!subject){
            alert("Please fill out the task");
            return;
        }else{
            const subject_el =document.createElement("div");
            subject_el.classList.add("subjects");

            const subject_content_el = document.createElement("div");
            subject_content_el.classList.add("content");

            subject_el.appendChild(subject_content_el);

            const subject_input_el = document.createElement("input")
            subject_input_el.classList.add("text");
            subject_input_el.type = "text";
            subject_input_el.value = subject;
            subject_input_el.setAttribute("readonly","readonly");
            
            subject_content_el.appendChild(subject_input_el)
            
            const subject_actions_el = document.createElement("div");
            subject_actions_el.classList.add("actions");

            const subject_edit_el = document.createElement("button");
            subject_edit_el.classList.add("edit");
            subject_edit_el.innerHTML = "Edit"

            const subject_days_el = document.createElement("button");
            subject_days_el.classList.add("addDay");
            subject_days_el.innerHTML = "add day"

            const subject_delete_el = document.createElement("button");
            subject_delete_el.classList.add("delete");
            subject_delete_el.innerHTML = "Delete"


            subject_actions_el.appendChild(subject_edit_el);
            subject_actions_el.appendChild(subject_delete_el);
            subject_actions_el.appendChild(subject_days_el);
            
            subject_content_el.appendChild(subject_actions_el);

            list_el.appendChild(subject_el);
            input.value ="";
        }  
    })
})



