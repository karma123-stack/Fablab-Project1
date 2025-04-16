// readmore.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const moreText = button.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === 'none') {
          moreText.style.display = 'inline';
          button.textContent = 'Read Less';
        } else {
          moreText.style.display = 'none';
          button.textContent = 'Read More';
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      if (!/^[0-9]{8,15}$/.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
      }
  
      alert(`Thank you, ${name}! Your registration has been submitted.`);
  
      // Redirect to home
      window.location.href = "../home/index.html";
    });
  });
  
  
