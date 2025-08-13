function switchTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(button => button.classList.remove('active', 'green-active', 'yellow-active'));

    document.getElementById(tabName).classList.add('active');

    if (tabName === 'education') {
        evt.currentTarget.classList.add('active');
    } else if (tabName === 'events') {
        evt.currentTarget.classList.add('green-active');
    } else if (tabName === 'achievements') {
        evt.currentTarget.classList.add('yellow-active');
    }
}

    document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});