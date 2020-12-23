function openSideBar(){
    headerToggle.addEventListener('click', function(){
        aside.classList.toggle('open');
        if(aside.classList.contains('open')){
            photo.classList.remove('hidden');
            presentation.classList.remove('hidden');
            trash.classList.remove('hidden');
            if (window.matchMedia("(max-width: 600px)").matches){
                asideLogIn.classList.remove('hidden');
                aside.classList.remove('hidden');
            }
        }
        else{
            photo.classList.add('hidden');
            presentation.classList.add('hidden');
            trash.classList.add('hidden');
            if (window.matchMedia("(max-width: 600px)").matches){
                asideLogIn.classList.add('hidden');
                aside.classList.add('hidden');
            }
        }
    });
};

openSideBar();
