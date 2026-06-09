document.addEventListener("DOMContentLoaded", () => {
    const formContact = document.querySelector('.form-contact');
    const contactModal = document.getElementById('contactModal');

    //Ao clicar no submit
    formContact.addEventListener('submit', (e) => {
        e.preventDefault();

        contactModal.classList.add('active');
        formContact.reset();
        //Time do modal
        setTimeout(() => {
            contactModal.classList.remove('active');
        }, 2000);
    });
});