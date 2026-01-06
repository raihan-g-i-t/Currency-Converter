// const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

// data = async () => {
//     let getData = await fetch(base_url);
//     let result = getData.json();
//     console.log(result.usd.bdt);
// }

// data();

const base_url =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const data = async () => {
  const response = await fetch(base_url);
  const result = await response.json();

  const aaveValue = result.usd.aave;
  console.log("AAVE value:", aaveValue);
};


data();
