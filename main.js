const countryName = "Spain";

// async function getData(){
//     const url = ``
//     const response = await fetch(url)
//     console.log(response.name)
// }

// getData()

const exampleArray = [
  {
    yourFirstName: "John",
    yourLastName: "Doe",
    yourAge: 21,
    isCitizen: true,
  },
  {
    yourFirstName: "Mary",
    yourLastName: "Jane",
    yourAge: 29,
    isCitizen: false,
  },
  {
    yourFirstName: "Karl",
    yourLastName: "Marxx",
    yourAge: 43,
    isCitizen: false,
  },
];

// for(let example in exampleArray){
// console.log(example)
// }

// console.log(exampleArray)

fetch("https://restcountries.com/v3.1/name/france")
  .then((response) => {
    return response.json();
  })
  .then((countryData) => {
    const country = countryData[0];
    const countryName = country.name.common;
    const capital = country.capital[0];

    console.log(country);
    console.log(countryName);
    console.log(`The capital of ${countryName} is ${capital}`);

    const containerEl = document.querySelector("#container-el");

    containerEl.innerHTML = `
    <div>
    <h1>Render Data</h1>
    <p>The capital of <strong>${countryName} is ${capital}</strong> </p>
    </div>
    `;
  });

async function getCountryData() {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/brazil`);
    const countryData = await response.json();

    const country = countryData[0];
    const countryName = country.name.common;
    const capital = country.capital[0];

    console.log(
      `The country name is ${countryName} and the capital is ${capital}`
    );
  } catch (error) {
    console.error("Error fetching or processing data: ", error);
  }
}
getCountryData();
