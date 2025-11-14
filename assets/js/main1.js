
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