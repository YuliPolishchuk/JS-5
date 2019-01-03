var firstContext = new Car('BMV', '2017', 'black', '1', false, 7);
var secContext = new Car('Audi', '2016', 'white', '53', true, 5);
console.log(firstContext);
console.log(secContext);

function Car(brand, year, color, mileAge, ignition, amountPetrol) {
  this.brand = brand;
  this.year = year;
  this.color = color;
  this.mileAge = mileAge;
  this.ignition = ignition;
  this.amountPetrol = amountPetrol;

  this.isIgnition = function() {
    this.ignition = true;
  };
  this.start = function() {
    if (this.ignition) {
      console.log('Машина ' + this.brand + ' цвета - ' + this.color + ' поехала');
    } else {
      console.log('Включите вначале зажигание');
    }
  };
  this.stop = function() {
    if (this.ignition) {
      this.ignition = false;
      console.log('Машинка остановилась');
    } else {
      console.log('Зажигание и так выключено');
    }
  };
  this.isPetrol = function() {
    if (this.amountPetrol > 0) {
      console.log(this.ignition);
    } else {
      console.log('Нужно заправить автомобиль');
    }
  };
  this.toTankUpCar = function() {
    this.amountPetrol = 10;
    console.log('Машинка заправилась');
  };
}
