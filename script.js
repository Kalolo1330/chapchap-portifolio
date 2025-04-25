document.addEventListener('DOMContentLoaded', () => {
  greetUser();

  // Theme toggle buttons
  document.querySelectorAll('[id^="themeToggleBtn"]').forEach(btn =>
    btn.addEventListener('click', toggleTheme)
  );

  // Back-to-top
  document.getElementById('topBtn').addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  // Project details toggle
  document.querySelectorAll('.details-btn').forEach(btn =>
    btn.addEventListener('click', e => {
      const p = e.target.nextElementSibling;
      p.style.display = p.style.display === 'none' ? 'block' : 'none';
    })
  );

  // Contact form validation
  document.forms['contactForm'].addEventListener('submit', e => {
    if (!validateForm()) e.preventDefault();
  });

  // Survey submission
  document.getElementById('surveyForm').addEventListener('submit', e => {
    if (!submitSurvey()) e.preventDefault();
  });
});

function greetUser() {
  const hr = new Date().getHours();
  const msg = hr < 12 ? 'Good morning' :
              hr < 18 ? 'Good afternoon' : 'Good evening';
  alert(`${msg}! Welcome to CHAPCHAP.`);
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

function validateForm() {
  const f = document.forms['contactForm'];
  const name    = f['name'].value.trim();
  const email   = f['email'].value.trim();
  const phone   = f['phone'].value.trim();
  const message = f['message'].value.trim();
  const emailRe = /^\S+@\S+\.\S+$/;
  const phoneRe = /^\+?\d{10,15}$/;

  if (!name || !email || !phone || !message) {
    alert('Please fill out all fields.');
    return false;
  }
  if (!emailRe.test(email) || !phoneRe.test(phone)) {
    alert('Enter a valid email and phone (+countrycode).');
    return false;
  }
  alert('Thanks for reaching out!');
  return true;
}

function submitSurvey() {
  alert('Thank you for completing the CHAPCHAP survey!');
  return true;
}

