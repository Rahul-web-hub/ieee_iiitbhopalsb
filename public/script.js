// script.js
document.addEventListener('DOMContentLoaded', function () {
  var welcomeScreen = document.querySelector('.welcome-screen');
  var appContainer=document.getElementById('root');
  // Delay scrolling away the welcome screen by 2 seconds
  setTimeout(function () {
      welcomeScreen.style.transform = 'translateY(-100%)';
      // Allow scrolling on the page
      document.body.style.overflow = 'auto';

      appContainer.style.display="block";
  }, 1400);
});




// // Navbar Toggle 
// // Wait for the DOM to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Get the elements
//   var toggleButton = document.querySelector('.toggle');
//   var menu = document.querySelector('.menu');

//   // Add a click event listener to the toggle button
//   toggleButton.addEventListener('click', function() {
//     // Toggle the 'active' class on the menu element
//     menu.classList.toggle('active');
//   });
// });
