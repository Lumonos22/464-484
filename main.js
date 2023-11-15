// №1

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//   let p = document.createElement('p');
//   p.textContent = elem;


//   p.addEventListener('click', function() {
//     let currentNumber = parseInt(this.textContent);
//     this.textContent = currentNumber + 1;
//   });

//   parent.appendChild(p);
// }

// №2

// let ul = document.getElementById('elem');
// let arr = ['item1', 'item2', 'item3', 'item4', 'item5'];

// for (let elem of arr) {
//   let li = document.createElement('li');

//   li.textContent = elem;

//   ul.appendChild(li);
// }

// №2.2

// let ul = document.getElementById('elem');
// let arr = ['item1', 'item2', 'item3', 'item4', 'item5'];

// for (let elem of arr) {

//   let li = document.createElement('li');

//   li.textContent = elem;

//   li.addEventListener('click', function() {
//     alert(this.textContent);
//   });

//   ul.appendChild(li);
// }

// №2.3

// let ul = document.getElementById('elem');
// let arr = ['item1', 'item2', 'item3', 'item4', 'item5'];

// for (let elem of arr) {
//   let li = document.createElement('li');

//   li.textContent = elem;

//   li.addEventListener('click', function() {
//     this.textContent += '!';
//   });

//   ul.appendChild(li);
// }

// №2.4

// let ul = document.getElementById('elem');
// let arr = ['item1', 'item2', 'item3', 'item4', 'item5'];

// for (let elem of arr) {
//   let li = document.createElement('li');

//   li.textContent = elem;

//   li.addEventListener('click', function() {
//     if (!this.textContent.includes('!')) {
//       this.textContent += '!';
//     }
//   });

//   ul.appendChild(li);
// }

// №3

// let table = document.querySelector('#table');

// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');

//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }

//     table.appendChild(tr);
// }

// №3.2


// let table = document.querySelector('#table');

// for (let i = 0; i < 10; i++) {
//     let row = document.createElement('tr');

//     for (let j = 0; j < 5; j++) {
//         let cell = document.createElement('td');

//         row.appendChild(cell);
//     }

//     table.appendChild(row);
// }

// №4

// let table = document.querySelector('#table');

// let counter = 1; // начальное значение счетчика

// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');

//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');

//         td.textContent = counter; // записываем счетчик в ячейку
//         counter++; // увеличиваем счетчик

//         tr.appendChild(td);
//     }

//     table.appendChild(tr);
// }

// №4.2

// let table = document.querySelector('#table');

// let counter = 2;

// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');

//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');

//         td.textContent = counter;
//         counter += 2;
//         tr.appendChild(td);
//     }

//     table.appendChild(tr);
// }

// №5

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
//     let tr = document.createElement('tr');

//     for (let elem of subArr) {
//         let td = document.createElement('td');
//         td.textContent = elem;
//         tr.appendChild(td);
//     }

//     table.appendChild(tr);
// }

// №5.2

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
//     let tr = document.createElement('tr');

//     for (let elem of subArr) {
//         let td = document.createElement('td');
//         td.textContent = elem ** 2; // записываем квадрат элемента в ячейку
//         tr.appendChild(td);
//     }

//     table.appendChild(tr);
// }

// №6

// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];

// let table = document.getElementById('table');

// for (let employee of employees) {
//   let tr = document.createElement('tr');

//   let tdName = document.createElement('td');
//   tdName.textContent = employee.name;
//   tr.appendChild(tdName);

//   let tdAge = document.createElement('td');
//   tdAge.textContent = employee.age;
//   tr.appendChild(tdAge);

//   let tdSalary = document.createElement('td');
//   tdSalary.textContent = employee.salary;
//   tr.appendChild(tdSalary);

//   table.appendChild(tr);
// }

// №6.2

// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];

// let table = document.getElementById('table');

// for (let employee of employees) {
//   let tr = document.createElement('tr');

//   let tdName = document.createElement('td');
//   tdName.textContent = employee.name;
//   tr.appendChild(tdName);

//   let tdAge = document.createElement('td');
//   tdAge.textContent = employee.age;
  
//   tdAge.addEventListener('click', function() {
//       employee.age++;
//       tdAge.textContent = employee.age;
//   });

//   tr.appendChild(tdAge);

//   let tdSalary = document.createElement('td');
//   tdSalary.textContent = employee.salary;
//   tr.appendChild(tdSalary);

//   table.appendChild(tr);
// }

// №6.3

// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];

