const topbutton = document.getElementById("topBtn");
const submitBtn = document.getElementById("submit-btn");

// Handle back-to-top button
function topFunction() {
    var currentPosition = window.scrollY || document.documentElement.scrollTop; //Use both commands to cover as many browsers as possible
    if (currentPosition > 5000) {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
    } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// Submitting comments
const badWords = ["fuck", "fvck", "viet cong", "nigger", "ching chong", "son of a bitch"];
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("cmt_input");
    const ratingInput = document.getElementById("rating");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();
    const rating = ratingInput.value.trim();

    const hasBadWords = checkForBadWords(comment);
    if (hasBadWords) {
        alert(
            "Your comment contains inappropriate words and cannot be submitted."
        );
        return;
    }

    const formData = {
        name,
        email,
        comment,
        rating,
        time: new Date().toISOString(),  // Add the current time
        gameid: getGameIdFromUrl()
    };

    sendData(formData);
}

function checkForBadWords(comment) {
    const lowercaseComment = comment.toLowerCase();
    return badWords.some((word) => lowercaseComment.includes(word));
}

function getGameIdFromUrl() {
    const url = window.location.href;
    const parts = url.split('/');
    return parts[parts.length - 1]; 
}

function sendData(formData) {
    fetch("/submit-comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (response.ok) {
                alert("Comment submitted successfully!");
                document.getElementById("cmt_input").value = "";
            } else {
                alert("Failed to submit the comment. Please try again later.");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(
                "An error occurred while submitting the comment. Please try again later."
            );
        });
}


