const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addFortuneBtn = document.getElementById('addButton')
const fortuneInput = document.getElementById("addFortune")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

    const getFortune = () => {
        axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addFortune = () => {
    dinoDiv.innerHTML=''

    let bodyObj = {
        name: fortuneInput.value
    }

    axios.post(`${baseURL}/dinos`, bodyObj)
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
};

const deleteFortune = () => {
    fortuneDiv.innerHTML = ''

    let idToDelete = deleteInput.value

    axios.delete(`${baseURL}/fortune/${idToDelete}`)
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
fortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', addFortune)
deleteBtn.addEventListener(`click`, deleteFortune)