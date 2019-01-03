var context  = {
  name: 'name',
  number: 2
};

console.log(getName());
console.log(getName.call(context));

function getName() {
  return this.context;
}
