const contentForm = document.getElementById("contentForm");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");
const contentList = document.getElementById("contentList");

contentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = titleInput.value;
    const body = bodyInput.value;

    if (title && body) {
        saveContent(title, body);
        titleInput.value = "";
        bodyInput.value = "";
    }
});

function saveContent(title, body) {
    const contentItem = document.createElement("li");
    const contentTitle = document.createElement("h2");
    const contentBody = document.createElement("p");

    contentTitle.textContent = title;
    contentBody.textContent = body;

    contentItem.appendChild(contentTitle);
    contentItem.appendChild(contentBody);

    contentList.appendChild(contentItem);
}
