const div = document.createElement('div')

const input = document.querySelector('input')

div.textContent = input.value

const button = document.querySelector('.add_task_button')
 
button.addEventListener('click' , (e) => {
    e.preventDefault()
    const ol = document.querySelector('ol')
    const li = document.createElement('li')
    li.textContent = input.value
    ol.appendChild(li)
    input.value = ''
    const button2 = document.createElement('button')
    button2.textContent = 'x'
    li.append(button2)
    button2.addEventListener('click' , (e) => {
        e.target.parentElement.remove()
    })
})