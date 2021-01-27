const openModelButtons = document.querySelectorAll('[data-modal-target]');
const closeModelButtons = document.querySelectorAll('[data-close-button]');

openModelButtons.forEach(button => {
    button.addEventListener('click', () => {
       const modal = document.querySelector(button.dataset.modalTarget);
       openModal(modal);
    });
});

closeModelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.window');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
}