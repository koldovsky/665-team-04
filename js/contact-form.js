(function () {
    let myModal = new bootstrap.Modal(document.getElementById('form__modal-subscription'),
        {focus: true});

    let textForUser = "Wait. Your data is being sent";

    async function handleSubmit(event) {
        event.preventDefault();
        let status = document.querySelector('#modal-text');
        const form = document.querySelector('.subscription__form');
        const data = new FormData(form);
        status.innerText = "Wait! Your data is being sent";
        await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
                }
        });
        form.reset();
        status.innerText = "We will contact you shortly.";
        myModal.show();
    }
    document.querySelector('.subscription__button').addEventListener('click', handleSubmit);

}) ();