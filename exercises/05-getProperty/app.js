var car = {
  Marca: 'Toyota',
  Model:'Fortuner'
};


function getProperty(obj, key) {
  // your code here
    return obj[key];

}

var output = getProperty(car, 'Model');
console.log(output); // --> 'value'

