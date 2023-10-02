const groceryList = document.querySelector('ul');
const userInput = document.getElementById('item');
const userInputButton = document.querySelector('button');

userInputButton.addEventListener('click', ()=> {
  const userItem = userInput.value;

  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.textContent = userInput.value;
  button.textContent = 'Delete';
  button.addEventListener('click', () => groceryList.removeChild(li));

  li.appendChild(span);
  li.appendChild(button);
  groceryList.appendChild(li);

  userInput.value = '';
  userInput.focus();
  
});

