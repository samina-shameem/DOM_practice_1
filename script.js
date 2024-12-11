document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const button = document.getElementById("changeText");

    button.addEventListener("click", () => {
        title.textContent = "You clicked the button";
        title.style.color = "blue";
        //console.log("Button was clicked");
    });
});
