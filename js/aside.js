function openSideBar(){
    const toggle = get('header_toggle');
    const aside = get('aside');
    toggle.addEventListener('click', function(){
        console.log(aside.classList);
        aside.classList.toggle('open');
        if(aside.classList.contains('open')){
            aside.innerHTML = `<div class="aside__div">
            <button class="aside__button" href="#"><i class="fa fa-image fa-lg"></i></button>
            <button class="header__button"><h1 class="aside__div-button-h1">Photo</h1></button>
        </div>
        <div class="aside__div">
            <button class="aside__button" href="#"><i class="fa fa-envelope fa-lg"></i></button>
            <button class="header__button"><h1 class="aside__div-button-h1">Contact</h1></button>
        </div>
        <div class="aside__div">
            <button class="aside__button" href="#"><i class="fa fa-globe fa-lg"></i></button>
            <button class="header__button"><h1 class="aside__div-button-h1">Language</h1></button>
        </div>
        <div class="aside__div">
            <button class="aside__button" href="#"><i class="fa fa-trash fa-lg"></i></button>
            <button class="header__button"><h1 class="aside__div-button-h1">Trash</h1></button>
        </div>`;
        }
        else{
            aside.innerHTML = `<button class="aside__button" href="#"><i class="fa fa-image fa-lg"></i></button>
            <button class="aside__button" href="#"><i class="fa fa-envelope fa-lg"></i></button>
            <button class="aside__button" href="#"><i class="fa fa-globe fa-lg"></i></button>
            <button class="aside__button" href="#"><i class="fa fa-trash fa-lg"></i></button>`;
        }
    });
};

openSideBar();

// if (window.matchMedia("(min-width: 400px)").matches) {
//     /* La pantalla tiene al menos 400 píxeles de ancho */
// } else {
//     /* La pantalla tiene menos de 400 píxeles de ancho */
// }
