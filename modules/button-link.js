let buttonLink = document.querySelector('#button-link');

function copyToClipboard() {
    navigator.clipboard.writeText('https://stasevdok.github.io/buhlometr/');
    let oldInnerHtml = buttonLink.innerHTML;
    buttonLink.innerHTML = 'Ссылка скопирована';
    setTimeout(function() {
        buttonLink.innerHTML = oldInnerHtml;
      }, 1000);
};

buttonLink.addEventListener('click', function() {
    copyToClipboard();
});

function changeButtonText() {
    if (window.innerWidth < 500) {
        buttonLink.innerHTML = 'Ссылка<img class="button-icon" src="i/link.svg">';
    } else {
        buttonLink.innerHTML = 'Ссылка на калькулятор<img class="button-icon" src="i/link.svg">';
    };
};

changeButtonText();

window.addEventListener('resize', function() {
    changeButtonText();
});