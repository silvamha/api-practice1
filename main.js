const countryName = 'Spain'

async function getData(){
    const url = `https://restcountries.com/v3.1/capital/${countryName}`
    const response = await fetch(url)
    console.log(response.name)
}

getData()