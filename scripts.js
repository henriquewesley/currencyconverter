const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector(".currency-select-from");
const currencySelectTo = document.querySelector(".currency-select-to");

const currencyData = {
  USD: { name: "Dólar (USD)", img: "./assets/dolar.png", locale: "en-US", rate: 5.74 },
  EUR: { name: "Euro (EUR)", img: "./assets/Euro.png", locale: "de-DE", rate: 6.19 },
  GBP: { name: "Libra (GBP)", img: "./assets/Libra.png", locale: "en-GB", rate: 7.37 },
  BTC: { name: "Bitcoin (BTC)", img: "./assets/bitcoin.png", locale: "en-US", rate: 464230.41 },
  BRL: { name: "Real (BRL)", img: "./assets/Real.png", locale: "pt-BR", rate: 1 },
};

function convertValue() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToBeConverted = document.querySelector(".currency-value-to-be-converted");
  const convertedCurrencyValue = document.querySelector(".converted-currency-value");
  const selectedCurrencyFrom = currencySelectFrom.value;
  const selectedCurrencyTo = currencySelectTo.value;
  const selectedCurrencyFromData = currencyData[selectedCurrencyFrom];
  const selectedCurrencyToData = currencyData[selectedCurrencyTo];

  if (selectedCurrencyFromData && selectedCurrencyToData) {
    if (!isNaN(inputCurrencyValue)) {
      const exchangeRate = selectedCurrencyToData.rate / selectedCurrencyFromData.rate;
      const convertedValue = inputCurrencyValue * exchangeRate;
      convertedCurrencyValue.innerHTML = new Intl.NumberFormat(selectedCurrencyToData.locale, {
        style: "currency",
        currency: selectedCurrencyTo,
      }).format(convertedValue);
      currencyValueToBeConverted.innerHTML = new Intl.NumberFormat(selectedCurrencyFromData.locale, {
        style: "currency",
        currency: selectedCurrencyFrom,
      }).format(inputCurrencyValue);
    } else {
      convertedCurrencyValue.innerHTML = "Valor Invalido";
    }
  } else {
    convertedCurrencyValue.innerHTML = "Moeda Invalida";
  }
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");
  const selectedCurrency = currencySelectTo.value;
  const selectedCurrencyData = currencyData[selectedCurrency];

  if (selectedCurrencyData) {
    currencyName.innerHTML = selectedCurrencyData.name;
    currencyImg.src = selectedCurrencyData.img;
  }
  convertValue();
}

function changeCurrencyFrom() {
  const nameCurrency = document.getElementById("name-currency");
  const currencyImgUp = document.querySelector(".currency-img-up");
  const selectedCurrencyFrom = currencySelectFrom.value;
  const selectedCurrencyDataFrom = currencyData[selectedCurrencyFrom];

  if (selectedCurrencyDataFrom) {
    nameCurrency.innerHTML = selectedCurrencyDataFrom.name;
    currencyImgUp.src = selectedCurrencyDataFrom.img;
  }
  convertValue();
}

currencySelectFrom.addEventListener("change", changeCurrencyFrom);
currencySelectTo.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);

// const convertButton = document.querySelector(".convert-button");
// const currencySelectFrom = document.querySelector(".currency-select-from");
// const currencySelectTo = document.querySelector(".currency-select-to");

// const currencyData = {
//   USD: { name: "Dólar (USD)", img: "./assets/dolar.png", locale: "en-US", rate: 5.74 },
//   EUR: { name: "Euro (EUR)", img: "./assets/Euro.png", locale: "de-DE", rate: 6.19 },
//   GBP: { name: "Libra (GBP)", img: "./assets/Libra.png", locale: "en-GB", rate: 7.37 },
//   BTC: { name: "Bitcoin (BTC)", img: "./assets/bitcoin.png", locale: "en-US", rate: 464230.41 },
//   BRL: { name: "Real (BRL)", img: "./assets/Real.png", locale: "pt-BR", rate: 1 },
// };

// function convertValue() {
//   const inputCurrencyValue = document.querySelector(".input-currency").value;
//   const currencyValueToBeConverted = document.querySelector(".currency-value-to-be-converted");
//   const convertedCurrencyValue = document.querySelector(".converted-currency-value");
//   const selectedCurrencyFrom = currencySelectFrom.value;
//   const selectedCurrencyTo = currencySelectTo.value;
//   const selectedCurrencyFromData = currencyData[selectedCurrencyFrom];
//   const selectedCurrencyToData = currencyData[selectedCurrencyTo];

