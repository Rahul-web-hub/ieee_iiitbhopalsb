// script.js
document.addEventListener('DOMContentLoaded', function () {
  var welcomeScreen = document.querySelector('.welcome-screen');
  
  // Delay scrolling away the welcome screen by 2 seconds
  setTimeout(function () {
      welcomeScreen.style.transform = 'translateY(-100%)';
      // Allow scrolling on the page
      document.body.style.overflow = 'auto';
  }, 1400);
});




// Navbar Toggle 
$(document).ready(function(){
  $('.toggle').click(function(){
      $('.menu').toggleClass('active');
  });
});