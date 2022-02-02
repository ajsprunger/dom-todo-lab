const userInput = document.getElementById('user-input')
const btn = document.getElementById('submit-button')
const list = document.getElementById('todo-list')
const reset = document.getElementById('reset')

btn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  newLi.innerText = userInput.value
  if (userInput.value !== ''){
    list.appendChild(newLi)
    userInput.value = ''
  }
})

reset.addEventListener('click', function(evt){
  userInput.value = ''
  const wholeList = document.querySelectorAll('li')
  list.remove(wholeList)
})


document.querySelector('ul').addEventListener('click', handleClick)

function handleClick(evt){
  evt.target.parentNode.removeChild(evt.target)
}


