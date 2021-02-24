var car = {
  Marca: 'Toyota',
  Model:'Fortuner'
};


function getProperty(obj, key) {
  // your code here
    return obj[key];

}

var output = getProperty(car, 'Marca');
console.log(output); // --> 'value'

