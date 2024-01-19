const data = localStorage.getItem("id")
const id = JSON.parse(data)
console.log(id);

async function renderTodo() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const res = await data.json()
    console.log(res);
}

renderTodo()