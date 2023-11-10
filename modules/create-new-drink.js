// function createNewDrink() {
//     let newDrink = document.createElement('div');
//     let numberAndDrink = document.createElement('div');
//     let drinkNumber = document.createElement('div');
//     let drinkAmountEl = document.createElement('input');
//     let alcoholLevelEl = document.createElement('input');

//     newDrink.setAttribute('class', 'new-drink');
//     numberAndDrink.setAttribute('class', 'number-and-drink');
//     drinkNumber.setAttribute('class', 'drink-number');
//     drinkAmountEl.setAttribute('class', 'input-style drink-amount focus-outline');
//     alcoholLevelEl.setAttribute('class', 'input-style alcohol-level focus-outline');
//     drinkAmountEl.setAttribute('placeholder', 'Объём напитка в мл.');
//     alcoholLevelEl.setAttribute('placeholder', 'Крепость напитка (%)');

//     numberAndDrink.append(drinkNumber);
//     numberAndDrink.append(drinkAmountEl);
    
//     newDrink.append(numberAndDrink);
//     newDrink.append(alcoholLevelEl);

//     otherDrinks.append(newDrink);

//     let oldLine = document.querySelector('#other-drinks-line');
//     oldLine.remove();
//     let newLine = document.createElement('div');
//     newLine.setAttribute('id', 'other-drinks-line');
//     otherDrinks.append(newLine);

//     countNewDrinks = parseInt(document.querySelectorAll('.new-drink').length);
//     drinkNumber.textContent = `#${countNewDrinks}`;
// };

function createNewDrink() {
    let newDrink = document.createElement('div');
    let numberAndDrink = document.createElement('div');
    let drinkNumber = document.createElement('div');
    let drinkAmountEl = document.createElement('input');
    let alcoholLevelEl = document.createElement('input');

    newDrink.setAttribute('class', 'new-drink');
    numberAndDrink.setAttribute('class', 'number-and-drink');
    drinkNumber.setAttribute('class', 'drink-number');
    drinkAmountEl.setAttribute('class', 'input-style drink-amount focus-outline');
    alcoholLevelEl.setAttribute('class', 'input-style alcohol-level focus-outline');
    drinkAmountEl.setAttribute('placeholder', 'Объём напитка в мл.');
    alcoholLevelEl.setAttribute('placeholder', 'Крепость напитка (%)');

    numberAndDrink.append(drinkNumber);
    numberAndDrink.append(drinkAmountEl);
    
    newDrink.append(numberAndDrink);
    newDrink.append(alcoholLevelEl);

    otherDrinks.append(newDrink);

    let oldLine = document.querySelector('#other-drinks-line');
    oldLine.remove();
    let newLine = document.createElement('div');
    newLine.setAttribute('id', 'other-drinks-line');
    otherDrinks.append(newLine);

    countNewDrinks = parseInt(document.querySelectorAll('.new-drink').length);
    drinkNumber.textContent = `#${countNewDrinks}`;

    [weightEl, drinkAmountEl, alcoholLevelEl].forEach(function(element) {
        element.addEventListener('input', function() {
            let value = element.value;
            value = value.replace(/,/g, '.');
            value = value.replace(/[^\d.]/g, '');
            element.value = value;
            element.classList.remove('error');
        });
    });

    getResults.addEventListener('click', function() {
        hiddenResults.forEach(function(element) {
            if (parseFloat(weightEl.value) >= 1 && parseFloat(drinkAmountEl.value) >= 0 && parseFloat(alcoholLevelEl.value) >= 0) {
                element.classList.remove('hide-result');
                dataContainer.classList.add('hide-container');
                resultContainer.classList.remove('hide-container');
            };
        });
        if (parseFloat(weightEl.value) >= 1) {
            weightEl.classList.remove('error');
        } else {
            weightEl.classList.add('error');
        };
        if (parseFloat(drinkAmountEl.value) >= 0) {
            drinkAmountEl.classList.remove('error');
        } else {
            drinkAmountEl.classList.add('error');
        };
        if (parseFloat(alcoholLevelEl.value) >= 0) {
            alcoholLevelEl.classList.remove('error');
        } else {
            alcoholLevelEl.classList.add('error');
        };

        calculateMaxDose();
    
        this.amount = parseFloat(drinkAmountEl.value);
        this.level = parseFloat(alcoholLevelEl.value);

        if (isNaN(this.amount)) {
            this.amount = 0;
        };
        if (isNaN(this.level)) {
            this.level = 0;
        };

        let newDrinkInArray = {
            amount: this.amount,
            level: this.level,
        };

        newDrinks.push(newDrinkInArray);

        let newDrinks2 = newDrinks.slice(-countNewDrinks);
        newDrinks = newDrinks2;

        for (let i = 0; i <= newDrinks.length - 1; i++) {
            const drankResult = newDrinks[i].amount * newDrinks[i].level / 100;
            totalDrank += drankResult;
            allowToDrink = maxDose - totalDrank;
            let remainAlcoholValue = Math.floor(allowToDrink);
            let remainVodkaValue = Math.floor(allowToDrink*100/40);
            let remainChampagneValue = Math.floor(allowToDrink*100/12.5);
            remainAlcohol.innerHTML = `До смертельной дозы ещё ${remainAlcoholValue} мл.`;
            remainVodka.innerHTML = `Это ${remainVodkaValue} мл. водки (40%) или ${remainChampagneValue} мл. шампанского (12.5%)`;
        }
        totalDrank = 0;

        alcoholStatus(); 
    });
};

addButton.addEventListener('click', function () {
    createNewDrink();
});

createNewDrink();
