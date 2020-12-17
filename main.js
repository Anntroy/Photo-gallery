const get = document.getElementById.bind(document);
const create = document.createElement.bind(document);
const section = get("section");

function createMainView(){
    gallery = JSON.parse(localStorage.getItem("gallery"))
    for (let photo of gallery){
        console.log(photo.date)
    }
}

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