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

            /******************SELECT AND TIME***********************/

            //Acá se crea la sección select que contendrá los dias
            const subject_select_el = document.createElement("select");
            subject_select_el.classList.add("datefieldMonth");
            subject_select_el.name = "days"; //Tributos de la seccion select
            subject_select_el.value = "Day";

            
            //Array de días de la semana
            days = ["monday","tuesday","wednesday","thursday","friday","saturday"]
            for (let i = 0;i <6; i++){ //para ahorrar lineas de codigo
            const subject_select_days_el = document.createElement("option"); //creo la seccion options que contiene los dias
            subject_select_days_el.classList.add("days"); 
            subject_select_days_el.innerHTML = days[i];
            subject_select_days_el.value = i;
            
            //insertamos los días creados en el select
            subject_select_el.appendChild(subject_select_days_el); 
            }

            //insertamos todo el select (con dias) en content
            subject_content_el.appendChild(subject_select_el);

            /****************TIME********************/
            for (let i = 0;i <2; i++){ 
            const subject_time_el = document.createElement("input");
            subject_time_el.id  = "time"; 
            subject_time_el.type  = "time";
            subject_time_el.name = "appt";
            subject_time_el.min = "06:00";
            subject_time_el.max ="20:00";
            subject_time_el.setAttribute("required","required");


            subject_content_el.appendChild(subject_time_el);
            }

            /*****************************************/

            const subject_actions_el = document.createElement("div");
            subject_actions_el.classList.add("actions");

            /*********************BOTONES************/
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
            /*************************************************/
            
            list_el.appendChild(subject_el);
            input.value ="";
        }  
    })
})



