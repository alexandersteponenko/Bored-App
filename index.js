const NOT_BORING = 'Ура, теперь не скучно 🔥';
const STYLE_BACKGROUND = 'linear-gradient(180.00deg, rgba(0, 176, 28, 0.2) 24.479%,rgba(255, 255, 255, 0) 100%)';

const body = document.querySelector('body');
const title = document.querySelector('.title');
const lessonsNode = document.querySelector('.lessons');
const btnNode = document.querySelector('.btn');
const url = "https://www.boredapi.com/api/activity/";

btnNode.addEventListener('click', function() {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        title.innerHTML = NOT_BORING;
        body.style.background = STYLE_BACKGROUND;
        lessonsNode.textContent = `${item.activity}`;
   })
});

 