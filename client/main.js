

let baseURL = 'http://localhost:4000'


const complimentBtn = document.getElementById("complimentButton")

const fortuneDiv = document.querySelector('#fortuneDisplay')
const getFortuneBtn = document.querySelector('#getFortune')

const fortuneBtn = document.getElementById("fortuneButton")

const addFortuneBtn = document.querySelector('#addButton')
const fortuneInput = document.querySelector('#newFortune')
const deleteBtn = document.querySelector('#deleteButton')
const deleteInput = document.querySelector('#deleteId')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    
    fortuneDiv.innerHTML = ''

    axios.get(`${baseURL}/api/fortune`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
                }
            })
}

const addFortune = () => {
    fortuneDiv.innerHTML=''

    let bodyObj = {
        name: fortuneInput.value
    }

    axios.post(`${baseURL}/api/fortune`, bodyObj)
    .then((res) => {
        console.log(res.data)

        for(let i = 0; i < res.data.length; i++){
            let newSpan = document.createElement('p')
            newSpan.textContent = `${i + 1}. ${res.data[i]}`
            fortuneDiv.appendChild(newSpan)
        }
    })
};

const deleteFortune = () => {
    fortuneDiv.innerHTML = ''

    let idToDelete = deleteInput.value

    axios.delete(`${baseURL}/api/fortune/${idToDelete}`)
        .then((res) => {
            console.log(res.data)

            for(let i = 0; i < res.data.length; i++){
                let newSpan = document.createElement('p')
                newSpan.textContent = `${i + 1}. ${res.data[i]}`
                fortuneDiv.appendChild(newSpan)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortunes)
getFortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener(`click`, deleteFortune)
getFortune()