// let table = document.getElementById('table');

// for (let employee of employees) {
//   let tr = document.createElement('tr');

//   let tdName = document.createElement('td');
//   tdName.textContent = employee.name;
//   tr.appendChild(tdName);

//   let tdAge = document.createElement('td');
//   tdAge.textContent = employee.age;
//   tr.appendChild(tdAge);

//   let tdSalary = document.createElement('td');
//   tdSalary.textContent = employee.salary;

//   tdSalary.addEventListener('click', function () {
//       employee.salary *= 1.1;
//       tdSalary.textContent = employee.salary.toFixed(2); // Ограничиваем количество знаков после запятой
//   });

//   tr.appendChild(tdSalary);

//   table.appendChild(tr);
// }

// №7

// let table = document.querySelector('#table');
// let addRowBtn = document.getElementById('addRowBtn');

// addRowBtn.addEventListener('click', function () {
//     let tr = document.createElement('tr');

//     for (let i = 1; i <= 3; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }

//     table.appendChild(tr);
// });

// №7.2

// let table = document.querySelector('#table');
// let addRowColBtn = document.getElementById('addRowColBtn');

// addRowColBtn.addEventListener('click', function () {
//     let trs = document.querySelectorAll('#table tr');
//     for (let tr of trs) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }

//     let newRow = document.createElement('tr');
//     for (let i = 0; i < trs[0].childElementCount; i++) {
//         let td = document.createElement('td');
//         newRow.appendChild(td);
//     }
//     table.appendChild(newRow);
// });

// №8

// let doubleNumbersBtn = document.getElementById('doubleNumbersBtn');

// doubleNumbersBtn.addEventListener('click', function () {
//     let tds = document.querySelectorAll('#table td');

//     for (let td of tds) {
//         let currentNumber = parseInt(td.textContent);
//         if (!isNaN(currentNumber)) {
//             td.textContent = currentNumber * 2;
//         }
//     }
// });

// №9

// let parent = document.querySelector('#parent');
// let button = document.getElementById('button');

// button.addEventListener('click', function () {
//     let li = document.createElement('li');
//     li.textContent = parent.children.length + 1; 

//     li.addEventListener('click', function () {
//         this.remove();
//     });

//     parent.appendChild(li);
// });

// parent.addEventListener('click', function (event) {
//     if (event.target.tagName === 'LI') {
//         event.target.remove();
//     }
// });

// №11

// let lis = document.querySelectorAll('#parent li');

// for (let li of lis) {
//     let removeLink = document.createElement('a');
//     removeLink.href = '#';
//     removeLink.textContent = 'remove';

//     li.appendChild(removeLink);

//     removeLink.addEventListener('click', function (event) {
//         li.remove();
//         event.preventDefault();
//     });
// }

// №11.2

// let rows = document.querySelectorAll('#myTable tr');

// rows.forEach(function(row) {
//     let deleteCell = document.createElement('td');
    
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Delete';
    
//     deleteLink.addEventListener('click', function(event) {
//         row.remove();
//         event.preventDefault();
//     });
    
//     deleteCell.appendChild(deleteLink);
    
//     row.appendChild(deleteCell);
// });

// №14

// let listItems = document.querySelectorAll('#myList li');

// for (let listItem of listItems) {
//     listItem.addEventListener('click', function editListItem() {
//         let input = document.createElement('input');
//         input.value = listItem.textContent;

//         listItem.textContent = '';
//         listItem.appendChild(input);

//         input.addEventListener('blur', function () {
//             listItem.textContent = this.value;
//             listItem.addEventListener('click', editListItem);
//         });

//         listItem.removeEventListener('click', editListItem);
//         input.focus();
//     });
// }

// №14.2

// let cells = document.querySelectorAll('#myTable td');

// for (let cell of cells) {
//     cell.addEventListener('click', function editCell() {
//         let input = document.createElement('input');
//         input.value = cell.textContent;

//         cell.textContent = '';
//         cell.appendChild(input);

//         input.addEventListener('blur', function () {
//             cell.textContent = this.value;
//             cell.addEventListener('click', editCell);
//         });

//         cell.removeEventListener('click', editCell);
//         input.focus();
//     });
// }

// №15

// let spans = document.querySelectorAll('#parent span');
// let removeLinks = document.querySelectorAll('.remove-link');

// for (let i = 0; i < spans.length; i++) {
//     spans[i].addEventListener('click', function editParagraph() {
//         let input = document.createElement('input');
//         input.value = spans[i].textContent;

