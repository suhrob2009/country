class Countries {
    fOpen = async (url) => {
        let response = await fetch(url) 
      if(response.ok) return response.json();
      else throw new Error(`xatolik ${url}`)
    }
    getCountryAll = () => this.fOpen('https://restcountries.com/v3.1/all')
}

const countryData = new Countries();




function renderCountry(){
    countryData.getCountryAll().then((data,i) => {
        console.log(data)
        const countryCards = document.querySelector('.country-cards')
        data.forEach(item => {
            const countryCard = document.createElement('a')
            countryCard.classList.add('country-card')
            countryCard.setAttribute('href','country-inner.html')
            countryCard.innerHTML = `
            <img src="${item.flags.png}" alt="Country germany" class="country-card__img">
                <div class="country-card__body">
                  <h3 class="country-title">${item.name.common}</h3>
                  <p class="country-text"><b>Population:</b> ${item.population}</p>
                  <p class="country-text"><b>Region:</b> ${item.region}</p>
                  <p class="country-text"><b>Capital:</b> ${item.capital}</p>
                </div>
            `
            countryCards.append(countryCard)
        });

    })
}
renderCountry()

