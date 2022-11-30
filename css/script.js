// create variables
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');

// action to be taken when clicked on hide list button
toggleBtn.addEventListener('click', () => {
  if (divList.style.display === 'none') {
    divList.style.display = 'block';
    toggleBtn.innerHTML = 'Hide List';
  } else {
    divList.style.display = 'none';
    toggleBtn.innerHTML = 'Show List';
  }
});

/* 
2. add list items
-----------------
*/
// create variables
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

function addLists() {
  if (addInput.value === '') {
    alert('Enter the list name please!!!');
  } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
    createBtn(li);
  }
}

// add list when clicked on add item button
addBtn.addEventListener('click', () => {
  addLists();
});

// add list when pressed enter
addInput.addEventListener('keyup', (event) => {
  if(event.which === 13) {
    addLists();
  }
});
