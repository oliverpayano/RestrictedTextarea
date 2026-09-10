const message = document.getElementById("message");
const counter = document.getElementById("counter");

message.addEventListener("input", function() {
    const characterCount = message.value.length;

    counter.textContent = `${characterCount} / 250`;

    if (characterCount === 250) {
        message.style.borderColor = "red";
        counter.style.color = "red";
    } else {
        message.style.borderColor = "black";
        counter.style.color = "black";
    }
});