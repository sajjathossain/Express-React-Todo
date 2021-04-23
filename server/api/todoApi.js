const URL = "http://localhost:5000/todos"


const fetch = () => {
    return fetch(URL)
    .then((res) => res.json())
    .then(data => todoList = data)
}

export default fetch;