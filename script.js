// script.js
document.addEventListener('DOMContentLoaded', () => {
    const introMessage = document.getElementById('intro-message');
    const witnessModal = document.getElementById('witness-modal');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const body = document.body;

    // Función para abrir el modal
    const openModal = () => {
        witnessModal.classList.add('is-visible');
        body.classList.add('modal-open'); // Evita el scroll del fondo
        witnessModal.setAttribute('aria-hidden', 'false');
        witnessModal.focus(); // Enfoca el modal para accesibilidad
    };

    // Función para cerrar el modal
    const closeModal = () => {
        witnessModal.classList.remove('is-visible');
        body.classList.remove('modal-open'); // Habilita el scroll del fondo
        witnessModal.setAttribute('aria-hidden', 'true');
    };

    // Evento al hacer clic en el mensaje de introducción
    introMessage.addEventListener('click', openModal);

    // Evento al hacer clic en el botón "Sí"
    btnYes.addEventListener('click', () => {
        closeModal();
        // Mensaje personalizado antes de abrir el video
        console.log('Usuario aceptó la invitación');
        window.open('https://youtu.be/nJJpY0YK5Hg?si=a0-5uT9vgqUplBcV&t=16', '_blank');
    });

    // Evento al hacer clic en el botón "No"
    btnNo.addEventListener('click', () => {
        closeModal();
        window.open('https://youtu.be/hSR-dX-om_c?si=Dww-3EMsWGctAxyM&t=112', '_blank');
    });

    // Cerrar modal al hacer clic fuera del contenido
    witnessModal.addEventListener('click', (event) => {
        if (event.target === witnessModal) {
            closeModal();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && witnessModal.classList.contains('is-visible')) {
            closeModal();
        }
    });
});