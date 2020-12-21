const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const section = get("section");
const headerToggle = get('headerToggle');
const headerRight = get('headerRight');
const aside = get('aside');
const modal = get('modal');
const logIn = get('logIn');
const cancelbtn = get('cancelbtn');
const loginbtn = get('loginbtn');
const username = get('username');
const password = get('password');
const usernameInputError = get("usernameInputError");
const invalidInput = get("invalidInput");

const galleryItems = JSON.parse(localStorage.getItem("gallery"));

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
        // if (window.matchMedia("(min-width: 1000px)").matches) {
        //     headerRight.innerHTML = `<form class="" action="">
        //     <input class="header__form-input" type="text" placeholder="Search.." name="search">
        //     <button  class="header__button" type="submit"><i class="fa fa-search fa-lg"></i></button>
        //     </form>`;
        // }
        // else {
        //     headerRight.innerHTML = `<button  class="header__button " href="#"><i class="fa fa-search fa-lg"></i></button>`;
        // }
    });
}

initResponsiveTopBar();

function uniqueDateArray(){
    let dateArray = [];
    for (let photo of galleryItems){
        dateArray.push(photo.date)
    }
    let uniqueDateArray = [...new Set(dateArray)]
    return uniqueDateArray
}

uniqueDateArray();

function createMainView(uniqueDateArray, dateButton){
    let j = 0;
    let galleryItemsArray = []
    galleryItems.sort((a,b) => (Date.parse(a.date) > Date.parse(b.date)) ? -1 : ((Date.parse(b.date) > Date.parse(a.date)) ? 1 : 0));
    // uniqueDateArray.forEach()
    galleryItems.map((item) => galleryItemsArray.push(item.date))
    galleryItemsArray.forEach((item) => {
        dateButton.innerHTML = `${item}`;
        dateButton.setAttribute("id", `${item}${j}`)
        j++;
        // console.log(dateButton, j)
    })
}

createMainView(uniqueDateArray(), createDateButton());

function createDateButton(){
    let dateButton = create("button");
    dateButton.setAttribute("type", "button");
    dateButton.setAttribute("class", "section__button");
    return dateButton;
}

function createDateButtonText(){
    let dateButtonText = create("h2");
    dateButtonText.setAttribute("class", "header__button-h2");
    return dateButtonText;
}