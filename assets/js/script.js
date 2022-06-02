const textDisplayIntro = document.getElementsByClassName('display-2--intro-name');
const words = ['Hi, my name is Hoang Long!', 'Thanks for your consideration'];
const themeButton = document.getElementById('toggle');
const darkTheme = 'dark-theme';
const selectedTheme = localStorage.getItem('selected-theme');
const sections = document.querySelectorAll('section[id]');
const header = document.getElementsByTagName('header');
const filterBtns = document.querySelectorAll('.btn__filter');
const itemBoxes = document.querySelectorAll('.box__wrapper');
let currentWord = [];
let isDeleting = false;
// let isEnd = false;
// let isEnable = false;
let i = 0;
let j = 0;
// console.log(sections);
const getCurrentTheme = () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.contains(darkTheme) ? 'dark' : 'light';

    }
    header[0].classList.contains(darkTheme) ? 'dark' : 'light';

};
if (selectedTheme) {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    }
    header[0].classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
}
//scroll tới đâu thì có active ở mobile
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

//filter
// for (i = 0; i < filterBtns.length; i++) {
//     filterBtns[i].addEventListener('click', function () {
//         for (j = 0; j < filterBtns.length; j++) {
//             filterBtns[j].classList.remove('btn__filter--active');
//         }
//         this.classList.add('btn__filter--active');
//         // console.log(this);

//         let dataFilter = this.getAttribute('data-filter');
//         for (let k = 0; k < itemBoxes.length; k++) {
//             itemBoxes[k].classList.remove('show');
//             itemBoxes[k].classList.add('hide');

//             if (itemBoxes[k].getAttribute('data-item') === dataFilter || dataFilter === 'all') {
//                 itemBoxes[k].classList.remove('hide');
//                 itemBoxes[k].classList.add('show');
//             }
//         }
//     });
// }

//chữ chạy
function displayChar() {
    //!chắc không dùng cái đổi title nữa, xấu
    isEnd = false;
    textDisplayIntro[0].innerHTML = currentWord.join('');
    if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
            currentWord.push(words[i][j]);
            j++;
            textDisplayIntro[0].innerHTML = currentWord.join('');
        }
        if (isDeleting && j <= words[i].length) {
            currentWord.pop(words[i][j]);
            j--;
            textDisplayIntro[0].innerHTML = currentWord.join('');
        }
        if (j == words[i].length) {
            isEnd = true;
            isDeleting = true;
        }
        if (isDeleting && j == 0) {
            currentWord = [];
            isDeleting = false;
            i++;
            if (i == words.length) {
                i = 0;
            }
        }

    }
    const deleteSpd = Math.random() * (80 - 50) + 50;
    const displaySpd = Math.random() * (300 - 200) + 200;
    const time = isEnd ? 500 : isDeleting ? deleteSpd : displaySpd;
    setTimeout(displayChar, time);
}
displayChar();

// if (isEnable) {
// } else {
//     // textDisplayIntro[0].innerHTML = 'Hi I\'m Long';
//     // textDisplayIntro.style.index = -1;
// }

/*-------------DARKMODE SECTION-----------------*/
//! search xem muốn để ligh/dark mode theo cấu hình browser thì làm như nào
window.addEventListener('scroll', scrollActive);
themeButton.addEventListener('click', () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle(darkTheme);
    }
    header[0].classList.toggle(darkTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
});
