let phone = document.querySelector('#phone');

//event - содержит информацию о событии
//event.type - тип события 
//event.key - нажатый на клавиатуре символ
//preventDefault - отмена действия по умолчанию

phone.addEventListener('keydown', (event) => {
    console.log(event.key);
    let isDigit = false;
    let isDash = false;
    let isControl = false;

    if (event.key >= 0 && event.key <= 9 && event.key != ' ') {
        isDigit = true;
    }
    if (event.key == 'leftArrow' || event.key == 'rightArrow' || event.key == 'Backspace') {
        isControl = true;
    }
    if (event.key == '-') {
        isDash = true;
    }
})