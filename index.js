//------------------------Addition----------------------------//
var addition = function add(num1,num2){
 var result = num1 + num2;
 return result;
};
console.log(addition(15,20));


//------------------------Subtraction----------------------------//
var subtraction = function sub(num1,num2){
  var result = num1 - num2;
  return result;
 };
console.log(subtraction(50,20));

//------------------------Multiplication----------------------------//
var multiplication = function mul(num1,num2){
  var result = num1 * num2;
  return result;
 };
console.log(multiplication(5,3));

//------------------------Division----------------------------//
var division = function div(num1,num2){
  var result = num1 / num2;
  return result;
 };
console.log(division(20,4));

//------------------------Leap_Year----------------------------//
var checkingLeapYear = function leapYear(year){
  if(year%4 == 0){
    return "True";
  }else{
    return "False";
  }
}
console.log(checkingLeapYear(1991));

//------------------------Even_or_Odd----------------------------//
var checkingEvenNumber = function evenOrOdd(num){
  if(num%2 == 0){
    return "True"
  }else{
    return "False";
  }
};
console.log(checkingEvenNumber(1));

//------------------------Hour_to_Minute----------------------------//
var hourToMinute = function hourToMinuteConverter(hour){
  var convert = hour * 60 + " minutes";
  return convert;
};
console.log(hourToMinute(3));



