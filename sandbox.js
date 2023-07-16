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

const toggleHamburger = (event) => {
   if (event.keycode === 13 || event.key === 'Enter') {
    console.log('enter key was pressed')
    toggleMenu()
  hamburger.classList.toggle('change')

   } else{
    
 hamburger.classList.toggle('change')
 console.log('menu clicked')
  }
    

}

//Event Listener

hamburger.addEventListener('keydown', toggleHamburger, false)
hamburger.addEventListener('click', toggleHamburger, false)
toggle.addEventListener('click', toggleMenu, false);



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

