function selectClassActive (id) {
    let el = document.getElementsByClassName('active')[0];
    el.classList.remove('active');
    let a = document.getElementById(id);
    a.classList.add('active');
}
let filterStudents = [];

let contents = document.getElementsByClassName("content__text");
let inputName = document.createElement('input');
let inputFamily = document.createElement('input');
let inputPatronymic = document.createElement('input');
let inputBirth = document.createElement('input');
inputBirth.type = "date";
inputBirth.min = "1900-01-01";
let inputYear = document.createElement('input');
let inputFaculty = document.createElement('input');
let button = document.createElement("button");

let dateNow = new Date();

button.textContent = 'Нажмите, чтобы заполнить';
inputName.id = "inputName";
inputFamily.id = "inputFamily";
inputPatronymic.id = "inputPatronymic";
inputBirth.id = "inputBirth";
inputYear.id = "inputYear";
inputFaculty.id = "inputFaculty";
button.id = "input__button";

inputName.classList.add("input");
inputFamily.classList.add("input");
inputPatronymic.classList.add("input");
inputBirth.classList.add("input");
inputYear.classList.add("input");
inputFaculty.classList.add("input");

console.log(contents);
contents[0].append(inputName, inputFamily, inputPatronymic, inputBirth, inputYear, inputFaculty, button);

document.getElementById('inputName').placeholder = 'Введите имя';
document.getElementById('inputFamily').placeholder = 'Введите фамилию';
document.getElementById('inputPatronymic').placeholder = 'Введите Отчество';
document.getElementById('inputBirth').placeholder = 'Введите дату рождения';
document.getElementById('inputYear').placeholder = 'Введите год поступления';
document.getElementById('inputFaculty').placeholder = 'Введите факультет';

let students = [];
let count = 0;

let tableStart = {
    Name:"Имя ",
    Family:"Фамилия ",
    Patronymic:"Отчество",
    Birth:"Дата рождения",
    Year:"Дата поступления",
    Faculty:"Факультет",
};

button.onclick = function(){
    let student = {};
    if (inputName.value.length != 0 && inputFamily.value.length != 0 && inputPatronymic.value.length != 0 && 
    inputBirth.value.length != 0 && inputYear.value.length != 0 && Number(inputYear.value) >= 2000 && inputFaculty.value.length != 0){
    student.Name = inputName.value,
    student.Family = inputFamily.value,
    student.Patronymic = inputPatronymic.value,
    student.Birth = inputBirth.value,
    student.Year = inputYear.value,
    student.Faculty = inputFaculty.value;
    student.bool = 0;
    students.push(student);
    createTable(student); 
        filterStudents = students;


    } else {
        if (inputName.value == 0) {
            alert('Введите корректное имя');
        }
        if (inputFamily.value == 0) {
            alert('Введите корректное фамилию');
        }
        if (inputPatronymic.value == 0) {
            alert('Введите корректное отчество');
        }
        if (inputBirth.value == 0) {
            alert('Введите корректную дату рождения');
        }
        if (inputYear.value == 0 || inputYear.value < 2000 || isNaN(inputYear.value)) {
            alert('Введите корректный год поступления');
        }
        if (inputFaculty.value == 0) {
            alert('Введите корректный факультет');
        }
    }
}
let table = document.createElement('table');
table.id = 'tableStudents';
let filters = filterStudent(tableStart);
let sortButton = createTableStart(tableStart);
let booleanBirth = 0;
let booleanName = 0;
let booleanYear = 0;
let booleanFaculty = 0;

