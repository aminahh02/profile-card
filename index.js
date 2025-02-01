document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelector(".social-links");
    let originalContent = socialLinks.innerHTML;

    function addHoverEffect() {
        const emailIcon = document.querySelector(".fa-envelope");
        if (emailIcon) {
            emailIcon.addEventListener("mouseenter", function () {
                socialLinks.innerHTML = "<p style='font-size: 12px; font-weight: bold;'>abiolaminah@gmail.com</p>";
            });
        }
    }

    socialLinks.addEventListener("mouseleave", function () {
        socialLinks.innerHTML = originalContent;
        addHoverEffect();
    });

    addHoverEffect();
});

const d = new Date();
let text = d.toUTCString();
document.getElementById("currentTimeUTC").innerHTML = text;