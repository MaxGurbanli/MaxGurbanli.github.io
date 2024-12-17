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
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.remove('purple-theme');
      toggleIcon.textContent = '🌙';
    } else {
      body.classList.add('purple-theme');
      toggleIcon.textContent = '🟣';
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

    const letters = "abcdefghijklmnopqrstuvwxyz";
    let interval = null;

    document.querySelector(".hero .randomizable").onmouseover = event => {  
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            if (iteration >= event.target.dataset.value.length) { 
                clearInterval(interval);
            }
            iteration += 1 / 3;
        }, 60);
    };

    // Blob animation effect
    const blob = document.getElementById("blob");

    window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" }
      )
    };
    
    window.addEventListener("pointermove", e => {
      const { pageX, pageY } = e
      blob.animate(
        {
          left: `${pageX}px`,
          top: `${pageY}px`
        },
        { duration: 3000, fill: "forwards" }
      )
    });
});
