(function () {
    let myModal = new bootstrap.Modal(document.getElementById('form__modal-subscription'),
        {focus: true});

    let textForUser = "Wait. Your data is being sent";

    async function handleSubmit(event) {
        event.preventDefault();
        let statusModal = document.querySelector('#modal-text');
        const form = document.querySelector('.subscription__form');
        const data = new FormData(form);
        statusModal.innerText = "Wait! Your data is being sent";
        let str = document.getElementById("email").value;
        let el = document.getElementById("email");
        let status = document.getElementById("status");
        let re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        if (re.test(str)) {
            await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            el.classList.remove('subscription__form-mail-incorrect');
            document.getElementById('status').hidden = true;
            form.reset();
            statusModal.innerText = "We will contact you shortly.";
            myModal.show();
        } else {
            status.innerText = "Please typing correct email address";
            el.classList.add('subscription__form-mail-incorrect');
        }
        if(postEmpty(str)) {
            status.innerText = "Please typing email address";
        }
    }

    function postEmpty(str){
        return (str == null) || (str.length == 0);
    }

    document.querySelector('.subscription__button').addEventListener('click', handleSubmit);

}) ();