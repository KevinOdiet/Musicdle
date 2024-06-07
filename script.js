document.getElementById('textInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validateInput()
    }
});

document.getElementById('validateButton').addEventListener('click', function () {
    validateInput();
});

nbrTry = 0;

function validateInput() {
    const textInput = document.getElementById('textInput');
    const displayTextContainer = document.getElementById('displayTextContainer');
    const nameAlbum = document.getElementById('albumName');
    const textInputContainer = document.getElementById('textInputContainer');

    const input = textInput.value.trim().toLowerCase();
    const nameA = nameAlbum.value.toLowerCase();

    const newText = document.createElement('p');
    const bouton = document.createElement('button');



    if (input === nameA) {
        newText.textContent = textInput.value;
        newText.classList.add('correct-input');
        textInput.value = '';
        setTimeout(() => {
            location.reload();
        }, 500);
    } else if (input !== '') {
        newText.textContent = textInput.value;
        newText.classList.add('false-input');
        textInput.value = '';
    }
    nbrTry++;


    if (nbrTry == 5) {
        setTimeout(() => {
            bouton.innerHTML = 'Rejouer';
            bouton.onclick = function () {
                location.reload();
            };
            textInputContainer.appendChild(bouton);
        }, 300);
    }

    if (nbrTry <= 5) {

        displayTextContainer.appendChild(newText);
    }
}