/* Things to think about Modal
 a user clicking button to reveal the modal(Javascript) 
 Hiding the background when the user click the button(CSS/JavaScript)
*/

/** 
  Creating interactive buttons: Open Modal
  
  0) Add 'display: none' to '#overlay' - we want to hide it initially!
  1) Use document.getElementById to target "open-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "block"
**/

document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
});

/** 
  Creating interactive buttons: Close Modal
  
  1) Use document.getElementById to target "close-modal"
  2) Add an event listener of "click"
  3) Use document.getElementById to target "overlay" and change the style.display to "none"
**/
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});

/** 
  Overlay: #overlay

  1) Add a width and a height of 100%
  2) Position absolute (allows us to place any element exactly where we want it)
  3) Set top, left, bottom, right to 0
  4) Add a background colour of black
  5) Add position relative to #modal so that it's relative to #overlay
  6) Put the background of #modal to white (temp background no longer needed)
  7) Add top: 30% to #modal
**/
