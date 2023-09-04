const menuToggle = document.querySelector ('.menu-tooggle input');
const div = document.querySelector ('.sidebar');

menuToggle.addEventListener('click', function(){
    div.classList.toggle('slide')
})