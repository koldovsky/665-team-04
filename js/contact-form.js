(function () {
    const form = document.querySelector('.subscription__form');
    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch (even.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then ( response => {
            form.reset()
        })
    }
}) ();