const form = document.querySelector(".newsletter");
    const modal = document.querySelector("dialog");
    const closeButton = document.getElementById("closeModal");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        form.reset();
        modal.showModal();
    });

    closeButton.addEventListener("click", () => modal.close());