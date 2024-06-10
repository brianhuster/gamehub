function containsBadWords(comment) {
    const badWords = ["fuck", "fvck", "viet cong", "nigger", "ching chong", "son of a bitch", "shit"];
    const lowercaseComment = comment.toLowerCase();
    return badWords.some((word) => lowercaseComment.includes(word));
}

function currentTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var day = now.getDate().toString().padStart(2, '0');
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var timeString = year + "-" + month + "-" + day + " "+ hours + ':' + minutes + ':' + seconds;
    return timeString;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        containsBadWords,
        currentTime
    };  
}
else {
    window.containsBadWords = containsBadWords;
    window.currentTime = currentTime;
}

