document.addEventListener("DOMContentLoaded", function() {
    if (document.body.id === "interest") {
        let counter = getCounter() || 0;

        function setCounter() {
            localStorage.setItem("Service Interest", `${counter}`);
        }

        function getCounter() {
            return parseInt(localStorage.getItem("Service Interest")) || 0;
        }

        counter += 1;
        setCounter();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (document.body.id === "visit") {
        let counter = getCounter() || 0;

        function setCounter() {
            localStorage.setItem("Visits", `${counter}`);
        }

        function getCounter() {
            return parseInt(localStorage.getItem("Visits")) || 0;
        }

        counter += 1;
        setCounter();
    }
});