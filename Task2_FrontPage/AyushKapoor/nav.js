window.onscroll = function() {scroll()};

function scroll() 
{
    var parallax=document.getElementsByClassName("parallax");
    var nav=document.getElementById("mainNavbar");
    if (document.body.scrollTop >= 860 || document.documentElement.scrollTop >= 860) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
}