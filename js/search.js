search.addEventListener('click', openInputSearch);

function openInputSearch(e){
    e.preventDefault();
    if(inputSearch.classList.contains('hidden')){
        if (window.matchMedia("(min-width: 400px)").matches) {
            inputSearch.classList.remove('hidden');
            inputSearch.focus();
        }
        else {
            inputSearch.classList.remove('hidden');
            inputSearch.focus();
            title.classList.add('hidden');
            logOut.classList.add('hidden');
        }
    }
    else {
        inputSearch.classList.add('hidden');
        title.classList.remove('hidden');
        if(inputSearch.value !== ''){
            inputSearch.classList.add('hidden');
            createOnSearchView(inputSearch.value);
        }
    }
}

function createOnSearchView(keyword){
    let photos;
    photos = document.getElementsByClassName("section__article-figure");
    dateButtons = document.querySelectorAll('.section__button');
    for(let b = 0; b < dateButtons.length; b++){
        dateButtons[b].classList.add('hidden');
    }
    if (keyword == "all") keyword = "";
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].className.indexOf(keyword) <= -1){
            photos[i].classList.add('hidden');
        }
        // else {
        //     addRandomClass(photos[i])
        // }
    }
}

function addRandomClass(div){
    let x = Math.floor((Math.random() * 3) + 1);
    switch(x){
        case 1:
            div.classList.add('wide');
            break;
        case 2:
            div.classList.add('tall');
            break;
        default:
            div.classList.toggle('tall');
            div.classList.toggle('wide');
    }
}
