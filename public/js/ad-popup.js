window.onload = function() {
    if (document.cookie.split(';').some((item) => item.trim().startsWith('adClosed='))) {
        return;
    }

    setTimeout(function() {
        document.getElementById('ad-popup').style.display = 'block';
    }, 60000); 
};

function closeAd() {
    document.getElementById('ad-popup').style.display = 'none';

    var date = new Date();
    date.setFullYear(date.getFullYear() + 1); 
    document.cookie = 'adClosed=true; expires=' + date.toUTCString() + '; path=/';
}
