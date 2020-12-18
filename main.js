const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const section = get("section");
const headerToggle = get('headerToggle');
const headerRight = get('headerRight');
const signUp = get('signUp');
const aside = get('aside');
const modal = get('modal');

function initResponsiveTopBar(){
    window.addEventListener('load', function(){
        if (window.matchMedia("(min-width: 600px)").matches) {
            title.innerHTML = `<h1 class="header__button-h1">Photo Gallery</h1>`;
        }
        else {
            title.innerHTML = `<h1 class="header__button-h1">Photo</h1>`;
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
// function createMainView(){
//     gallery = JSON.parse(localStorage.getItem("gallery"))
//     for (let photo of gallery){
//         console.log(photo.date)
//     }
// }

// function createAside(){
//     let section = get('section');
//     let aside = create('ASIDE');
//     aside.setAttribute('id', 'aside');
//     aside.setAttribute('class', 'aside');
//     section.appendChild(aside);
//     return aside
// }

// function removeAside(){
//     let section = get('section');
//     let aside = get('aside');
//     section.removeChild(aside);
// }

// function createGalleryHtml(){

// }

// function init() {
//     var terminalInit = create("div");
//     spanDirectory.innerHTML = directory + " $";
//     terminalInit.append(spanDirectory);
//     terminalInit.append(createInput());
//     terminal.append(terminalInit);
// }

// function createInput() {
//     var userInput = create("input");
//     userInput.setAttribute("id", "terminalTextInput");
//     userInput.setAttribute("value", "");
//     userInput.setAttribute("class", "userInput");
//     userInput.setAttribute("type", "text");
//     userInput.addEventListener("keydown", submitInput);
//     return userInput;
// }