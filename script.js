// Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email validation pattern
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check empty fields
    if (name === "" || email === "" || subject === "" || message === "") {

        formMessage.textContent =
            "Please fill in all the fields.";

        formMessage.style.color = "red";

        return;
    }

    // Check email
    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;
    }

    // Successful submission
    formMessage.textContent =
        `Thank you, ${name}! Your message has been sent successfully.`;

    formMessage.style.color = "green";

    // Clear form
    contactForm.reset();
});


// Interactive Project Message

function showProjectMessage(projectName) {

    alert(
        `You selected the "${projectName}" project.`
    );
}
