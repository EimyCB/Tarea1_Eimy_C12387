// Function to check if the device is mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Function to initialize the page
function initPage() {
    const projectsTitle = document.querySelector('.projects-section .section-title');
    const projectsContent = document.querySelector('.projects-section .section-content');
    const workTitle = document.querySelector('.work-section .section-title');
    const workContent = document.querySelector('.work-section .section-content');
    const educationContent = document.querySelector('.education-section .section-content');
    
    // Reset previous states
    if (isMobile()) {
        // Remove any existing event listeners to prevent duplicates
        projectsTitle.replaceWith(projectsTitle.cloneNode(true));
        workTitle.replaceWith(workTitle.cloneNode(true));
        
        // Get the new references after cloning
        const newProjectsTitle = document.querySelector('.projects-section .section-title');
        const newWorkTitle = document.querySelector('.work-section .section-title');
        
        // For mobile: Add toggle functionality and hide content by default
        newProjectsTitle.addEventListener('click', function() {
            projectsContent.classList.toggle('active');
        });
        
        newWorkTitle.addEventListener('click', function() {
            workContent.classList.toggle('active');
        });
        
        // Education section is always visible in mobile view as per the screenshots
        educationContent.classList.add('active');
        
        // Set default state - content hidden
        projectsContent.classList.remove('active');
        workContent.classList.remove('active');
        
    } else {
        // For desktop: Show all sections
        projectsContent.classList.add('active');
        workContent.classList.add('active');
        educationContent.classList.add('active');
    }
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);

// Update layout on window resize
window.addEventListener('resize', initPage);