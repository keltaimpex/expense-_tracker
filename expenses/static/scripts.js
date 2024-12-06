// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-dark-mode"); // The dark mode toggle button
    const body = document.body; // Reference to the body element

    // Check localStorage for saved dark mode preference
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme === "enabled") {
        body.classList.add("dark-mode"); // Apply dark mode if saved
    }

    // Add event listener to the toggle button
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode"); // Toggle the dark mode class

        // Save the user's preference to localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
