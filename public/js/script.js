let topbutton = document.getElementById("topBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

function topFunction() {
    var currentPosition = window.scrollY || document.documentElement.scrollTop; //Lệnh này dùng window.scroll
    if (currentPosition > 5000) {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}
