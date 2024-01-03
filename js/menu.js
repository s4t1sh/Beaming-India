document.getElementById('mobile-menu').addEventListener('click', function() {
    var navMenu = document.querySelector('.nav-menu');
    var menuToggle = document.querySelector('.menu-toggle');
  
    if (navMenu.style.top === '0') {
      navMenu.style.height = '0';
      navMenu.style.top = '-100vh';
    } else {
      navMenu.style.top = '0';
    }
  
    menuToggle.classList.toggle('menu-open');
  });
  
  document.getElementById('close-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').style.top = '-100vh';
    document.querySelector('.menu-toggle').classList.remove('menu-open');
  });
  