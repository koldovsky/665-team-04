
    let elements = document.querySelectorAll('.currency');
    for (let element of elements) {
        element.addEventListener('click',convertPrice );
    }

    let rateUah;
    let rateEur;

    async function convertCurrency() {
        const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
        const currencies = await response.json();
        for (let currency of currencies) {
            if(currency.ccy === "USD") {
                rateUah = currency.sale;
            }
        }
        for (let currency of currencies) {
            if(currency.ccy === "EUR") {
                const rateEurToUah = currency.sale;
                rateEur = rateEurToUah / rateUah;
            }
        }
    }

    convertCurrency();

    function convertPrice(event) {
        const containers = document.querySelectorAll('.price');
        for ( let container of containers) {
            if (!container.hasAttribute('data-price')) {
                let currentValue = container.innerText.replaceAll(',', '.');
                currentValue = currentValue.replaceAll('$', '');
                container.setAttribute('data-price', currentValue);
            }

            const currentPrice = parseFloat(container.getAttribute('data-price'));

            if (event.currentTarget.innerText === 'USD') {
                container.innerText = '$' + container.getAttribute('data-price');
            } else if (event.currentTarget.innerText === 'UAH') {
                const priceInUah = (currentPrice * rateUah).toFixed(2);
                container.innerText = priceInUah + ' грн';
            } else if (event.currentTarget.innerText === 'EUR'){
                const priceInEur = (currentPrice * rateEur).toFixed(2);
                container.innerText = priceInEur + ' euro';
            }

        }
    }