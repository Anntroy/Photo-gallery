function openSideBar(){
    headerToggle.addEventListener('click', function(){
        aside.classList.toggle('open');
        if(aside.classList.contains('open')){
            photo.classList.remove('hidden');
            presentation.classList.remove('hidden');
            trash.classList.remove('hidden');
        }
        else{
            photo.classList.add('hidden');
            presentation.classList.add('hidden');
            trash.classList.add('hidden');
        }
    });
};

openSideBar();
