const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

//Toggle mobile menu

function toggleMenu() {
  if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    
    //adds the menu (hamburger) icon
    toggle.querySelector('a').innerHTML = `<i class='fas fa-bars'></i>`;
  } else {
    menu.classList.add(`active`);
  //adds the close (x) icon
  toggle.querySelector('a').innerHTML = `<i class='fas fa-times'></i>`;
  
  }
  
}

//Event Listener

toggle.addEventListener('click', toggleMenu, false);


// const items = document.querySelectorAll('.item');

// //Activate Submenu

// function toggleItem() {
//   if (this.classList.contains('submenu-active')) {
//     this.classList.remove('submenu-active');
//   } else if (menu.querySelector('.submenu-active')){
//     menu.querySelector('submenu-active').classList.remove('submenu-active');
//   } else {
//     this.classList.add('submenu-active');
//   } 
// }

// //Event Listeners

// for (let item of items) {
//   if (item.querySelector('.submenu')) {
//     item.addEventListener('click', toggleItem, false);
//     item.addEventListener('keypress', toggleItem, false);
//   }
// }

//when user scrolls page, this function executes

window.onscroll = function() {
  myFunction();
}

const myFunction = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrolled + '%';
}

// for the sticky header animation

const header = document.querySelector('.header');
const toggleClass = 'is-sticky';

window.addEventListener('scroll', ()=> {
   const currentScroll = window.pageYOffset;
     if (currentScroll > 150) {
      header.classList.add(toggleClass);
     } else {
      header.classList.remove(toggleClass);
     }

});

