const visitorMessage = document.querySelector("#visitor-message");
const visitorMessageH2 = document.querySelector("#visitor-message h2");
const messageButton = document.querySelector("#message-button")

document.addEventListener("DOMContentLoaded", function() {
    visitorMessage.classList.add("visit-message");

    if (document.body.id === "visit") {
        const today = Date.now();
        const lastVisit = getVisit() || 0;

        let visitTime = (today - lastVisit) / 86400000;

        if (lastVisit === 0)
        {
            visitorMessageH2.textContent = "Welcome! Let us know if you have any questions.";
        }
        else if (visitTime < 1) {
                visitorMessageH2.textContent = "Back so soon! Awesome!";
            }
        else {
                visitorMessageH2.textContent = `You last visited ${Math.floor(visitTime)} days ago.`;
            }

        setVisit(today);
    }

    function setVisit(timestamp) {
        localStorage.setItem("Last Visit Date", `${timestamp}`);
    }

    function getVisit() {
        const value = parseInt(localStorage.getItem("Last Visit Date"));
        return isNaN(value) ? 0 : value;
    }

})

messageButton.addEventListener("click", function() {
    visitorMessage.classList.remove("visit-message");
})