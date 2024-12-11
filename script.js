document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    const button = document.getElementById("changeText");
    const imageContainer = document.getElementById("image-container");

    button.addEventListener("click", () => {
        title.textContent = "You clicked the button";
        title.style.color = "green";
        title.style.fontSize="22px";
        
        imageContainer.innerHTML="";

        const image = document.createElement("img");
        image.src = "https://images.unsplash.com/photo-1733863200891-22bba4483644?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        image.alt ="Placeholder Image";
        image.style.marginTop ="20px";
        //imageContainer.append(image);
        image.style.width="200px";
        image.style.height="auto";
        imageContainer.appendChild(image);
        image.style.border="2px solid brown";
        image.style.borderRadius="10px";
        
        console.log("Button was clicked & image was added");
    });
});
