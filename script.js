const field = document.getElementById("field")
const btn = document.getElementById("btn")
const list = document.getElementById("list")

const addeds = []

btn.addEventListener("click", () => {
    const name = field.value.trim()

    if(name != "" && !addeds.includes(name)){
        const item = document.createElement('li')
        item.textContent = name + "  "
        const xbtn = document.createElement('button')
        xbtn.textContent = "X"
        xbtn.classList.add('xbtn') //css

    xbtn.addEventListener('click', () => {
    item.remove() 
    })

        item.appendChild(xbtn)
        list.appendChild(item)
        addeds.push(name)
        field.value = ""
    }
    else{return;}
})

field.addEventListener("keyup", (event) => {
    if(event.key === 'Enter'){
        btn.click()
    }
})