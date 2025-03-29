
document.addEventListener("DOMContentLoaded", function (){
     
    let navLinks = document.querySelectorAll(".nav-links li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Navigating to:", this.href);
            window.location.href = this.href;
        });

        link.addEventListener("mouseover", function() {
            this.style.color = "purple";
        });
         
        link.addEventListener("mouseout", function() {
            this.style.color = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", function (){
    let serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("click", function () {
            // Remove 'active' class from all cards
            serviceCards.forEach(c => c.classList.remove("active"));

            // Add 'active' class to clicked card
            this.classList.add("active");
        });
    });
});
    document.querySelectorAll(".service-card").forEach(card =>{
        card.addEventListener("mouseover", function() {
            if(!this.classList.contains("active")) {
                this.classList.add("hovering");
            }
        });

        card.addEventListener("mouseout", function () {
            this.classList.remove("hovering");
        });
    });
    document.addEventListener("DOMContentLoaded", function (){
        let text = "I'm Manya Gupta";
        let index = 0;
        let speed = 200;

        function typeEffect() {
            if (index < text.length) {
                document.getElementById("p2").textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            }
        }

        typeEffect();
    });
    document.addEventListener("DOMContentLoaded", function () {
        let sections = document.querySelectorAll("section");
        let navLinks = document.querySelectorAll(".nav-link");
    
        window.addEventListener("scroll", () => {
            let scrollY = window.scrollY;
    
            sections.forEach((section) => {
                let top = section.offsetTop - 50;
                let height = section.offsetHeight;
                let id = section.getAttribute("id");  
                if (scrollY >= top && scrollY < top + height) {
                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").includes(id)) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        });
    });
    const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ){
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
      } else {
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
      }
    });
  }
  document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevent form from reloading page

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('https://portfolio-veu5.onrender.com/api/form', {
            method: 'POST',
            headers: { 'Content-Type': 'applicaton/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message);  // Show success message
    } catch (error) {
        console.error('Error submitting form:', error);
    }
});