function filterStudent(student) {            
    let thNameFamilyPatronymic = document.createElement('th');
    let thBirth = document.createElement('th');
    let thYear = document.createElement('th');
    let thFaculty = document.createElement('th');
    let tr = document.createElement('tr');

    let inputName = document.createElement('input');
    let inputFamily = document.createElement('input');
    let inputPatronymic = document.createElement('input');
    let inputBirth = document.createElement('input');
    let inputYear = document.createElement('input');
    let inputFaculty = document.createElement('input');

    inputName.classList.add('filter_text');
    inputFamily.classList.add('filter_text');
    inputPatronymic.classList.add('filter_text');
    inputBirth.classList.add('filter_text');
    inputYear.classList.add('filter_text');
    inputFaculty.classList.add('filter_text');

    document.body.append(table);
    table.appendChild(tr);

    inputName.placeholder = "Найти по имени";
    inputFamily.placeholder = "Найти по фамилии";
    inputPatronymic.placeholder = "Найти по отчеству";
    inputName.textContent = student.Name + " " + student.Family + " " + student.Patronymic;
    tr.appendChild(thNameFamilyPatronymic);
    thNameFamilyPatronymic.appendChild(inputName);
    thNameFamilyPatronymic.appendChild(inputFamily);
    thNameFamilyPatronymic.appendChild(inputPatronymic);

    inputFaculty.placeholder = "Найти по факультету";
    inputFaculty.textContent = student.Faculty;
    tr.appendChild(thFaculty);
    thFaculty.appendChild(inputFaculty);

    inputBirth.placeholder = "Найти по дате рождения";
    inputBirth.type = "date";
    inputBirth.textContent = student.Birth;
    tr.appendChild(thBirth);
    thBirth.appendChild(inputBirth);

    inputYear.placeholder = "Найти по году поступления";
    inputYear.textContent = student.Year;
    tr.appendChild(thYear);
    thYear.appendChild(inputYear);
    return {
        inputName,
        inputFamily,
        inputPatronymic,
        inputBirth, 
        inputYear,
        inputFaculty,
    }; 
}


function createTableStart(student) {            
    let thNameFamilyPatronymic = document.createElement('th');
    let thBirth = document.createElement('th');
    let thYear = document.createElement('th');
    let thFaculty = document.createElement('th');
    let tr = document.createElement('tr');

    let buttonNameFamilyPatronymic = document.createElement('button');
    let buttonBirth = document.createElement('button');
    let buttonYear = document.createElement('button');
    let buttonFaculty = document.createElement('button');

    document.body.append(table);
    table.appendChild(tr);

    buttonNameFamilyPatronymic.textContent = student.Name + " " + student.Family + " " + student.Patronymic;
    tr.appendChild(thNameFamilyPatronymic);
    thNameFamilyPatronymic.appendChild(buttonNameFamilyPatronymic);

    buttonFaculty.textContent = student.Faculty;
    tr.appendChild(thFaculty);
    thFaculty.appendChild(buttonFaculty);

    buttonBirth.textContent = student.Birth;
    tr.appendChild(thBirth);
    thBirth.appendChild(buttonBirth);

    buttonYear.textContent = student.Year;
    tr.appendChild(thYear);
    thYear.appendChild(buttonYear);
    return {
        buttonNameFamilyPatronymic,
        buttonBirth, 
        buttonYear,
        buttonFaculty,
    };

}
function createTable(student) {            
    let thNameFamilyPatronymic = document.createElement('th');
    let thBirth = document.createElement('th');
    let thYear = document.createElement('th');
    let thFaculty = document.createElement('th');
    let tr = document.createElement('tr');
    tr.id = count;
    count++;

    let birth = Number(student.Birth.substr(0,4));
    let age = dateNow.getFullYear() - birth;
    let years = new Date(student.Birth).getFullYear();

    let stringAge = "(" + age + " лет)";

    let yearLearmLastDate = Number(student.Year) + 4;

    let kurs = dateNow.getFullYear() - Number(student.Year);
    let yearLearnAll;
    if(kurs > 0 && kurs<5){ 
        yearLearnAll = student.Year + " - " + yearLearmLastDate + "(" + kurs + " курс)";
    } else if (kurs > 0){
        yearLearnAll = student.Year + " - " + yearLearmLastDate + "(Окончил обучение)";
    } else {
        yearLearnAll = student.Year + " - " + yearLearmLastDate + "(Поступает)";
    }

    document.body.append(table);
    table.appendChild(tr);

    thNameFamilyPatronymic.textContent = student.Name + " " + student.Family + " " + student.Patronymic;
    tr.appendChild(thNameFamilyPatronymic);

    thFaculty.textContent = student.Faculty;
    tr.appendChild(thFaculty);

    thBirth.textContent = student.Birth + stringAge;
    tr.appendChild(thBirth);

    thYear.textContent = yearLearnAll;
    tr.appendChild(thYear);
}