//         spans[i].textContent = '';
//         spans[i].appendChild(input);

//         input.addEventListener('blur', function () {
//             spans[i].textContent = this.value;
//             spans[i].addEventListener('click', editParagraph);
//         });

//         spans[i].removeEventListener('click', editParagraph);
//         input.focus();
//     });

//     removeLinks[i].addEventListener('click', function () {
//         let paragraph = this.parentElement;
//         paragraph.remove();
//     });
// }

// №15.2

// let paragraphs = document.querySelectorAll('#parent p');

// for (let paragraph of paragraphs) {
//     let span = document.createElement('span');
//     span.textContent = paragraph.textContent;

//     span.addEventListener('click', function editParagraph() {
//         let input = document.createElement('input');
//         input.value = span.textContent;

//         span.textContent = '';
//         span.appendChild(input);

//         input.addEventListener('blur', function () {
//             span.textContent = this.value;
//             span.addEventListener('click', editParagraph);
//         });

//         span.removeEventListener('click', editParagraph);
//         input.focus();
//     });

//     let removeLink = document.createElement('a');
//     removeLink.href = '#';
//     removeLink.textContent = 'remove';
//     removeLink.addEventListener('click', function () {
//         paragraph.remove();
//     });

//     paragraph.textContent = '';
//     paragraph.appendChild(span);
//     paragraph.appendChild(removeLink);
// }

// №16

// let underlineLinks = document.querySelectorAll('.underline-link');

// for (let link of underlineLinks) {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();
//         let paragraph = link.parentElement.parentElement;
//         paragraph.classList.toggle('underline-text');
//     });
// }

// №16.2

// let underlineLinks = document.querySelectorAll('.underline-link');

// for (let link of underlineLinks) {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();
//         let paragraph = link.parentElement.parentElement;

//         paragraph.classList.toggle('underline-text');

//         link.parentElement.remove();
//     });
// }

// №16.3

// let highlightLinks = document.querySelectorAll('.highlight-link');

// for (let link of highlightLinks) {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();
//         let row = link.parentElement.parentElement;

//         row.classList.toggle('highlighted-row');
//     });
// }

// №16.4

// let highlightLinks = document.querySelectorAll('.highlight-link');

// for (let link of highlightLinks) {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();
//         let row = link.parentElement.parentElement;

//         row.classList.toggle('highlighted-row');

//         let isHighlighted = row.classList.contains('highlighted-row');
//         link.textContent = isHighlighted ? 'Unhighlight' : 'Highlight';
//     });
// }

// №17

// let elem = document.querySelector('#elem');
// let toggleButton = document.querySelector('#toggle');

// toggleButton.addEventListener('click', function() {
//     elem.classList.toggle('hidden');
// });


// №21

// let lis = document.querySelectorAll('ul li');

// for (let li of lis) {
//     li.addEventListener('click', function() {
//         this.classList.add('active');
//     });
// }

// №21.2

// let lis = document.querySelectorAll('ul li');

// for (let li of lis) {
//     li.addEventListener('click', function() {
//         if (this.classList.contains('active')) {
//             this.classList.remove('active');
//         } else {
//             this.classList.add('active');
//         }
//     });
// }

// №22

// let list = document.getElementById('list');
//     let newItemInput = document.getElementById('newItemInput');
//     let array = ['Item 1', 'Item 2', 'Item 3'];
//     for (let item of array) {
//       createListItem(item);
//     }

   
//     function createListItem(text) {
//       let li = document.createElement('li');
//       li.textContent = text;

 
//       let editInput = document.createElement('input');
//       li.appendChild(editInput);

   
//       let editButton = document.createElement('button');
//       editButton.textContent = 'Edit';
//       editButton.onclick = function() {
//         editInput.style.display = 'block';
//         editInput.value = li.textContent;
//         li.style.display = 'none';
//       };
//       li.appendChild(editButton);


//       let deleteLink = document.createElement('a');
//       deleteLink.href = '#';
//       deleteLink.textContent = 'Delete';
//       deleteLink.onclick = function() {
//         li.remove();
//       };
//       li.appendChild(deleteLink);

   
//       let strikeLink = document.createElement('a');
//       strikeLink.href = '#';
//       strikeLink.textContent = 'Strike';
//       strikeLink.onclick = function() {
//         li.style.textDecoration = 'line-through';
//       };
//       li.appendChild(strikeLink);

//       list.appendChild(li);
//     }


