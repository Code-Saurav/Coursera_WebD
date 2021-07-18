// //Object create
// var company = new Object();

// company.name= "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("Company Ceo name is " + company.ceo.firstname);

// console.log(company["name"]);
// company["Strock of company"] = 110;
// console.log("Stock price is"+ company["Strock of company"]);


// Pass By reference 

// var a = 7;
// var b = a;

// console.log("a: " + a);
// console.log("b: "+ b);


// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


// Pass By Value

// var a = { x : 7};
// var b = a;
// console.log(a);
// console.log(b);


// b.x = 5;
// console.log( "afterf b.x update:");
// console.log(a);
// console.log(b);

// function changePrimitive( primValue){
//   console.log( "in changePrimitieve...");
//   console.log("before");
//   console.log(primValue);

//   primValue = 5;
//   console.log("after:");
//   console.log(primValue);

// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:");
// console.log(value);


// function changeObject(objValue){
//   console.log("in changeObject ...");
//   console.log("before");
//   console.log(objValue);

//   objValue.x = 5;
//   console.log("after:");
//   console.log(objValue);

// }

// value = {x: 7};
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value)


// function test(){
//   console.log(this);
//   this.myName = "Yaakov";
// }

// test();
// console.log(window.myName);


// function Circle (radius){
//   console.log();
//   this.radius = radius;

//   Circle.prototype.getArea = 
//     function(){
//       return Math.PI * Math.pow(this.radius, 2);
//     };
// }

// var myCircle = new Circle(10);
// console.log(myCircle);

// var literalCircle = {
//   radius = 10,

//   getArea: function(){
//     console.log(this);
//     return Math.Pi * Math.pow( this.radius, 2);
//   }
// };

// literalCircle.getArea();

function makeMultiplier (multiplier){

  function b(){
    console.log("Multiplier is : " + multiplier);
  }
  b();

  return(
    function (x){
      return multiplier * x ;
    }
  );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));  // function (x) does not get to execute until it comes here

