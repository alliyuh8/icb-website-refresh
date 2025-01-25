// Smooth scrolling for sidebar links
document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Get all the sections and links
const sections = document.querySelectorAll(".role-header");
const links = document.querySelectorAll(".sidebar a");

// Create an Intersection Observer
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const link = document.querySelector(`a[href="#${entry.target.id}"]`);
            if (link) {
                if (entry.isIntersecting) {
                    // Reset all links first
                    links.forEach(l => {
                        l.style.fontWeight = "normal";
                        l.style.color = "black";
                        l.style.opacity = "50%";
                    });
                    
                    // Highlight the current link
                    link.style.fontWeight = "bold";
                    link.style.color = "black";
                    link.style.opacity = "100%";
                }
            }
        });
    },
    {
        threshold: 0.5, // Section should be at least 50% visible
        rootMargin: "-100px 0px 0px 0px", // Adjust for sticky header offset
    }
);

// Observe each section
sections.forEach((section) => {
    if (section.id) observer.observe(section);
});

// Set initial state - highlight first link
if (links.length > 0) {
    links[0].style.fontWeight = "bold";
    links[0].style.color = "black";
    links[0].style.opacity = "100%";
}
