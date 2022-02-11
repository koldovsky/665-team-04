
    let elements = document.querySelectorAll('.currency');
    for (let element of elements) {
        element.addEventListener('click', findOutCurrency );
    }

    let rateUah;
    let rateEur;

    async function rateCurrencies() {
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

    rateCurrencies();

    function savePrice(possible_price_containers) {
        for (let container of possible_price_containers) {
            if (!container.hasAttribute('data-price')) {
                let currentValue = container.innerText.replaceAll(',', '.');
                currentValue = currentValue.replaceAll('$', '');
                container.setAttribute('data-price', currentValue);
            }
        }
    }

    let currentCurrency = 'USD';

    function findOutCurrency(event) {
        if (event.currentTarget.innerText === 'USD'){
            currentCurrency = 'USD';
        } else if (event.currentTarget.innerText === 'UAH') {
            currentCurrency = 'UAH';
        } else if (event.currentTarget.innerText === 'EUR') {
            currentCurrency = 'EUR';
        }
        currentCurrency;
        convertPrice();
    }

    function convertPrice() {
        let containers = document.querySelectorAll('.price');
        savePrice(containers);
        for (let container of containers) {
            const currentPrice = parseFloat(container.getAttribute('data-price'));
            if (currentCurrency === 'USD') {
                container.innerText = '$' + currentPrice;
            } else if (currentCurrency === 'UAH') {
                const priceInUah = (currentPrice * rateUah).toFixed(2);
                container.innerText = priceInUah + ' грн';
            } else if (currentCurrency === 'EUR'){
                const priceInEur = (currentPrice * rateEur).toFixed(2);
                container.innerText = priceInEur + ' euro';
            }
        }
    }

