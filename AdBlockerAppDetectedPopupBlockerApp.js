/// sources: 
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe

const target = document.body;
const child = document.getElementById("overlap-manager-root");

const observer = new MutationObserver((mutations) => {
    try{
        var elem = document.getElementById('overlap-manager-root');
            elem.parentNode.removeChild(elem);
        console.count("'overlap-manager-root' div deleted!")
    }
    catch {  }

});

observer.observe(target, {
  attributes: true,
  childList: true,
  subtree: true,
});
