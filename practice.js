

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => response.json())
//   .then((json) =>{
//     const div = document.querySelector("#show")
//     json.forEach(element => {
//         div.innerHTML += `
//         <h3>${element.title}</h3>
//         `
//     });
//   })

async function show() {
    const pro = await fetch('https://jsonplaceholder.typicode.com/todos')
    const res = await pro.json()
    console.log(res);
    const div = document.querySelector("#show")
    res.slice(0, 20).forEach(element => {
        div.innerHTML += `
    <h3>id: ${element.id}</h3>
    <h4>Title: ${element.title}</h3>
    <button onclick="nextpage(${element.id})">See more</button>
    <hr>
    `
    });
}

show()

function nextpage(id) {
    console.log(id)
    localStorage.setItem("id" , JSON.stringify(id))
    window.location = "home.html"
}
 
