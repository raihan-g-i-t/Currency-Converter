const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const selects = document.querySelectorAll(".select-container select");
const fromSelect = document.querySelector('.select-container select[name="from"]');
const btn = document.querySelector("form button");
const fromCode = document.querySelector('.select-container select[name="from"]');
const toCode = document.querySelector('.select-container select[name="to"]');

// console.log(fromSelect);
// console.log(fromImg.src);
// console.log(selects);

// let amount = document.querySelector("#amount");
// console.log(amount);

// for (code in countryList){
//   console.log(code, countryList[code]);
// }

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
  
  const URL = `${base_url}/${fromCode.value.toLowerCase()}.json`;

  let toCurrCode = toCode.value.toLowerCase();
  console.log(toCurrCode);
  
  const response = await fetch(URL);
  const data = await response.json();
  const toCurrencyVal = data.usd[toCurrCode];

  console.log(toCurrencyVal);


});



// const data = async () => {
//   const response = await fetch(base_url);
//   const result = await response.json();

//   const aaveValue = result.usd.aave;
//   console.log("AAVE value:", aaveValue);
// };


// data();

