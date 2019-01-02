var context  = {
  name : 'name',
  number : 2
};

console.log(getName());

function getName() {
  return this.context;
}
