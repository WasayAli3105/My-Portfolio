
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-122650090-1');
        

            // button skills js
             // ✅ Make clicked filter button stay active
  const filterButtons = document.querySelectorAll('.portfolio-filter li');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // remove 'active' from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      // add 'active' to the clicked one
      btn.classList.add('active');
    });
  });


//   resume dowmnload js

document.getElementById('cvBtn').addEventListener('click', function(e){
    e.preventDefault(); // link ka default behavior stop
    const fileUrl = this.href;

    // Download trigger
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Resume.pdf'; // downloaded file ka name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// typing headings js

 window.onload = () => {
    const heading = document.getElementById("typingHeading");
    const text = "Hi! I'm Abdul Wasay Ali";  // manually set clean text
    let index = 0;

    heading.textContent = ""; // empty for animation

    function typeEffect() {
      if (index < text.length) {
        heading.textContent += text[index];
        index++;
        setTimeout(typeEffect, 150); // speed
      } else {
        heading.style.borderRight = "0"; // cursor remove
      }
    }

    typeEffect();
  };





  // arrow button click and about section js

  
document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.getElementById('scrollArrow');
    arrow.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('[data-scroll-index="1"]');
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// conatck form js

 const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Name field validation on blur
    nameInput.addEventListener("blur", function() {
        const nameRegex = /^[a-zA-Z\s]+$/;
        
        if (this.value.trim() === "") {
            this.classList.add("error-border");
            document.getElementById("name-error").textContent = "Name is required";
            document.getElementById("name-error").classList.add("show");
        } else if (!nameRegex.test(this.value.trim())) {
            this.classList.add("error-border");
            document.getElementById("name-error").textContent = "Only letters are allowed, numbers are not allowed";
            document.getElementById("name-error").classList.add("show");
        } else {
            this.classList.remove("error-border");
            document.getElementById("name-error").classList.remove("show");
        }
    });

    nameInput.addEventListener("input", function() {
        const nameRegex = /^[a-zA-Z\s]+$/;
        
        if (nameRegex.test(this.value.trim()) && this.value.trim() !== "") {
            this.classList.remove("error-border");
            document.getElementById("name-error").classList.remove("show");
        }
    });

    // Real-time validation for email field
    emailInput.addEventListener("blur", function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (this.value.trim() === "") {
            this.classList.add("error-border");
            document.getElementById("email-error").textContent = "Email is required";
            document.getElementById("email-error").classList.add("show");
        } else if (!emailRegex.test(this.value)) {
            this.classList.add("error-border");
            document.getElementById("email-error").textContent = "Please enter a valid email address";
            document.getElementById("email-error").classList.add("show");
        } else {
            this.classList.remove("error-border");
            document.getElementById("email-error").classList.remove("show");
        }
    });

    emailInput.addEventListener("input", function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(this.value)) {
            this.classList.remove("error-border");
            document.getElementById("email-error").classList.remove("show");
        }
    });

    // Real-time validation for message field
    messageInput.addEventListener("blur", function() {
        if (this.value.trim() === "") {
            this.classList.add("error-border");
            document.getElementById("message-error").classList.add("show");
        }
    });

    messageInput.addEventListener("input", function() {
        if (this.value.trim() !== "") {
            this.classList.remove("error-border");
            document.getElementById("message-error").classList.remove("show");
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Final validation before submit
        let isValid = true;
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate name
        if (nameInput.value.trim() === "") {
            nameInput.classList.add("error-border");
            document.getElementById("name-error").textContent = "Name is required";
            document.getElementById("name-error").classList.add("show");
            nameInput.focus();
            isValid = false;
        } else if (!nameRegex.test(nameInput.value.trim())) {
            nameInput.classList.add("error-border");
            document.getElementById("name-error").textContent = "Only letters are allowed, numbers are not allowed";
            document.getElementById("name-error").classList.add("show");
            nameInput.focus();
            isValid = false;
        }

        // Validate email
        if (emailInput.value.trim() === "") {
            emailInput.classList.add("error-border");
            document.getElementById("email-error").textContent = "Email is required";
            document.getElementById("email-error").classList.add("show");
            if (isValid) emailInput.focus();
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add("error-border");
            document.getElementById("email-error").textContent = "Please enter a valid email address";
            document.getElementById("email-error").classList.add("show");
            if (isValid) emailInput.focus();
            isValid = false;
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            messageInput.classList.add("error-border");
            document.getElementById("message-error").classList.add("show");
            if (isValid) messageInput.focus();
            isValid = false;
        }

        // If invalid, stop submission
        if (!isValid) return;

        // If valid, submit form
        const formData = new FormData(this);

        fetch(this.action, {
            method: "POST",
            body: formData
        })
        .then(res => {
            openPopup();
            form.reset();
            // Remove all error states after successful submission
            document.querySelectorAll('.error-border').forEach(el => el.classList.remove('error-border'));
            document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
        })
        .catch(err => console.log(err));
    });

    function openPopup() {
        document.getElementById("popup").style.display = "flex";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    // dark mode js

    // Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change icon with animation
    icon.style.transform = 'scale(0)';
    
    setTimeout(() => {
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('darkMode', null);
        }
        icon.style.transform = 'scale(1)';
    }, 150);
});