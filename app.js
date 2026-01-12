const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const selects = document.querySelectorAll(".select-container select");
const btn = document.querySelector("form button");
const fromCode = document.querySelector('.select-container select[name="from"]');
const toCode = document.querySelector('.select-container select[name="to"]');
const msg = document.querySelector(".msg");

for (let select of selects){
  for(curr in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = curr;
    newOption.value = curr;
    select.append(newOption);
    if(curr === "USD" && select.name === "from"){
      newOption.selected = "selected"
    }else if(curr === "BDT" && select.name === "to"){
      newOption.selected = "selected"
    }
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  })
}

let updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  if(amountValue === "" || amountValue < 1){
    amountValue = 1;
    amount.value = "1";
  }
  const fromCurrCode = fromCode.value.toLowerCase()
  const toCurrCode = toCode.value.toLowerCase();
  
  const URL = `${base_url}/${fromCurrCode}.json`;
  
  const response = await fetch(URL);
  const data = await response.json();
  const toCurrencyVal = data[fromCurrCode][toCurrCode];

  const convertedAmount = amountValue * toCurrencyVal;
  msg.innerText = `${amountValue} ${fromCurrCode.toUpperCase()} = ${convertedAmount} ${toCurrCode.toUpperCase()}`;

});


