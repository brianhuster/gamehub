let topbutton = document.getElementById("topBtn");

function topFunction() {
    var currentPosition = window.scrollY || document.documentElement.scrollTop; //Lệnh này dùng window.scroll
    if (currentPosition > 5000) {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}