//     function addItem() {
//       let newItemText = newItemInput.value.trim();
//       if (newItemText !== '') {
//         createListItem(newItemText);
//         newItemInput.value = '';
//       }
//     }


// let employeeTable = document.getElementById('employeeTable');
// let nameInput = document.getElementById('nameInput');
// let ageInput = document.getElementById('ageInput');
// let salaryInput = document.getElementById('salaryInput');

// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];

// displayEmployees();

// function displayEmployees() {
//   let tbody = employeeTable.querySelector('tbody');
//   tbody.innerHTML = '';

//   employees.forEach((employee, index) => {
//     let row = tbody.insertRow();
//     row.insertCell().textContent = employee.name;
//     row.insertCell().textContent = employee.age;
//     row.insertCell().textContent = employee.salary;

//     let editCell = row.insertCell();
//     let editLink = document.createElement('a');
//     editLink.href = '#';
//     editLink.textContent = 'Edit';
//     editLink.onclick = function() {
//       editEmployee(index);
//     };
//     editCell.appendChild(editLink);

//     let deleteCell = row.insertCell();
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Delete';
//     deleteLink.onclick = function() {
//       deleteEmployee(index);
//     };
//     deleteCell.appendChild(deleteLink);
//   });
// }

// function editEmployee(index) {
//   let employee = employees[index];
//   nameInput.value = employee.name;
//   ageInput.value = employee.age;
//   salaryInput.value = employee.salary;

//   let editButton = document.createElement('button');
//   editButton.textContent = 'Save';
//   editButton.onclick = function() {
//     saveEmployee(index);
//   };

//   employeeTable.parentNode.appendChild(editButton);
// }

// function saveEmployee(index) {
//   let updatedEmployee = {
//     name: nameInput.value,
//     age: ageInput.value,
//     salary: salaryInput.value,
//   };

//   employees[index] = updatedEmployee;
//   displayEmployees();

//   clearInputs();
//   removeEditButton();
// }

// function deleteEmployee(index) {
//   employees.splice(index, 1);
//   displayEmployees();
// }

// function addEmployee() {
//   let newEmployee = {
//     name: nameInput.value,
//     age: ageInput.value,
//     salary: salaryInput.value,
//   };

//   employees.push(newEmployee);
//   displayEmployees();

//   clearInputs();
// }

// function clearInputs() {
//   nameInput.value = '';
//   ageInput.value = '';
//   salaryInput.value = '';
// }

// function removeEditButton() {
//   let editButton = document.querySelector('button');
//   if (editButton) {
//     editButton.remove();
//   }
// }

// let employeeList = document.getElementById('employeeList');
// let addEmployeeForm = document.getElementById('addEmployeeForm');

// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];

// displayEmployees();

// addEmployeeForm.addEventListener('submit', function (event) {
//   event.preventDefault();
//   addEmployee();
// });

// function displayEmployees() {
//   employeeList.innerHTML = '';

//   employees.forEach((employee, index) => {
//     let li = document.createElement('li');

//     li.innerHTML = `
//       <span>${employee.name}, ${employee.age} years old, Salary: $${employee.salary}</span>
//       <button onclick="editField(${index}, 'name')">Имя</button>
//       <button onclick="editField(${index}, 'age')">Возраст</button>
//       <button onclick="editField(${index}, 'salary')">Зарплата</button>
//       <a href="#" onclick="deleteEmployee(${index})">Удалить</a>
//     `;

//     employeeList.appendChild(li);
//   });
// }

// function editField(index, field) {
//   let employee = employees[index];

//   let newValue = prompt(`Enter new ${field}:`, employee[field]);

//   if (newValue !== null) {
//     employee[field] = field === 'age' || field === 'salary' ? parseInt(newValue) : newValue;
//     displayEmployees();
//   }
// }

// function deleteEmployee(index) {
//   if (confirm('Are you sure you want to delete this employee?')) {
//     employees.splice(index, 1);
//     displayEmployees();
//   }
// }

// function addEmployee() {
//   let nameInput = document.getElementById('nameInput');
//   let ageInput = document.getElementById('ageInput');
//   let salaryInput = document.getElementById('salaryInput');

//   let newEmployee = {
//     name: nameInput.value,
//     age: parseInt(ageInput.value),
//     salary: parseInt(salaryInput.value),
//   };

//   employees.push(newEmployee);
//   displayEmployees();


//   nameInput.value = '';
//   ageInput.value = '';
//   salaryInput.value = '';
// }