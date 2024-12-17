document.addEventListener("DOMContentLoaded", () => {
    const yearElements = [
      document.getElementById('year'),
      document.getElementById('year-about'),
      document.getElementById('year-projects'),
      document.getElementById('year-contact')
    ].filter(el => el !== null);
  
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => el.textContent = currentYear);
  
    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const toggleIcon = document.querySelector('.toggle-icon');
  
    // Check local storage for theme setting
    if (localStorage.getItem('theme') === 'purple') {
      body.classList.add('purple-theme');
      toggleIcon.textContent = '🟣'; // Purple circle or another icon to denote the purple theme
    } else {
      toggleIcon.textContent = '🌙'; // Default dark theme icon
    }
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('purple-theme');
      if (body.classList.contains('purple-theme')) {
        localStorage.setItem('theme', 'purple');
        toggleIcon.textContent = '🟣';
      } else {
        localStorage.setItem('theme', 'dark');
        toggleIcon.textContent = '🌙';
      }
    });
  });
  