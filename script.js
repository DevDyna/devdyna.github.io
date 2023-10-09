document.addEventListener("DOMContentLoaded", function () {
    const addSectionButton = document.getElementById("list");
    const sectionList = document.getElementById("sectionList");
    let sectionCount = 0;

    addSectionButton.addEventListener("click", function () {
        const section = document.createElement("div");
        section.className = "section";
        section.innerText = "Section " + (++sectionCount);
        sectionList.appendChild(section);
    });
});