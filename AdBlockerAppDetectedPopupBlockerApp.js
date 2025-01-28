document.body.style.border = "5px solid red";

/// OLDER VERSION
// var gopro_popup_elements = document.querySelectorAll('[data-dialog-name="gopro"]');
//     gopro_popup_elements[0].remove();


// var elem = document.getElementById('overlap-manager-root');
//     elem.parentNode.removeChild(elem);

// const selectElement = document.querySelector("body");
// // const result = document.querySelector(".result");

// selectElement.addEventListener("change", (event) => {
//     console.log("should work!");
// });
    

    console.log("executed!");


/// source: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe

const target = document.body;
const child = document.getElementById("overlap-manager-root");

const observer = new MutationObserver((mutations) => {
    
var elem = document.getElementById('overlap-manager-root');
    elem.parentNode.removeChild(elem);

//   mutations.forEach((mutation) => {
//     console.log(mutation.type, mutation.target.id, mutation.attributeName);

//     if (mutation.type === "childList" && mutation.target.id === "target") {
//       // After receiving the notification that the child was removed,
//       // further modifications to the detached subtree no longer trigger the observer.
//     //   child.setAttribute("data-bar", "");
//       console.log("done");
//     }
//   });
});

observer.observe(target, {
  attributes: true,
  childList: true,
  subtree: true,
});

// target.removeChild(child);
// This change happens before the "childList target" notification is delivered,
// so it will also trigger the observer.
// child.setAttribute("data-foo", "");

// Output:
// childList target null
// attributes child data-foo
// There is no "attributes child data-bar" notification.
