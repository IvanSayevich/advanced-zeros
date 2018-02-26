module.exports = function getZerosCount(number, base) {
    let num = number;
    let x = base;
    let i = 2;
    let basePrimePowers = [];
    let result = 0;
    let arr = [];
    
    function sumPrimePowers(baseNumber,i){
      if (Math.pow(baseNumber,i) <= num){
        result += Math.floor(num/Math.pow(baseNumber,i));
        i++;
        sumPrimePowers(baseNumber,i);
      } else {
        let exponent = basePrimePowers.filter(element => element === baseNumber);
        console.log(exponent.length);
        result = Math.floor(result / exponent.length);
        arr.push(result);
        result = 0;
        i=2;
      }
    }

    while(x !== 1){
        if (x%i == 0) {
          basePrimePowers.push(i);
          x /= i; 
          console.log(basePrimePowers, x, i);
        } else {
          i++;
          console.log(i);
        }
    }
    
    basePrimePowers.forEach(element=>sumPrimePowers(element,1));
    arr.sort((a, b) => a - b);
    console.log(arr);
  
    return arr[0];
}

