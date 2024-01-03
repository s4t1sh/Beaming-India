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

            // Use scrollIntoView with smooth behavior
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', function () {
        var leftCol = document.getElementById('leftCol');
        var rightCol = document.getElementById('rightCol');

        var scrollY = window.scrollY;
        
        // Stick left column after 3 scrolls
        if (scrollY >= 300) {
            leftCol.classList.add('sticky');
        } else {
            leftCol.classList.remove('sticky');
        }

        // Stick right column after 1 scroll
        if (scrollY >= 100) {
            rightCol.classList.add('sticky');
        } else {
            rightCol.classList.remove('sticky');
        }
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add or remove the active-content class based on the section visibility
    function updateActiveContent() {
        var links = document.querySelectorAll('.contents');

        links.forEach(function (link) {
            var targetId = link.getAttribute('href').substring(1); // Remove the '#' from href
            var targetSection = document.getElementById(targetId);

            if (targetSection && isElementInViewport(targetSection)) {
                link.classList.add('active-content');
            } else {
                link.classList.remove('active-content');
            }
        });
    }

    // Event listener for scroll events
    window.addEventListener('scroll', updateActiveContent);

    // Initial check on page load
    window.addEventListener('load', updateActiveContent);
});


   
