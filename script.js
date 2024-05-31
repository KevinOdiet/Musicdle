document.getElementById('textInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        validateInput()
    }
});

document.getElementById('validateButton').addEventListener('click', function () {
    validateInput();
});


function validateInput() {
    const textInput = document.getElementById('textInput');
    const displayTextContainer = document.getElementById('displayTextContainer');
    const nameAlbum = document.getElementById('albumName');

    const input = textInput.value.trim().toLowerCase();
    const nameA = nameAlbum.value.toLowerCase();

    const newText = document.createElement('p');

    if (input === nameA) {
        newText.textContent = textInput.value;
        newText.classList.add('correct-input');
        textInput.value = '';
    } else if (input !== '') {
        newText.textContent = textInput.value;
        newText.classList.add('false-input');
        textInput.value = '';
    }

    displayTextContainer.appendChild(newText);
}