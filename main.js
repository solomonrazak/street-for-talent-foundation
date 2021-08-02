var x = 0;

function dropDown() {
    if (x == 0) {
        document.getElementById("dropdown").style.display = "none";
        x = 1;
    } else {
        document.getElementById("dropdown").style.display = "block";
        x = 0;
    }
}

// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


/*subscribe*/
const form = document.getElementById('#form_input');
console.log(form);