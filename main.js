const card = document.querySelector('.card');




fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => data.map((countries) => {

    const box = document.createElement('div');
    box.classList.add('box');
    card.appendChild(box);

    const img = document.createElement('img');
    img.src = `${countries.flags.png}`
    img.alt = `"${countries.flags.alt}"`

    box.appendChild(img)



    const name = document.createElement('h2');

    name.textContent = countries.name.common;

    box.appendChild(name)


    const capital = document.createElement('h3');
    capital.textContent = `Capital: ${countries.capital}`;
    box.appendChild(capital);


    const population = document.createElement('h4');

    population.textContent = `Papulation: ${countries.population}`;

    box.appendChild(population);



      const populationNum = document.createElement(`h5`);

    const populationString = String(countries.population);

    if (populationString.length === 10) {
      populationNum.textContent = `${populationString.slice(0, 1)}B`;
      box.appendChild(populationNum)
    }
    else
    if (populationString.length === 9) {
      populationNum.textContent = `${populationString.slice(0, 3)}M`;
      box.appendChild(populationNum)
    }
    else  if (populationString.length === 8) {
      populationNum.textContent = `${populationString.slice(0, 2)}M`;
      box.appendChild(populationNum)
    }
    else  if (populationString.length === 7) {
      populationNum.textContent = `${populationString.slice(0, 1)}M`;
      box.appendChild(populationNum)
    }
    else  if (populationString.length === 6) {
      populationNum.textContent = `${populationString.slice(0, 3)}K`;
      box.appendChild(populationNum)
    }
    else   if (populationString.length === 5) {
      populationNum.textContent = `${populationString.slice(0, 2)}K`;
      box.appendChild(populationNum)
    }
    else  if (populationString.length === 4) {
      populationNum.textContent = `${populationString.slice(0, 1)}M`;
      box.appendChild(populationNum)
    }



    const maps = document.createElement('a');
    maps.href = `${countries.maps.googleMaps}`;
    maps.textContent = 'GPS';
    maps.target = '_blank';
    maps.style.color = 'black';
    maps.style.textDecoration = 'none';

    box.appendChild(maps);


}))
