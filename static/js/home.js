// Define a function to update the footer visibility
function updateFooterVisibility() {
    // Get the window and document heights
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;

    // Add or remove a class to the body element based on the heights
    if (documentHeight > windowHeight) {
        document.body.classList.add("exceeds-normal-size");
    } else {
        document.body.classList.remove("exceeds-normal-size");
    }
}

// Call the function when the document is ready
document.addEventListener("DOMContentLoaded", function() {
    updateFooterVisibility();
});

// Add an event listener for the scroll event
window.addEventListener("scroll", function() {
    // Get the scroll position, window height and document height
    var scrollPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;

    // Add or remove a class to the body element based on the scroll position
    if (scrollPosition + windowHeight === documentHeight) {
        document.body.classList.add("hide-footer");
    } else {
        document.body.classList.remove("hide-footer");
    }
});

// Add an event listener for the resize event
window.addEventListener("resize", function() {
    // Call the function to update the footer visibility
    updateFooterVisibility();
});
