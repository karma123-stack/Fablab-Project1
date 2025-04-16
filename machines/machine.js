// Optional: Only needed if you want to attach events dynamically
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = this.getAttribute("href");
        });
    });
});

    // Select the "Back to Machines" button
    const backBtn = document.getElementById("backToMachines");

    // Add event listener for the click event
    backBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Scroll smoothly to the top of the page (or to any specific element)
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Smooth scrolling
        });
    });
  
    document.addEventListener("DOMContentLoaded", function () {
    // Modal Image Viewer
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".close");

    // Open modal when any image inside .card is clicked
    document.querySelectorAll(".card img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";  // Show modal
            modalImg.src = this.src;       // Set modal image source to clicked image
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";  // Hide modal
    });

    // Close the modal when clicking outside the image (on modal background)
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";  // Hide modal
        }
    });

    // Read More buttons (if necessary for page redirection)
    const buttons = document.querySelectorAll(".read-more-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = this.getAttribute("href");  // Redirect on button click
        });
    });
});
