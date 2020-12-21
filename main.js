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
const invalidUsername = get("invalidUsername");
const invalidPassword = get("invalidPassword");

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

// uniqueDateArray();

createMainView(uniqueDateArray());

function createMainView(uniqueDateArray){
    let j = 0;
    uniqueDateArray.sort((a,b) => (Date.parse(a) > Date.parse(b)) ? -1 : ((Date.parse(b) > Date.parse(a)) ? 1 : 0));
    console.log(uniqueDateArray)
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
                        console.log(element.src)
                        article.innerHTML += `
                            <figure class="section__article-figure" style="background-image: url('${element.src}');"></figure>`
                    }
                })
    }
}