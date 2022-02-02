const userInput = document.getElementById('user-input')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')

btn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  newLi.innerText = userInput.value
  if (userInput !== ''){
    list.appendChild(newLi)
    userInput.value = ''
  }
})



