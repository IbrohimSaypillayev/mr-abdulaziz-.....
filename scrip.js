function addNote() {
    const input = document.getElementById("noteInput");
    const text = input.value.trim();

    if (text === "") return;

    const ul = document.getElementById("noteList");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    li.appendChild(span);
    ul.appendChild(li);

    input.value = ""; // Input tozalash
}
