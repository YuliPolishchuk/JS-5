var contCity = new City('Seul', 1000, 'South Korea');
console.log(contCity);
console.log(contCity.getPopulation());
console.log(contCity.getCityName());
console.log(contCity.addCitizen());

function City(name, population, country) {
  this.name = name,
  this.population = population,
  this.country = country,
  this.getPopulation = function() {
    return this.population;
  };
  this.getCityName = function() {
    return this.name;
  };
  this.addCitizen = function() {
    return ++this.population;
  };
}

