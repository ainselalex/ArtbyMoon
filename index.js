
function toggleDropdown() {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');

    document.querySelectorAll('.album-pictures .card').forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('.card-img-top').src;
            modalImage.src = imgSrc;
            modal.show();
        });
    });
});