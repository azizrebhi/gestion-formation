function closeSidebar() {
    // Get a reference to the sidebar element
    const sidebar = document.getElementById('sidebar');
  
    // Add the 'hidden' class to the sidebar to hide it
    sidebar.classList.add('hidden');
  
    // Optionally, you can also add any other logic to update the UI
    // or state of your application when the sidebar is closed
  }
// scripts.js
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function() {
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('show');
    });
});
