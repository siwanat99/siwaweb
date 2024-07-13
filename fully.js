const menuBtn = document.getElementById('btnmenu')
const showMenu = document.querySelector(".header__right")

menuBtn.addEventListener('click', function(){
    showMenu.classList.toggle("header__right-active");
    
})