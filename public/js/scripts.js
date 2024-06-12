const topbutton = document.getElementById("topBtn");

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

function submitCmt() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("cmt_input");
    const ratingInput = document.getElementById("rating");

    // The trim() method removes spaces in the beginning and ending of a string.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();
    const rating = ratingInput.value.trim();

    const hasBadWords = containsBadWords(comment);
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
        gameid: getGameIdFromUrl(),
    };

    sendData(formData, "/submit-comment").then((status) => {
        if (status === 200) {
            alert("Comment submitted successfully!");
            nameInput.value = "";
            emailInput.value = "";
            commentInput.value = "";
            ratingInput.value = "";
        } 
        else {
            alert("Failed to submit the comment. Please try again later.");
        }
    });
}

function login() {
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    sendData({ name, password }, "/login");
}

function getGameIdFromUrl() {
    const url = window.location.href;
    const parts = url.split("/");
    return parts[parts.length - 1];
}

async function sendData(formData, url) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log(data);
        if (data.redirect) {
            window.location.href = data.redirect;
        }
        alert(data.message);
        return response.status;
    } catch (error) {
        alert(error.message);
        return error.status;
    }
}

