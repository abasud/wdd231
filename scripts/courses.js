const container = document.querySelector(".courses");

function createCourseCard(courses) {
    container.innerHTML = "";
    courses.forEach(course => {
        let card = document.createElement("p");
        card.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            card.classList.add("completed");
        }

        container.appendChild(card);
    });
}

fetch("../data/course-list.json")
    .then(response => response.json())
    .then(courses => {
        createCourseCard(courses);

        document.querySelector(".all").addEventListener("click", () => {
            createCourseCard(courses);
            const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
            document.getElementById("credits").textContent = `Total credits: ${totalCredits}`;
        });

        document.querySelector(".cse").addEventListener("click", () => {
            const filtered = courses.filter(course => course.subject === "CSE");
            createCourseCard(filtered);
            const totalCredits = filtered.reduce((acc, course) => acc + course.credits, 0);
            document.getElementById("credits").textContent = `Total credits: ${totalCredits}`;
        });

        document.querySelector(".wdd").addEventListener("click", () => {
            const filtered = courses.filter(course => course.subject === "WDD");
            createCourseCard(filtered);
            const totalCredits = filtered.reduce((acc, course) => acc + course.credits, 0);
            document.getElementById("credits").textContent = `Total credits: ${totalCredits}`;
        });
    })
    .catch(error => console.error("Error loading courses:", error));
