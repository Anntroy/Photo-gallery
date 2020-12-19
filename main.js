const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const section = get("section");
const headerToggle = get('headerToggle');
const headerRight = get('headerRight');
const aside = get('aside');
const modal = get('modal');
const signIn = get('signIn');
const signUp = get('signUp');
const cancelbtn = get('cancelbtn');
const signupbtn = get('signupbtn');


function initResponsiveTopBar(){
    window.addEventListener('load', function(){
        if (window.matchMedia("(min-width: 600px)").matches) {
            title.innerHTML = `<h1 class="header__button-h1">Photo Gallery</h1>`;
            aside.classList.remove('hidden');
            signUp.classList.remove('hidden');
            signIn.classList.remove('hidden');
        }
        else {
            title.innerHTML = `<h1 class="header__button-h1">Photo</h1>`;
            aside.classList.add('hidden');
            signUp.classList.add('hidden');
            signIn.classList.add('hidden');
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
