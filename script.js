const field = document.getElementById("field")
const btn = document.getElementById("btn")
const list = document.getElementById("list")

const fieldsubject = document.getElementById("field-subject")
const type = document.getElementById("type")
const people = document.getElementById("people")
const date = document.getElementById("delivery")

const addeds = []
const subjectColors = {}
const colorList = ["#4e8ef7", "#ff6b6b", "#d37c2b", "#00d2d3", "#a29bfe", "#55ef7c", "#fd79a8", "#fdcb6e"]
let colorIndex = 0

btn.addEventListener("click", () => {
    const data = getFormValues()

    if(data.name != "" && !addeds.includes(data.name) && data.subject != "" && data.types != "" && data.peoples != "" && data.delivery != ""){

        if (!subjectColors[data.subject]) {
    subjectColors[data.subject] = colorList[colorIndex % colorList.length]
    colorIndex++
}

const cor = subjectColors[data.subject]

        const item = document.createElement('li')

        item.innerHTML = `
        <span class="task-name">${data.name}</span>
    <div class="badges">
        <span class="badge">${data.subject}</span>
        <span class="badge">${data.types}</span>
        <span class="badge">${data.peoples}</span>
        <span class="badge">${formatDate(data.delivery)}</span>
    </div>
        `
        item.style.borderLeft = `6px solid ${cor}`

        const xbtn = document.createElement('button')
        xbtn.textContent = "X"
        xbtn.classList.add('xbtn') //css

    xbtn.addEventListener('click', () => {
    item.remove() 
    })

        item.appendChild(xbtn)
        list.appendChild(item)
        addeds.push(data.name)
        field.value = ""
        fieldsubject.value = ""
        date.value = ""
    }
    else{return;}
})

field.addEventListener("keyup", (event) => {
    if(event.key === 'Enter'){
        btn.click()
    }
})

function getFormValues() {
    return {
        name: field.value.trim(),
        subject: fieldsubject.value.trim(),
        types: type.value,
        peoples: people.value,
        delivery: date.value
    }
}

function formatDate(dataString){
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const data = new Date(dataString + "T00:00:00")
     const dia = data.getDate().toString().padStart(2, '0')
    const mes = (data.getMonth() + 1).toString().padStart(2, '0')
    const diaSemana = dias[data.getDay()]
    return `${dia}/${mes} (${diaSemana})`
}