filters.inputFaculty.addEventListener('input', function(){filterinputFaculty();});
filters.inputYear.addEventListener('input', function(){filterinputYear();});
filters.inputBirth.addEventListener('input', function(){filterinputBirth();});
filters.inputPatronymic.addEventListener('input', function(){filterinputPatronymic();});
filters.inputFamily.addEventListener('input', function(){filterinputFamily();});
filters.inputName.addEventListener('input', function(){filterinputName();});

function filterinputFaculty(){
    filterStudents = [];
/************************Блок удаления предыдущих списков***************************/
    for (let i = 0; i < students.length; i++){
        let trdelete = document.getElementById(i);

        if (trdelete == null){
            break;
        }

        trdelete.remove();
    } 
    count = 0; 
/***********************************/
    for (let i = 0; i < students.length; i++){
        if (filters.inputFaculty.value == students[i].Faculty){
            filterStudents.push(students[i]);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputYear.value != filterStudents[i].Year && filters.inputYear.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputBirth.value != filterStudents[i].Birth && filters.inputBirth.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputPatronymic.value != filterStudents[i].Patronymic && filters.inputPatronymic.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFamily.value != filterStudents[i].Family && filters.inputFamily.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputName.value != filterStudents[i].Name && filters.inputName.value){
            filterStudents.splice(i);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        createTable(filterStudents[i]); 
    } 
    return filterStudents;

}

function filterinputYear(){
    filterStudents = [];
/************************Блок удаления предыдущих списков***************************/
    for (let i = 0; i < students.length; i++){
        let trdelete = document.getElementById(i);

        if (trdelete == null){
            break;
        }

        trdelete.remove();
    } 
    count = 0; 
/***********************************/
    for (let i = 0; i < students.length; i++){
        if (filters.inputYear.value == students[i].Year){
            filterStudents.push(students[i]);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFaculty.value != filterStudents[i].Faculty  && filters.inputFaculty.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputBirth.value != filterStudents[i].Birth && filters.inputBirth.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputPatronymic.value != filterStudents[i].Patronymic && filters.inputPatronymic.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFamily.value != filterStudents[i].Family && filters.inputFamily.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputName.value != filterStudents[i].Name && filters.inputName.value){
            filterStudents.splice(i);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        createTable(filterStudents[i]); 
    } 
    return filterStudents;

}

function filterinputBirth(){

    filterStudents = [];
/************************Блок удаления предыдущих списков***************************/
    for (let i = 0; i < students.length; i++){
        let trdelete = document.getElementById(i);

        if (trdelete == null){
            break;
        }

        trdelete.remove();
    } 
    count = 0; 
/***********************************/
    for (let i = 0; i < students.length; i++){
        if (filters.inputBirth.value == students[i].Birth){
            filterStudents.push(students[i]);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFaculty.value != filterStudents[i].Faculty  && filters.inputFaculty.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputYear.value != filterStudents[i].Year && filters.inputYear.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputPatronymic.value != filterStudents[i].Patronymic && filters.inputPatronymic.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFamily.value != filterStudents[i].Family && filters.inputFamily.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputName.value != filterStudents[i].Name && filters.inputName.value){
            filterStudents.splice(i);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        createTable(filterStudents[i]); 
    } 
    return filterStudents;

}

function filterinputPatronymic(){

    filterStudents = [];/************************Блок удаления предыдущих списков***************************/
    for (let i = 0; i < students.length; i++){
        let trdelete = document.getElementById(i);

        if (trdelete == null){
            break;
        }

        trdelete.remove();
    } 
    count = 0; 
/***********************************/
    for (let i = 0; i < students.length; i++){
        if (filters.inputPatronymic.value == students[i].Patronymic){
            filterStudents.push(students[i]);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFaculty.value != filterStudents[i].Faculty  && filters.inputFaculty.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputYear.value != filterStudents[i].Year && filters.inputYear.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputBirth.value != filterStudents[i].Birth && filters.inputBirth.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFamily.value != filterStudents[i].Family && filters.inputFamily.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputName.value != filterStudents[i].Name && filters.inputName.value){
            filterStudents.splice(i);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        createTable(filterStudents[i]); 
    } 
    return filterStudents;

}

function filterinputFamily(){

    filterStudents = [];/************************Блок удаления предыдущих списков***************************/
    for (let i = 0; i < students.length; i++){
        let trdelete = document.getElementById(i);

        if (trdelete == null){
            break;
        }

        trdelete.remove();
    } 
    count = 0; 
/***********************************/
    for (let i = 0; i < students.length; i++){
        if (filters.inputFamily.value == students[i].Family){
            filterStudents.push(students[i]);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFaculty.value != filterStudents[i].Faculty  && filters.inputFaculty.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputYear.value != filterStudents[i].Year && filters.inputYear.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputBirth.value != filterStudents[i].Birth && filters.inputBirth.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputPatronymic.value != filterStudents[i].Patronymic && filters.inputPatronymic.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputName.value != filterStudents[i].Name && filters.inputName.value){
            filterStudents.splice(i);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        createTable(filterStudents[i]); 
    } 
    return filterStudents;

}

function filterinputName(){

    filterStudents = [];/************************Блок удаления предыдущих списков***************************/
    for (let i = 0; i < students.length; i++){
        let trdelete = document.getElementById(i);

        if (trdelete == null){
            break;
        }

        trdelete.remove();
    } 
    count = 0; 
/***********************************/
    for (let i = 0; i < students.length; i++){
        if (filters.inputName.value == students[i].Name){
            filterStudents.push(students[i]);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFaculty.value != filterStudents[i].Faculty  && filters.inputFaculty.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputYear.value != filterStudents[i].Year && filters.inputYear.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputBirth.value != filterStudents[i].Birth && filters.inputBirth.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputPatronymic.value != filterStudents[i].Patronymic && filters.inputPatronymic.value){
            filterStudents.splice(i);
        } 
    } 
    for (let i = 0; i < filterStudents.length; i++){
        if (filters.inputFamily.value != filterStudents[i].Family && filters.inputFamily.value){
            filterStudents.splice(i);
        } 
    } 

    for (let i = 0; i < filterStudents.length; i++){
        createTable(filterStudents[i]); 
    } 
    return filterStudents;
}

function rerefreshStudents(){
    filterStudents = [];
    for (let i = 0; i < students.length; i++){
        let trdelete = document.getElementById(i);

        if (trdelete == null){
            break;
        }

        trdelete.remove();
    } 
    count = 0; 
    for (let i = 0; i < students.length; i++){
        createTable(students[i]); 
    } 
    filters.inputName.value = null;
    filters.inputFamily.value = null;
    filters.inputYear.value = null;
    filters.inputFaculty.value = null;
    filters.inputPatronymic.value = null;
    filters.inputBirth.value = null;

}


sortButton.buttonFaculty.onclick = function(){
    if (booleanFaculty == 0) {
        for (let i = 0; i < count; i++){
            let trdelete = document.getElementById(i);
            trdelete.remove();
        }

        filterStudents.sort(function (a, b) {
            if (a.Faculty > b.Faculty) {
                return 1;
            }
            if (a.Faculty < b.Faculty) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        let countCopy = count;
        count = 0;

        for (let i = 0; i < filterStudents.length; i++){
            createTable(filterStudents[i]);
        }
        booleanFaculty = 1;
    } else {
        for (let i = 0; i < count; i++){
            let trdelete = document.getElementById(i);
            trdelete.remove();
        }

        filterStudents.sort(function (a, b) {
            if (a.Faculty > b.Faculty) {
                return -1;
            }
            if (a.Faculty < b.Faculty) {
                return 1;
            }
            // a должно быть равным b
            return 0;
        });

        let countCopy = count;
        count = 0;

        for (let i = 0; i < filterStudents.length; i++){
            createTable(filterStudents[i]);
        }
        booleanFaculty = 0;
    } 
    
}

sortButton.buttonYear.onclick = function(){
    if (booleanYear == 0) {
        for (let i = 0; i < count; i++){
            let trdelete = document.getElementById(i);
            trdelete.remove();
        }

        filterStudents.sort(function (a, b) {
            if (a.Year > b.Year) {
                return 1;
            }
            if (a.Year < b.Year) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        let countCopy = count;
        count = 0;

        for (let i = 0; i < filterStudents.length; i++){
            createTable(filterStudents[i]);
        }
        booleanYear = 1;
    } else {
        for (let i = 0; i < count; i++){
            let trdelete = document.getElementById(i);
            trdelete.remove();
        }

        filterStudents.sort(function (a, b) {
            if (a.Year > b.Year) {
                return -1;
            }
            if (a.Year < b.Year) {
                return 1;
            }
            // a должно быть равным b
            return 0;
        });

        let countCopy = count;
        count = 0;

        for (let i = 0; i < filterStudents.length; i++){
            createTable(filterStudents[i]);
        }
        booleanYear = 0;
    }
}

sortButton.buttonBirth.onclick = function(){
    if (booleanBirth == 0) {
        for (let i = 0; i < count; i++){
            let trdelete = document.getElementById(i);
            trdelete.remove();
        }

        filterStudents.sort(function (a, b) {
            if (a.Birth > b.Birth) {
                return 1;
            }
            if (a.Birth < b.Birth) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        let countCopy = count;
        count = 0;

        for (let i = 0; i < filterStudents.length; i++){
            createTable(filterStudents[i]);
        }
        booleanBirth = 1;
    } else {
        for (let i = 0; i < count; i++){
            let trdelete = document.getElementById(i);
            trdelete.remove();
        }

        filterStudents.sort(function (a, b) {
            if (a.Birth > b.Birth) {
                return -1;
            }
            if (a.Birth < b.Birth) {
                return 1;
            }
            // a должно быть равным b
            return 0;
        });

        let countCopy = count;
        count = 0;

        for (let i = 0; i < filterStudents.length; i++){
            createTable(filterStudents[i]);
        }
        booleanBirth = 0;
    }
}

sortButton.buttonNameFamilyPatronymic.onclick = function(){
    if (booleanName == 0) {
        for (let i = 0; i < count; i++){
            let trdelete = document.getElementById(i);
            trdelete.remove();
        }

        filterStudents.sort(function (a, b) {
            if (a.Name > b.Name) {
                return 1;
            }
            if (a.Name < b.Name) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });

        let countCopy = count;
        count = 0;

        for (let i = 0; i < filterStudents.length; i++){
            createTable(filterStudents[i]);
        }
        booleanName = 1;
    } else {
        for (let i = 0; i < count; i++){
            let trdelete = document.getElementById(i);
            trdelete.remove();
        }

        filterStudents.sort(function (a, b) {
            if (a.Name > b.Name) {
                return -1;
            }
            if (a.Name < b.Name) {
                return 1;
            }
            // a должно быть равным b
            return 0;
        });

        let countCopy = count;
        count = 0;

        for (let i = 0; i < filterStudents.length; i++){
            createTable(filterStudents[i]);
        }
        booleanName = 0;
    }
}

