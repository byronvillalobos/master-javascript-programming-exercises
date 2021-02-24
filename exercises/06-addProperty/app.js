var myObj  = {
  Marca: 'Toyota',

};


function addProperty(obj, key) {
  // your code here
    obj[key] = 'Fortuner'
    return obj
}


addProperty(myObj, 'Modelo');
console.log(myObj.myProperty); // --> true
console.log(myObj); // --> true