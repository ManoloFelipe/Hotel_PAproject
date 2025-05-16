// Footer Loader Script
window.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        fetch('./footer/footer.html')
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Footer not found');
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});
