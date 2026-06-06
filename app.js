let Input = document.querySelector("#input")
let btn = document.querySelector("#btn")
let list = document.querySelector("#list-container")


Input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
})
btn.addEventListener("click", (e) => {
    addTask();
})

function addTask(){
    if(Input.value === ''){
        alert("You must write something")
    }else{
        let fieldVal = Input.value;
        let li = document.createElement("li");
        li.innerHTML = fieldVal;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    Input.value = '';
    saveData();
}

list.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function displayData(){
    list.innerHTML = localStorage.getItem("data");
}

displayData();