//   if (selectedCurrencyFromData && selectedCurrencyToData) {
//     if (!isNaN(inputCurrencyValue)) {
//       const convertedValue = (inputCurrencyValue / selectedCurrencyFromData.rate) * selectedCurrencyToData.rate;
//       convertedCurrencyValue.innerHTML = new Intl.NumberFormat(selectedCurrencyToData.locale, {
//         style: "currency",
//         currency: selectedCurrencyTo,
//       }).format(convertedValue);
//     } else {
//       convertedCurrencyValue.innerHTML = "Valor Invalido";
//       alert("Valor Invalido");
//     }
//   } else {
//     convertedCurrencyValue.innerHTML = "Moeda Invalida";
//     alert("Moeda Invalida");
//   }

//   if (selectedCurrencyFromData && selectedCurrencyToData) {
//     const convertedValue = (inputCurrencyValue / selectedCurrencyFromData.rate) * selectedCurrencyToData.rate;
//     convertedCurrencyValue.innerHTML = new Intl.NumberFormat(selectedCurrencyToData.locale, {
//       style: "currency",
//       currency: selectedCurrencyTo,
//     }).format(convertedValue);
//   }

//   currencyValueToBeConverted.innerHTML = new Intl.NumberFormat(selectedCurrencyFromData.locale, {
//     style: "currency",
//     currency: selectedCurrencyFrom,
//   }).format(inputCurrencyValue);
// }

// function changeCurrency() {
//   const currencyName = document.getElementById("currency-name");
//   const currencyImg = document.querySelector(".currency-img");
//   const selectedCurrency = currencySelectTo.value;
//   const selectedCurrencyData = currencyData[selectedCurrency];

//   if (selectedCurrencyData) {
//     currencyName.innerHTML = selectedCurrencyData.name;
//     currencyImg.src = selectedCurrencyData.img;
//   }
//   convertValue();
// }

// function changeCurrencyFrom() {
//   const nameCurrency = document.getElementById("name-currency");
//   const currencyImgUp = document.querySelector(".currency-img-up");
//   const selectedCurrencyFrom = currencySelectFrom.value;
//   const selectedCurrencyDataFrom = currencyData[selectedCurrencyFrom];

//   if (selectedCurrencyDataFrom) {
//     nameCurrency.innerHTML = selectedCurrencyDataFrom.name;
//     currencyImgUp.src = selectedCurrencyDataFrom.img;
//   }
//   convertValue();
// }

// currencySelectFrom.addEventListener("change", changeCurrencyFrom);
// currencySelectTo.addEventListener("change", changeCurrency);
// convertButton.addEventListener("click", convertValue);

// const convertButton = document.querySelector(".convert-button");
// const currencySelectFrom = document.querySelector(".currency-select-from");
// const currencySelectTo = document.querySelector(".currency-select-to");

// const currencyData = {
//   USD: { name: "Dólar (USD)", img: "./assets/dolar.png", locale: "en-US", rate: 5.74 },
//   EUR: { name: "Euro (EUR)", img: "./assets/Euro.png", locale: "de-DE", rate: 6.19 },
//   GBP: { name: "Libra (GBP)", img: "./assets/Libra.png", locale: "en-GB", rate: 7.37 },
//   BTC: { name: "Bitcoin (BTC)", img: "./assets/bitcoin.png", locale: "en-US", rate: 464230.41 },
//   BRL: { name: "Real (BRL)", img: "./assets/Real.png", locale: "pt-BR", rate: 1 },
// };

// function convertValue() {
//   const inputCurrencyValue = document.querySelector(".input-currency").value;
//   const currencyValueToBeConverted = document.querySelector(".currency-value-to-be-converted");
//   const convertedCurrencyValue = document.querySelector(".converted-currency-value");
//   const selectedCurrencyFrom = currencySelectFrom.value;
//   const selectedCurrencyTo = currencySelectTo.value;
//   const selectedCurrencyFromData = currencyData[selectedCurrencyFrom];
//   const selectedCurrencyToData = currencyData[selectedCurrencyTo];

//   if (selectedCurrencyFromData && selectedCurrencyToData) {
//     const convertedValue = (inputCurrencyValue / selectedCurrencyFromData.rate) * selectedCurrencyToData.rate;
//     convertedCurrencyValue.innerHTML = new Intl.NumberFormat(selectedCurrencyToData.locale, {
//       style: "currency",
//       currency: selectedCurrencyTo,
//     }).format(convertedValue);
//   }

//   currencyValueToBeConverted.innerHTML = new Intl.NumberFormat(selectedCurrencyFromData.locale, {
//     style: "currency",
//     currency: selectedCurrencyFrom,
//   }).format(inputCurrencyValue);
// }

// function changeCurrency() {
//   const currencyName = document.getElementById("currency-name");
//   const currencyImg = document.querySelector(".currency-img");
//   const selectedCurrency = currencySelectTo.value;
//   const selectedCurrencyData = currencyData[selectedCurrency];

