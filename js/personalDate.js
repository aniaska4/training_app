
// ukrywanie modułu danych personalnych:
const modals = () => {
    const showAddModal = () => {
        document.querySelector('.container__add-modal').style.display = 'block';
    }

    const hideAddModal = () => {
        document.querySelector('.container__add-modal').style.display = 'none';
    }

    document.querySelector('.container__add').addEventListener('click', showAddModal);
    document.querySelector('.close').addEventListener('click', hideAddModal);
}

//powrót do zakładki "dane osobowe"

const cartPersonalInformation = () => {
    const cart = document.querySelector("#personalInformation");
    cart.addEventListener("click", function () {
        const personalContainer = document.querySelector(".app_body_main_container");
        const trainingContener = document.querySelector(".app_body_training_container");
        personalContainer.style.display = "block";
        trainingContener.style.display = "none";
    })
}

//formularz uzupełnienia danych:
const registrationFormFunction = () => {
    
    const addButton = document.querySelector('.content__button'); 
    const information = document.querySelector('.modal__information');
    const container = document.querySelector(".modal");

    addButton.addEventListener("click", function (e) {
        let nameValue = document.querySelector('.nameInput').value;
        let surnameValue = document.querySelector('.surnameInput').value;
        let emailInput = document.querySelector('.emailInput').value;
        let adressValue = document.querySelector('.adressInput').value;

        const nameText = document.querySelector("#nameText");
        const surnameText = document.querySelector(".surnameText");
        const emailText = document.querySelector(".emailText");
        const adressText = document.querySelector(".adressText");
        
        controllerUI.addDetailsCheckName();
        controllerUI.addDetailsCheckSurname();
        controllerUI.addDetailsCheckEmail();
        controllerUI.addDetailsCheckAdress()
        e.preventDefault();
        if (nameValue === "" || surnameValue === "" || emailInput === "" || adressValue === "") {
            information.classList.add("falsyValue");
            information.innerHTML = "You Must To Complete All Red Inputs";
            setTimeout(function () {
                information.classList.remove("falsyValue");
                information.classList.add("positiveValue");
            }, 2000)
        } else {
            nameText.textContent = nameValue;
            surnameText.textContent = surnameValue;
            emailText.textContent = emailInput;
            adressText.textContent = adressValue;
            container.style.display = "none"

            nameValue = "";
            surnameValue = "";
            emailInput = "";

            container.classList.add("positiveValue");
        }
    });

    
}

registrationFormFunction();
cartPersonalInformation();
modals();
