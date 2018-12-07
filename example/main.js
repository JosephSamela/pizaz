
var h = window.innerHeight;

document.onkeydown = function myFunction() {
    switch (event.keyCode) {
    case 38:
        console.log("Up key is pressed");
        window.scrollBy(0, -h);
        break;
    case 40:
        console.log("Down key is pressed");
        window.scrollBy(0, h);
        break;
    case 37:
        console.log("left key is pressed");    
        window.scrollBy(0, -h);
        break;
    case 39:
        console.log("Right key is pressed");
        window.scrollBy(0, h);
        break;
    }
}
