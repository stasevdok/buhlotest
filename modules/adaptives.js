let changeParameters = document.querySelector('#change-parameters');

function hideDataContainer() {
    if (window.innerWidth < 960) {
        resultContainer.classList.add('hide-container');
    };
};

hideDataContainer();

changeParameters.addEventListener('click', function() {
    resultContainer.classList.add('hide-container');
    dataContainer.classList.remove('hide-container');
})