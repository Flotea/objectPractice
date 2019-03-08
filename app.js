/*
Objects in Javascript can be compared to objects in real life. Objects has a collection of properties associated with it (known as key-value pairs) and are basically the same as ordinary variables.
*/ 


/*
1. Declare a variable named `dog` and create the following properties (key-value pairs) to the object:
   
    - add a key named `name` and set it to a string value of your choice
    - add a key named `age` and set it to a number value of your choice
    - add a key named `vegeterian` and set it to a boolean value of your choice
    - add a key named `color` and set it to an array with two string elements in it
    - add a key named `speak` which will be a method that return a string "woof!"; 
 */ 
var dog = {
            name:"Baby",
            age: 4,
            vegeterian: false,
            color: ["Grey", "White", "Orange"],
            speak: function(){
              return "woof!";
            }
          } 

 /*
 
 2. Console.log the following phrase by accessing the appropriate object properties that you created in #1:
 
 "My dog `name` is `age` year old likes to `speak`."
 */
console.log("My dog "+dog.name+" is "+dog.age+" years old and likes to "+ dog.speak()+ ".");
  /*
    3.  Declare a variable named `kicks` and assign it to an EMPTY object.
  */
 var kicks = {};
 
  /*
    4.  Add the following properties to this object. Each property declaration expression will be on its own line and
     ending with semicolons (`;`). 
              - add a property named `brand` and set it to your favorite sneaker brand
              - add a property named `color` and set it the value "red"
              - add a property named `size` and set it to your shoe size
              - add a property named `buy` and set it to a method that will return a string "Hell Yeah!"
*/
kicks.brand = "Dr.Scholls"
kicks.color = "red"
kicks.size =12;
kicks.buy= function(){
  return "Hell Yeah!";
};
/*
    5.  Complete the following:
            - Console.log the object.
            - Invoke the method set for the property 'buy'.
*/
console.log(kicks.buy());

  /* 
    6. Declare a variable named `plainBox` and set its value to be an EMPTY object.
     Next, you will add three properties to this object. 
              - add a property named `color` and set it the name of any color.
              - add a property named `size` and set it to a number value between `0` and `20`.
              - add a property named `contents` and set it to be an empty array.
  */
 var plainBox ={};
 plainBox.color="Green";
 plainBox.size= 10;
 plainBox.contents=[];

  /* 7. Add 3 elements to your contents property in the plainBox object. */
  plainBox.contents[0]="sketchbook";
  plainBox.contents[1]="lead pencil";
  plainBox.contents[2]="eraser";
  console.log(plainBox.contents);
  /*
     8. Declare a variable named `stockCar` and create the following properties (key-value pairs) to the object:
              - add a key named `model` and set its value to the name of an American car manufacturer.
              - add a key named `year` and set it to be a value above 2000 but below 2016.
              - add a key named `automaticTransmission` and give it a Boolean value of your choice.
              - add a key named `driver` and set it to be `null`.
              - add a key named `passengers` and set it to be an empty array.
  */
 var stockCar ={
                model:"Ford",
                year: 2002,
                automaticTransmission: false,
                driver: null,
                passenger:[]
               }
  
  
  /* 
  9. Add 2 elements to the passengers property in the stockCar object.
 */
stockCar.passenger[0]="Rachel";
stockCar.passenger[1]="Lorelei";

  //building & defining key pairs inside of the object, use a colon (:), inside of the { }
  //assigning & modifying require equal signs (=)