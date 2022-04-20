
// takes in ascii code number returns character
function getChar(c){
    return String.fromCharCode(c)
  }


//  conditional operator focused exercise
  function hoopCount (n) {
    return n > 9 ? "Great, now move on to tricks" : "Keep at it until you get it"
 }


// returns letter grade for passed integer test score average
 function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3
    if(average >= 90){
      return 'A'
    }
    else if(average >= 80){
      return 'B'
    }
    else if(average >= 70){
      return 'C'
    }
    else if(average >= 60){
      return 'D'
    }
    return 'F'
  }


// sums the array
  var summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++){
      total += i;
    }
    return total;
}

// generates a range from min to max(inclusive) with a step
function generateRange(min, max, step){
    let arr = [];
    for (let i=min; i<=max; i += step) {
      arr.push(i);
    }
    return arr;
  }



  function between(a, b) {
    let arr = []
    for(let i = a; i <= b; i++){
      arr.push(i)
    }
    return arr
  }



  function divisibleBy(numbers, divisor){
    return numbers.filter(x => !(x % divisor))
}


// gives the lowest unused ID starting from 0 when given an array of integers.
function nextId(ids){
    let value = 0
  //   for(let i = 0; i < ids.length; i++){
  //       if(!(i in ids)){
  //         value = i
  //         break;
  //       }
    let i = 0
    while(i < ids.length){
      if(ids.indexOf(i) != -1){
        i++
        if (ids.length === i){
          value = i
        }
        }
      else{
        value = i
        i += ids.length
      }
      
    }
        
    
    return value
  }