let on = document.getElementsByClassName('on')[0];

on.onclick = function(element) {
    let img = on.children[0].children[0];
    let work = img.getAttribute('on');
    let text = on.children[1];
    if (work == 0) {
        img.src = './img/fire-hov.svg';
        img.setAttribute('on', 1);
        text.innerHTML = 'Тушим!'
    }
    else {
        img.src = './img/fire-black.svg';
        img.setAttribute('on', 0);
        text.innerHTML = 'Зажигаем?';
    }
};

