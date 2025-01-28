document.body.style.border = "5px solid red";

/// OLDER VERSION
// var gopro_popup_elements = document.querySelectorAll('[data-dialog-name="gopro"]');
//     gopro_popup_elements[0].remove();


var elem = document.getElementById('overlap-manager-root');
    elem.parentNode.removeChild(elem);