//   if (selectedCurrencyData) {
//     currencyName.innerHTML = selectedCurrencyData.name;
//     currencyImg.src = selectedCurrencyData.img;
//   }

//   convertValue();
// }

// currencySelectTo.addEventListener("change", changeCurrency);
// convertButton.addEventListener("click", convertValue);

// const convertButton = document.querySelector(".convert-button");
// const currencySelect = document.querySelector(".currency-select");

// const currencyData = {
//   USD: { name: "Dólar (USD)", img: "./assets/dolar.png", locale: "en-US", rate: 5.74 },
//   EUR: { name: "Euro (EUR)", img: "./assets/Euro.png", locale: "de-DE", rate: 6.19 },
//   GBP: { name: "Libra (GBP)", img: "./assets/Libra.png", locale: "en-GB", rate: 7.37 },
//   BTC: { name: "Bitcoin (BTC)", img: "./assets/bitcoin.png", locale: "en-US", rate: 464230.41 },
//   BRL: { name: "Real (BRL)", img: "./assets/Real.png", locale: "pt-BR", rate: 1 },
// };

// function convertValue() {
//   const inputCurrencyValue = document.querySelector(".input-currency").value;
//   const currencyValueToBeConverted = document.querySelector(".currency-value-to-be-converted");
//   const convertedCurrencyValue = document.querySelector(".converted-currency-value");
//   const selectedCurrency = currencySelect.value;
//   const selectedCurrencyData = currencyData[selectedCurrency];

//   if (selectedCurrencyData) {
//     convertedCurrencyValue.innerHTML = new Intl.NumberFormat(selectedCurrencyData.locale, {
//       style: "currency",
//       currency: selectedCurrency,
//     }).format(inputCurrencyValue / selectedCurrencyData.rate);
//   }

//   currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   }).format(inputCurrencyValue);
// }

// function changeCurrency() {
//   const currencyName = document.getElementById("currency-name");
//   const currencyImg = document.querySelector(".currency-img");
//   const selectedCurrency = currencySelect.value;
//   const selectedCurrencyData = currencyData[selectedCurrency];

//   if (selectedCurrencyData) {
//     currencyName.innerHTML = selectedCurrencyData.name;
//     currencyImg.src = selectedCurrencyData.img;
//   }

//   convertValue();
// }

// currencySelect.addEventListener("change", changeCurrency);
// convertButton.addEventListener("click", convertValue);

// const convertButton = document.querySelector(".convert-button");
// const currencySelect = document.querySelector(".currency-select");

// function convertValue() {

//   const inputCurrencyValue = document.querySelector(".input-currency").value;
//   const currencyValueToBeConverted = document.querySelector(".currency-value-to-be-converted");
//   const convertedCurrencyValue = document.querySelector(".converted-currency-value");

//   console.log(currencySelect.value)

//   const dollarToday = 5.74
//   const euroToday = 6.19
//   const libraToday = 7.37
//   const bitcoinToday = 464230.41

//   if (currencySelect.value == "USD") {
//     convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD"
//     }).format(inputCurrencyValue / dollarToday)
//   }
//   if (currencySelect.value == "EUR") {
//     convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
//       style: "currency",
//       currency: "EUR"
//     }).format(inputCurrencyValue / euroToday)
//   }

//   if (currencySelect.value == "GBP") {
//     convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
//       style: "currency",
//       currency: "GBP"
//     }).format(inputCurrencyValue / libraToday)
//   }

//   if (currencySelect.value == "BTC") {
//     convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "BTC"
//     }).format(inputCurrencyValue / bitcoinToday)
//   }

//   currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL"
//   }).format(inputCurrencyValue)
// }

// function changeCurrency() {
//   const currencyName = document.getElementById("currency-name")
//   const currencyImg = document.querySelector(".currency-img")

//   if (currencySelect.value == "BRL") {
//     currencyName.innerHTML = "Real (BRL)"
//     currencyImg.src = "./assets/Real.png"
//   }

//   if (currencySelect.value == "USD") {
//     currencyName.innerHTML = "Dólar (USD)"
//     currencyImg.src = "./assets/dolar.png"
//   }

//   if (currencySelect.value == "EUR") {
//     currencyName.innerHTML = "Euro (EUR)"
//     currencyImg.src = "./assets/Euro.png"
//   }

//   if (currencySelect.value == "GBP") {
//     currencyName.innerHTML = "Libra (GBP)"
//     currencyImg.src = "./assets/Libra.png"
//   }

//   if (currencySelect.value == "BTC") {
//     currencyName.innerHTML = "Bitcoin (BTC)"
//     currencyImg.src = "./assets/bitcoin.png"
//   }

//   convertValue()
// }

// currencySelect.addEventListener("change", changeCurrency)
// convertButton.addEventListener("click", convertValue)
