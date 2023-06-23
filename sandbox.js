const toggle = document.querySelector('.toggle');
const sidenav = document.querySelector('.sidenav');
// const openMenu = document.querySelector('.hamburger-icon');

//Toggle mobile menu

// const openNav = () => {
//   document.querySelector('#mobileMenu').style.width = '250px';
//   openMenu.innerHTML = `<i class='fas fa-bars'>&#9776;</i>`;
// }

// const closeNav = () => {
//   document.querySelector('#mobileMenu').style.width = '0';
//   openMenu.innerHTML = `<i class='fas fa-times'>&times;</i>`;

// }


// openMenu.addEventListener('click', () => {
//   openNav();
// });

// closeMenu.addEventListener('click', () => {
//   closeNav();
// })

function toggleMenu() {

  
  if (sidenav.classList.contains('active')) {
    sidenav.classList.remove('active');
    
    //adds the menu (hamburger) icon
    toggle.querySelector('a').innerHTML = `<i class='fas fa-bars'></i>`;
    // sidenav.style.width = '0';
    
  } else {
    sidenav.classList.add(`active`);
  //adds the close (x) icon
  toggle.querySelector('a').innerHTML = `<i class='fas fa-times'></i>`;
  // sidenav.style.width = '250px';
  
  }
  
}

//Event Listener

toggle.addEventListener('click', toggleMenu, false);



const items = document.querySelectorAll('.item');

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

