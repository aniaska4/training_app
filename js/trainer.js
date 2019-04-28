// zmiana na nową kartę - trening 
const newCartTraining = () => {
    const overlap = document.querySelector("#personalTraining");
    overlap.addEventListener("click", function () {
        const mainContainer = document.querySelector(".app_body_main_container");
        const trainingContener = document.querySelector(".app_body_training_container");
        mainContainer.style.display = "none";
        trainingContener.style.display = "block";
    })
}

// ukazanie karty z treningiem
const showModalTraining = () => {

    const addModalButton = document.querySelector(".app_body_training_container")

    addModalButton.addEventListener("click", function () {
        const containerModal = document.querySelector(".modal_training");
        containerModal.style.display = "block";
        document.querySelector(".body__content").style.display = "block";
    })
}

// schowanie karty z treningiem
const hideModalTreining = () => {

    const closeBtn = document.querySelector(".close_training");

    closeBtn.addEventListener("click", function () {
        const containerModal = document.querySelector(".modal_training");
        containerModal.style.display = "none";
        document.querySelector(".body__content").style.display = "block";
    })
}

//zmiana koloru inputów w formularzu

function changeColors(input) {
    if (input.value === "") {
        input.style.border = "3px solid red";
    } else {
        input.style.border = "3px solid darkgreen";
    }
}

let dataValueColor = document.querySelector('.dataValue');
let categoryValueColor = document.querySelector('.categoryValue');
let descriptionValueColor = document.querySelector('.descriptionValue');



const registrationFormFunctionTraining = () => {
    
    const addButtonTrainig = document.querySelector(".content__button_training");
    const informationTraining = document.querySelector(".modal__information_training")
    const containerTraining = document.querySelector(".container__add-modal-training");;
   
    addButtonTrainig.addEventListener("click", function (e) {
        let dataValue = document.querySelector('.dataValue').value;
        let categoryValue = document.querySelector('.categoryValue').value;
        let descriptionValue = document.querySelector('.descriptionValue').value;

        const dataText = document.querySelector(".dataText");
        const categoryText = document.querySelector(".categoryText");
        const descriptionText = document.querySelector(".descriptionText");
        
        changeColors(dataValueColor);
        changeColors(categoryValueColor);
        changeColors(descriptionValueColor);
        e.preventDefault();
        if (dataValue === "" || categoryValue === "" || descriptionValue === "") {
            informationTraining.classList.add("falsyValue");
            informationTraining.innerHTML = "You Must To Complete All Red Inputs";
            setTimeout(function () {
                informationTraining.classList.remove("falsyValue");
                informationTraining.classList.add("positiveValue");
            }, 2000)
        } else {
            dataText.textContent = dataValue;
            categoryText.textContent = categoryValue;
            descriptionText.textContent = descriptionValue;            
            containerTraining.style.display = "none";

            containerTraining.classList.add("positiveValue");
        }

    })

}

const showBodyContent = () => {
    const buttonAdd = document.querySelector(".container__add_training");
    buttonAdd.addEventListener("click", function () {
        const bodyContentTraining = document.querySelector(".body__content_training");
        bodyContentTraining.style.display = "block";
    })
}
showModalTraining();
hideModalTreining();
newCartTraining();
registrationFormFunctionTraining();
showBodyContent();
