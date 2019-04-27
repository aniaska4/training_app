// przycisk edycji w danych personalnych
const editEventButton = () => {
    const editButton = document.querySelector(".content__button");
    editButton.addEventListener("click", function (){
        const editButton = document.querySelector(".container__edit img");
        editButton.style.display = "block";
    })
}

const editButton = () => {
    const editButton = document.querySelector(".container__edit img");
    editButton.addEventListener("click", function () {
        const addButton = document.querySelector(".container__add-modal");
        addButton.style.display = "block";
    })
}

// przycisk edycji w danych treningowych

const editEvenetButtonTraining = () => {
    const editButton = document.querySelector(".content__button_training");
    editButton.addEventListener("click", function (){
        const editButton = document.querySelector(".container__edit_training img");
        editButton.style.display = "block";
    })
}


const editTraining = () => {
    const editButtonTraining = document.querySelector(".container__edit_training img"); 
    editButtonTraining.addEventListener("click", function () {
        const addButton = document.querySelector(".container__add-modal-training");
        addButton.style.display = "block";
    })
}

editEventButton();
editButton();
editEvenetButtonTraining();
editTraining();