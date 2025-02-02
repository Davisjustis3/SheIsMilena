const burgerMenu = document.querySelector('.fa-bars')
const dropDown = document.getElementById('nav-list2')
burgerMenu.addEventListener('click', () => {
    dropDown.style.display == 'block' ?
    dropDown.style.display = 'none' :
    dropDown.style.display = 'block'
})