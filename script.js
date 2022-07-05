function mobileMenu() {
    let menu = document.querySelector('.header ul');
    let button = document.querySelector('.header button');
    
    if (button.innerText === 'MENU') {
        menu.style.display = 'block';
        button.innerText = 'CLOSE';
    }
    else {
        menu.style.display = 'none';
        button.innerText = 'MENU';
    }
}

function displayNone(elements) {
    elements.forEach((img) => {
        img.style.display = 'none';
    })
}

function portfolioSort(button) {
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    if (category === 'sve') {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    }

    portfolioItems.forEach((item) => {
        if (item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    });
}

let desniKlik = document.querySelector('#right-btn');
let leviKlik = document.querySelector('#left-btn');
let slike = document.querySelectorAll('.slider-images img');
let index = 0;

desniKlik.addEventListener('click', () => {
    displayNone(slike);
    index++;

    if (index === slike.length) {
        index = 0;
    }

    slike[index].style.display = 'block';
});

leviKlik.addEventListener('click', () => {
    displayNone(slike);
    index--;

    if (index === -1) {
        index = slike.length - 1;
    }

    slike[index].style.display = 'block';
});