{
    const amountElement = document.querySelector(".js-amount");
    const selectElement = document.querySelector(".js-selectForm");

    const calculatorResult = (amount, currency) => {

        const rateEUR = 4.4;
        const rateUSD = 3.92;
        const rateGBP = 4.83;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

        };
    }

    const updateResultText = (result, amount, currency) => {
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;
        const resultElement = document.querySelector(".js-result");
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const result = calculatorResult(amount, currency);

        const formElement = document.querySelector(".js-form");

        const amount = +amountElement.value;
        const currency = selectElement.value;

    };
}
