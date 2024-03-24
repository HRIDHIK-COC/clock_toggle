function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
   
    document.getElementById('clock').textContent = timeString;
  }
  
  function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    body.classList.toggle('dark-mode', darkModeToggle.checked);
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.addEventListener('change', toggleDarkMode);
  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  // Rest of the code remains the same...
  