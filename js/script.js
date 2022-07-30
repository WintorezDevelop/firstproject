function selectClassActive (id) {
    let el = document.getElementsByClassName('active')[0];
    el.classList.remove('active');
    let a = document.getElementById(id);
    a.classList.add('active');
}
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
    students.push(student);
    //createTable(student); 
    console.log(students);
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
createTableStart(tableStart);

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