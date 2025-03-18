const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const selectCurrency = document.querySelector(".currency-select-up");

function convertValue() {

  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToBeConverted = document.querySelector(".currency-value-to-be-converted");
  const convertedCurrencyValue = document.querySelector(".converted-currency-value");

  console.log(currencySelect.value)
  const dollarToday = 5.74
  const euroToday = 6.19
  const libraToday = 7.37
  const bitcoinToday = 464230.41

  if (currencySelect.value == "USD") {
    convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dollarToday)
  }
  if (currencySelect.value == "EUR") {
    convertedCurrencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }

  if (currencySelect.value == "GBP") {
    convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
  }

  if (currencySelect.value == "BTC") {
    convertedCurrencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
  }

  if (currencySelect.value == "BRL") {
    convertedCurrencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
  }

  if (selectCurrency.value == "BLR") {
    currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrencyValue)
  }

  if (selectCurrency.value == "USD") {
    currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue)
  }

  if (selectCurrency.value == "EUR") {
    currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue)
  }

  if (selectCurrency.value == "GBP") {
    currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue)
  }

  if (selectCurrency.value == "BTC") {
    currencyValueToBeConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue)
  }

}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.querySelector(".currency-img")

  if (currencySelect.value == "USD") {
    currencyName.innerHTML = "Dólar (USD)"
    currencyImg.src = "./assets/dolar.png"
  }

  if (currencySelect.value == "EUR") {
    currencyName.innerHTML = "Euro (EUR)"
    currencyImg.src = "./assets/Euro.png"
  }

  if (currencySelect.value == "BRL") {
    currencyName.innerHTML = "Real (BRL)"
    currencyImg.src = "./assets/Real.png"
  }

  if (currencySelect.value == "GBP") {
    currencyName.innerHTML = "Libra (GBP)"
    currencyImg.src = "./assets/Libra.png"
  }

  if (currencySelect.value == "BTC") {
    currencyName.innerHTML = "Bitcoin (BTC)"
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValue()
}

function changeCurrencyUp() {
  const nameCurrency = document.getElementById("name-currency")
  const currencyImgUp = document.querySelector(".currency-img-up")

  if (selectCurrency.value == "USD") {
    nameCurrency.innerHTML = "Dólar (USD)"
    currencyImgUp.src = "./assets/dolar.png"
  }
  if (selectCurrency.value == "EUR") {
    nameCurrency.innerHTML = "Euro (EUR)"
    currencyImgUp.src = "./assets/Euro.png"
  }
  if (selectCurrency.value == "BRL") {
    nameCurrency.innerHTML = "Real (BRL)"
    currencyImgUp.src = "./assets/Real.png"
  }
  if (selectCurrency.value == "GBP") {
    nameCurrency.innerHTML = "Libra (GBP)"
    currencyImgUp.src = "./assets/Libra.png"
  }
  if (selectCurrency.value == "BTC") {
    nameCurrency.innerHTML = "Bitcoin (BTC)"
    currencyImgUp.src = "./assets/bitcoin.png"
  }
  convertValue()
}

selectCurrency.addEventListener("change", changeCurrencyUp)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)
