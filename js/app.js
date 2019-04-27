
const controllerUI = (function() {
    let informationDOM = {
        containerAdd: '.container__add',
        addModal: '.container__add-modal',
        editModal: '.container__edit-modal',

        nameInput: '.nameInput', 
		surnameInput: '.surnameInput', 
		emailInput: '.emailInput',
        adressInput: '.adressInput', 
        
		modalAddSubmit: '.content__button',
        modalInformation: '.modal__information',
        bodyPersonDetails: '.body__person_details',

		nameText: ' .nameText',
		surnameText: ' .surnameText',
		emailText: ' .emailText',
        adressText: ' .adressText',
        
        contentButton: '.content__button'
    }

    const getInformationDOM = () => {
        return informationDOM;
    }
    
    const getAddInfo = () => {
        return {
            nameInput: document.querySelector(informationDOM.nameInput),
            surnameInput: document.querySelector(informationDOM.surnameInput),
            emailInput: document.querySelector(informationDOM.emailInput),
            adressInput: document.querySelector(informationDOM.adressInput)
        }
    }

    const addDetailsCheckName = () => {
        let info = getAddInfo();
        if (info.nameInput.value === ""){
            info.nameInput.style.border = "3px solid red";
        } else {
            info.nameInput.style.border = "3px solid darkgreen";
        }
    }

    const addDetailsCheckSurname = () => {
        let info = getAddInfo();

        if (info.surnameInput.value === ""){
            info.surnameInput.style.border = "3px solid red";
        } else {
            info.surnameInput.style.border = "3px solid darkgreen";
        }
    }

    const addDetailsCheckEmail = () => {
        let info = getAddInfo();

        if(info.emailInput.value === ""){
            info.emailInput.style.border = "3px solid red";
        } else {
            info.emailInput.style.border = "3px solid darkgreen";
        }
    }

    const addDetailsCheckAdress = () => {
        let info = getAddInfo();

        if(info.adressInput.value === ""){
            info.adressInput.style.border = "3px solid red";
        } else {
            info.adressInput.style.border = "3px solid darkgreen";
        }
    }

    return {
        getInformationDOM: getInformationDOM,
        getAddInfo: getAddInfo,
        addDetailsCheckName: addDetailsCheckName,
        addDetailsCheckSurname: addDetailsCheckSurname,
        addDetailsCheckEmail: addDetailsCheckEmail,
        addDetailsCheckAdress: addDetailsCheckAdress
    };     

})();


