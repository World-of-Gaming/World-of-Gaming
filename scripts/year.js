// Copyright year updater
window.onload = function() {
    let date, year;
    
    date = new Date();
    year = date.getFullYear();

    document.querySelector(".year").innerHTML = year;
}