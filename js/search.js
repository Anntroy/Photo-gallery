function openInputSearch(){
    search.addEventListener('click', function(e){
        e.preventDefault();
        search.classList.add('hidden');
        inputSearch.classList.remove('hidden');
        title.classList.add('hidden');
    })
}
openInputSearch();
