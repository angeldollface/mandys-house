/*
MANDY'S HOSUE by Alexander Abraham a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Opens up the navigation drawer by
// expanding the element's width and height.
function openNav(id){
    let elem = document.getElementById(id);
    elem.style.width = '100vw';
    elem.style.height = '100vh';
}

// Closes up the navigation drawer by
// shrinking the element's width and height.
function closeNav(id){
    let elem = document.getElementById(id);
    elem.style.width = '0vw';
    elem.style.height = '0vh';
}