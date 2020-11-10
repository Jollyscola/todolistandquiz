const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
const quiz = document.querySelector('.quiz')
const todolist = document.querySelector('.todolist')
const search = document.querySelector('.search input')

quiz.addEventListener('click', () => {
    window.location.href = "./quiz.html";
})
todolist.addEventListener('click', () => {
    window.location.href = "./todelist.html";
})





const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `

    list.innerHTML += html
}
addform.addEventListener('submit',e => {
    e.preventDefault();
    const todo = addform.add.value.trim();
    if(todo.length){
    generateTemplate(todo)
    addform.reset()
    }
})


list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();

    }

})

const filterTodoes = term => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
}

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim();
    filterTodoes(term);
} )