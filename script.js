// Simple scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
// Load charts
fetch('charts/family_avg_distribution.html')
    .then(response => response.text())
    .then(html => document.getElementById('chart-family-dist').innerHTML = html);