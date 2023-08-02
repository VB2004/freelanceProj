function toggle(){
    var navbarLinks = document.getElementById('nav_links');
    navbarLinks.classList.toggle('active');
}

function mute() {
    var video = document.getElementById("myVideo");

    if (video.muted) {
        document.getElementById('mtbtn').classList.replace('fa-volume-xmark', 'fa-volume-high');
        video.muted = false;
    } else {
        document.getElementById('mtbtn').classList.replace('fa-volume-high', 'fa-volume-xmark');
        video.muted = true;
    }
}