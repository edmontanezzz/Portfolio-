//menu bar
function toggleMenu() {
    var menuItemsContainer = document.querySelector('.menu-items-container');
    var menuOverlay = document.querySelector('.menu-overlay');

    menuItemsContainer.classList.toggle('show');
    menuOverlay.classList.toggle('show');

document.querySelectorAll('.menu-items a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionID = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionID);

        section.scrollIntoView({
            behavior: 'smooth'
        });

        document.querySelector('.menu-items-container').classList.remove('show');
        document.querySelector('.menu-overlay').classList.remove('show');
    });
});
}


window.addEventListener('load', function() {
    var modal = document.getElementById('custom-modal');
    var closeButton = document.getElementsByClassName('close')[0];

    // Display the modal
    modal.style.display = 'block';

    // Close the modal when the close button is clicked
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.body.scrollHeight;

    // Show footer only when scrolled to the very bottom of the page
    if (scrollPosition + windowHeight >= documentHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

