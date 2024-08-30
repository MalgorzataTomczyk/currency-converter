let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    let EUR = 4.2769;
    let USD = 3.8453;
    let GBP = 5.0486;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "GBP":
            result = amount / GBP;
            break;
    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = </strong>${result.toFixed(2)} ${currency}</strong>`;

});