// Function to toggle the navigation menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Attach the toggleMenu function to the hamburger icon
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block'; // Show the project
        } else {
            project.style.display = 'none'; // Hide the project
        }
    });
}

// Function to open the lightbox
function openLightbox(imageSrc, captionText) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = captionText;
    lightbox.style.display = 'block';
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Attach click event listeners to project images
document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', () => {
        const imageSrc = img.src;
        const captionText = img.alt;
        openLightbox(imageSrc, captionText);
    });
});

// Function to validate the contact form in real-time
function validateField(field, errorMessage) {
    const errorElement = field.nextElementSibling; // Assume the error message is the next sibling element
    if (field.value.trim() === '') {
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
        return false;
    } else if (field.type === 'email' && !/\S+@\S+\.\S+/.test(field.value.trim())) {
        errorElement.textContent = 'Please enter a valid email address.';
        errorElement.style.display = 'block';
        return false;
    } else {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        return true;
    }
}

// Function to validate the entire form on submission
function validateContactForm(event) {
    event.preventDefault(); // Prevent form submission

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const isNameValid = validateField(nameField, 'Please enter your name.');
    const isEmailValid = validateField(emailField, 'Please enter your email.');
    const isMessageValid = validateField(messageField, 'Please enter your message.');

    // If all fields are valid, submit the form
    if (isNameValid && isEmailValid && isMessageValid) {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').submit();
    }
}

// Attach real-time validation to input fields
document.getElementById('name').addEventListener('input', () => validateField(document.getElementById('name'), 'Please enter your name.'));
document.getElementById('email').addEventListener('input', () => validateField(document.getElementById('email'), 'Please enter your email.'));
document.getElementById('message').addEventListener('input', () => validateField(document.getElementById('message'), 'Please enter your message.'));

// Attach the validateContactForm function to the form's submit event
document.getElementById('contact-form').addEventListener('submit', validateContactForm);