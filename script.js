function toggleIcons() {
    var icons = document.getElementById("social-icons");
    if (icons.style.display === "none" || icons.style.display === "") {
        icons.style.display = "block";
    } else {
        icons.style.display = "none";
    }
}

function typeEffect(element, text, speed, callback) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            setTimeout(callback, 500); // Delay before starting the next action
        }
    }
    typing();
}

document.addEventListener("DOMContentLoaded", function () {
    let line1 = document.getElementById("typing-1");
    let line2 = document.getElementById("typing-2");
    let restContent = document.getElementById("rest-content");

    typeEffect(line1, "Hey...", 150, function () {
        typeEffect(line2, "how u doin??", 150, function () {
            restContent.style.display = "block";  // Show rest of the text after typing effect
        });
    });
});
