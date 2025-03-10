import {courses} from "./course-list.js";

const container = document.querySelector(".courses");

function createCourseCard(courses) {
    container.innerHTML = "";
    courses.forEach(course => {
        let card = document.createElement("p");
        card.textContent = `${course.subject} ${course.number}`;

        if (course.completed == true) {
            card.classList.toggle("completed")
        }

        container.appendChild(card);
    })
}

createCourseCard(courses);

const all = document.querySelector(".all");
all.addEventListener("click", () => {
    createCourseCard(courses);

    const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);

    document.getElementById("credits").textContent = `Total credits: ${totalCredits}`;
})

const cse = document.querySelector(".cse");
cse.addEventListener("click", () => {
    const filteredCourses = courses.filter(course => course.subject == "CSE");
    createCourseCard(filteredCourses);

    const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);

    document.getElementById("credits").textContent = `Total credits: ${totalCredits}`;
})

const wdd = document.querySelector(".wdd");
wdd.addEventListener("click", () => {
    const filteredCourses = courses.filter(course => course.subject == "WDD");
    createCourseCard(filteredCourses);

    const totalCredits = filteredCourses.reduce((acc, course) => acc + course.credits, 0);

    document.getElementById("credits").textContent = `Total credits: ${totalCredits}`;
})