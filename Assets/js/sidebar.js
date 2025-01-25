document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".role-header");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // Find the corresponding link for this section
                const link = document.querySelector(`a[href="#${entry.target.parentElement.id}"]`);
                
                if (link) {
                    if (entry.isIntersecting) {
                        // Reset all links
                        links.forEach(l => {
                            l.style.fontWeight = "normal";
                            l.style.opacity = "50%";
                        });

                        // Highlight the current link
                        link.style.fontWeight = "bold";
                        link.style.opacity = "100%";
                    }
                }
            });
        },
        {
            threshold: 0.1, // Reduced threshold for better tracking
            rootMargin: "-100px 0px 0px 0px"
        }
    );

    // Smooth scrolling
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Observe each section's parent div
    sections.forEach((section) => {
        if (section.parentElement.id) {
            observer.observe(section);
        }
    });

    // Set initial state - highlight first link
    if (links.length > 0) {
        links[0].style.fontWeight = "bold";
        links[0].style.opacity = "100%";
    }
});