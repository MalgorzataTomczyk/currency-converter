function convertCurrency(amount, currency) {
    const EUR = 4.2769;
    const USD = 3.8453;
    const GBP = 5.0486;
    
    switch (currency) {
        case "EUR":
            return amount / EUR;
        case "USD":
            return amount / USD;
        case "GBP":
            return amount / GBP;
        default:
            return 0;
    }
}

function updateResult(resultElement, amount, result, currency) {
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
}

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = convertCurrency(amount, currency);

    updateResult(resultElement, amount, result, currency);
});