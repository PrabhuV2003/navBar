const menu = document.querySelector('.menu');
const menuList = document.querySelector('.topnav ul');

menu.addEventListener('click', ()=>{
  menuList.classList.toggle('showmenu');
})

function menuAnimation(x) {
  x.classList.toggle('change');
}