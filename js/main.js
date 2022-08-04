//Con la clase controlSubjecto puedo crear un nuevo objeto y almacernalo en un array y además tambien eliminar el objeto
class controlSubject{
  constructor(subject,days){
    this.subject = subject;
    this.days = days;
  }
  addSubjects(){ //Con esta funcion creo el objeto "Materia" y "Dia de clase de la materia"
    let aux = 1;
    for (let i = 0 ; i <subjects.length; i++){ //Ciclo para recorrer el objeto que está dentro del array y verificar si se encuentran ciertos criterios
      if ( subjects[i].Subject.includes(this.subject.toLowerCase())  === true && subjects[i].day.includes(this.days.toLowerCase())  === true){
        aux = 0; //Si encuentra la materia y horario ingresado cambiara el auxiliar
        break;
      }
    }
    if (aux == 1){ //Si el auxiliar es cambiado por el condicional de arriba, entonces se agregará el ultimo objeto ingresado
      subjects.push({Subject: this.subject, day : this.days})
      alert('Subject added')
    } else if (aux == 0){ //Si no se cambia el auxiliar en el condicional de arriba es porque el ultimo objeto ingresado ya existe
      alert("This subject already exists in the same schedule")
      
    }
  }
  deleteSubjects(){//Con esta funcion elimino un objeto "Materia" y "Dia de clase de la materia" ingresado anteriormente
    let aux2 = 1;
    let pos = 0;
    for (let i = 0 ; i <subjects.length; i++){  //Ciclo para recorrer el objeto que está dentro del array y verificar si se encuentran ciertos criterios
      if ( subjects[i].Subject.includes(this.subject.toLowerCase())  === true && subjects[i].day.includes(this.days.toLowerCase())  === true){
        pos = i;
        console.log(pos) 
        aux2 = 0; //Si el auxiliar es cambiado por el condicional, entonces se eliminará el objeto deseado
        break;
      }
    }
    if (aux2 == 1){  //Si el auxiliar no es cambiado por el condicional de arriba, entonces el objeto que se quiere eliminar no existe
      alert("This subject no exists in the schedule input")
    } else if (aux2 == 0){ //Si el auxiliar es cambiado por el condicional de arriba, entonces se elimina el objeto ingresado 
      if (pos == 0){ //Si el objeto a eliminar está en la primera posición
        subjects.splice(pos,1);
      alert('Subject delete');
      } else { //Si el objeto a eliminar está es una posición diferente a la primera
        subjects.splice(pos,pos)
        alert('Subject delete')
      }
    }
  }
}

function options(option){ //Con esta función se toman decisiones segun se ingresen por el usuario
      switch(option){
        case 1: //Agregar una materia con su respectivo dia
          let newMat = prompt("Add subject"); //Ingreso de materia
          let newDay = prompt("Add day");//Ingreso de dia
          let add = new controlSubject(newMat.toLowerCase(),newDay.toLowerCase());
          add.addSubjects();
          break;
        case 2: //Ver el listado de las materias ingresadas
          if (subjects.length == 0){ //por si no se ha ingresado materias
            console.log('No subject still');
          } else {
          for (let i = 0 ; i < subjects.length; i++){
            console.log(subjects[i].Subject + "-" + subjects[i].day + "\n" )
          }
        }
          break;
        case 3: //Eliminar alguna materia y horario de materia previamente registrado
          if (subjects.length == 0){ //por si no se ha ingresado materias
            console.log('No subject still');
          } else {
            let delMat = prompt("What subject you wanna delete?");
            let delDay = prompt("In what schedule?");
            let del = new controlSubject(delMat.toLowerCase(),delDay.toLowerCase());
            del.deleteSubjects();
        }
          break;
      }
}


let subjects = []
let aux = true;

while (aux === true){
  let readOption = parseInt(prompt("Choose one option \n \
  1. Add subject \n \
  2. View saved subject \n \
  3. Detele subject-schedule \n \
  4. End simulation"));
  if (readOption == 4 || isNaN(readOption)){
    aux = false;
    alert("Thanks")
    ;
  } else if (readOption == 1 || readOption == 2 || readOption == 3){
    options(readOption)
  } else {
    alert("Wrong choice");
  }
  
}