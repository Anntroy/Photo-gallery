const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const section = get("section");
const headerToggle = get('headerToggle');
const headerRight = get('headerRight');
const aside = get('aside');
const modal = get('modal');
const form = get('form');
const logIn = get('logIn');
const cancelbtn = get('cancelbtn');
const loginbtn = get('loginbtn');
const username = get('username');
const password = get('password');
const invalidUsername = get("invalidUsername");
const invalidPassword = get("invalidPassword");
const invalidLoginPassword = get("invalidLoginPassword");
const inputSearch = get("inputSearch");
const search = get("search");
const currantUser = get("currantUser");
const logOut = get("logOut");

const galleryItems = JSON.parse(localStorage.getItem("gallery"));
const usersArray = JSON.parse(localStorage.getItem("users"));

let users = [];
let userIndex = 0;


function initResponsiveTopBar(){
    window.addEventListener('load', function(){
        if (window.matchMedia("(min-width: 600px)").matches) {
            title.innerHTML = `<h1 class="header__button-h1">Photo Gallery</h1>`;
            aside.classList.remove('hidden');
            logIn.classList.remove('hidden');
        }
        else {
            title.innerHTML = `<h1 class="header__button-h1">Photo</h1>`;
            aside.classList.add('hidden');
            logIn.classList.add('hidden');
        }
        if (window.matchMedia("(min-width: 1000px)").matches) {
            inputSearch.classList.remove('hidden');
            search.classList.add('hidden');
        }
        else {
            inputSearch.classList.add('hidden');
            search.classList.remove('hidden');
        }
    });
}

initResponsiveTopBar();

function responsiveTopBar(){
    window.addEventListener('resize', function(){
        if (window.matchMedia("(min-width: 600px)").matches) {
            title.innerHTML = `<h1 class="header__button-h1">Photo Gallery</h1>`;
            aside.classList.remove('hidden');
            logIn.classList.remove('hidden');
        }
        else {
            title.innerHTML = `<h1 class="header__button-h1">Photo</h1>`;
            aside.classList.add('hidden');
            logIn.classList.add('hidden');
        }
        if (window.matchMedia("(min-width: 1000px)").matches) {
            inputSearch.classList.remove('hidden');
            search.classList.add('hidden');
        }
        else {
            inputSearch.classList.add('hidden');
            search.classList.remove('hidden');
        }
    });
}

responsiveTopBar();

function uniqueDateArray(){
    let dateArray = [];
    for (let photo of galleryItems){
        dateArray.push(photo.date)
    }
    let uniqueDateArray = [...new Set(dateArray)]
    return uniqueDateArray
}

createMainView(uniqueDateArray());

function createMainView(uniqueDateArray){
    let j = 0;
    uniqueDateArray.sort((a,b) => (Date.parse(a) > Date.parse(b)) ? -1 : ((Date.parse(b) > Date.parse(a)) ? 1 : 0));
    galleryItems.sort((a,b) => (Date.parse(a.date) > Date.parse(b.date)) ? -1 : ((Date.parse(b.date) > Date.parse(a.date)) ? 1 : 0));

    uniqueDateArray.forEach(function(item){
        section.innerHTML += `<button type="button" class="section__button"><h2 class="header__button-h2">${item}</h1></button>
        <article class="section__article" id="section__article${j}">
        </article>`
        j++;
    });

    for(let i = 0; i < uniqueDateArray.length; i++){
        let article = get(`section__article${i}`);
        galleryItems.map(function(element){
                    if(element.date === uniqueDateArray[i]){
                        article.innerHTML += `
                            <figure class="section__article-figure" style="background-image: url('${element.src}');"></figure>`
                    }
                })
    }
}

filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
}
}