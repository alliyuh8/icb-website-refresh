const carousel = document.querySelector(".carousel");

let isDragging = false;
let startX, scrollLeft;

// Trigger when dragging starts
const dragStart = (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft; // Record the mouse starting position
    scrollLeft = carousel.scrollLeft; // Record the current scroll position
};

// Perform scrolling while dragging
const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default mouse events
    const x = e.pageX - carousel.offsetLeft; // Current mouse position
    const walk = (x - startX) * -1; // Calculate the distance moved (reversed for correct direction)
    carousel.scrollLeft = scrollLeft + walk; // Update scroll position
};

// Stop dragging
const dragStop = () => {
    isDragging = false;
};

// Event listeners
carousel.addEventListener("mousedown", dragStart); // Start dragging on mouse down
carousel.addEventListener("mousemove", dragging); // Dragging movement
carousel.addEventListener("mouseup", dragStop); // Stop dragging on mouse up
carousel.addEventListener("mouseleave", dragStop); // Stop dragging when mouse leaves the carousel
