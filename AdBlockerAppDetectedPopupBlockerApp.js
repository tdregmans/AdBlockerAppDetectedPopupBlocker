/// source: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe

const target = document.body;
const child = document.getElementById("overlap-manager-root");

const observer = new MutationObserver((mutations) => {
    
  var elem = document.querySelector('div[data-dialog-name="gopro"]');

  if( elem != null) {

    console.log("removed!");
    elem.remove();
  } 

});

observer.observe(target, {
  attributes: true,
  childList: true,
  subtree: true,
});


var elems = document.querySelectorAll("html");

[].forEach.call(elems, function(el) {
    el.classList.remove("is-not-pro");
});