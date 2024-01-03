document.addEventListener("DOMContentLoaded", function () {
    // Select all links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove the 'active-content' class from all anchor tags
            document.querySelectorAll('a[href^="#"]').forEach(a => {
                a.classList.remove('active-content');
            });

            // Add the 'active-content' class to the clicked anchor tag
            this.classList.add('active-content');

            // Get the target element
            const targetElement = document.querySelector(this.getAttribute('href'));

            // Reset the scroll position to the top of the page
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            });

            // Use scrollIntoView with smooth behavior
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});