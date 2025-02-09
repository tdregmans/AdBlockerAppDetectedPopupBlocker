/*
 * AdBlockerAppDetectedPopupBlockerApp
 * AdBlockerAppDetectedPopupBlockerApp.js
 * 
 * Author: tdregmans
 * Version: 1.0
 * Last edited: 2025-02-09
 * 
**/

/*********************************************************************************
 * Create MutationObserver on overlap-manager-root
 * https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
*/

const target = document.getElementById("overlap-manager-root");

// Create observer
const observer = new MutationObserver((mutations) => {
  var elem = document.querySelector('div[data-dialog-name="gopro"]');
  if (elem != null) {
    elem.remove();
    console.log("Removed div!");
  } 
});

// Connect observer to target
observer.observe(target, {
  attributes: true,
  childList: true,
  subtree: true,
});

/*********************************************************************************
 * Remove is-not-pro classname 
*/

// get html element
var html_element = document.querySelectorAll("html");

// remove is-not-pro class from html element
[].forEach.call(html_element, function(elem) {
  elem.classList.remove("is-not-pro");
});
