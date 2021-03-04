let arr = {
    Marca: 'Toyota',
    Modelo: 'Fortuner'

};
function removeProperty(arr, index) {
  // your code here
arr.splice(index, 1);

}


removeProperty(arr.Modelo);
console.log(arr); 

