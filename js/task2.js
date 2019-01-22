var context = {
  number: 2
};

console.log(getDoubled.call(context));
console.log(getDoubledTrippled.call(context));

function getDoubled() {
  return this.number * 2;
}
function getDoubledTrippled() {
  return getDoubled.call(this) * 3;
}

