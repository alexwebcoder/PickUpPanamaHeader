const toggle = document.querySelector('.toggle');
const sidenav = document.querySelector('.sidenav');
const hamburger = document.querySelector('.hamburger-container');


function toggleMenu() {

  
  if (sidenav.classList.contains('active')) {
    sidenav.classList.remove('active');
    
    
  } else {
    sidenav.classList.add(`active`);
  
  }
  
}

const toggleHamburger = () => {
  hamburger.classList.toggle('change')
}

//Event Listener

hamburger.addEventListener('click', toggleHamburger, false)
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

