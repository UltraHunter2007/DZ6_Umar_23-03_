//DZ-1

const block = document.querySelector('.block')
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')

let count = 1

function fetchData(count) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `
        })
}

fetchData(count)

btnNext.onclick = () => {
    if (count < 200 ) count++
    fetchData(count)
}

btnPrev.onclick = () => {
    if (count > 1) count--
    fetchData(count)
}

//DZ-2

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            console.log(item)
        })
    })