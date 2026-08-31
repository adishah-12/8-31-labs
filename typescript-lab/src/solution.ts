// exercise 1: take each value from nums, double it and store in new array.

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const res = nums.map((num) => {
    return num * 2;
});

console.log(res);

// exercise 2: pull out the first two toppings from the array and log them.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);

// exercise 3: destructure the car model and log them.

const car = {
  make: 'Audi',
  model: 'q5',
};

const { make, model } = car;
console.log(make);
console.log(model);

// exercise 4: duplicate the array using the spread operator and log it.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

const controversialPizzaToppings = [...pizzaToppings2]; 
console.log(controversialPizzaToppings);

// exercise 5:　Applying spread operator to change model property.

const car2 = {
  make: 'Audi',
  model: 'q5',
};

const myCar = { ...car2 };
myCar.model = 'q7';

console.log("Original: ", car2)
console.log("Updated: ", myCar);

// exercise 6: Dynamically assign k/v pair to an object

const propertyName = "username";

const userProfile = {
  [propertyName]: 'john-doe',
};

console.log(userProfile);

// exercise 8: default parameters in function

function ex8 (textNoun = 'cat', textAdj = 'white') {
  return "The " + textNoun + " is " + textAdj + ".";
}

console.log(ex8());
console.log(ex8('dog', 'fat'));

// exercise 9: ternary operator

let pizza = 'tasty';

let tern = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(tern);

// exercise 10: boolean gates

const localLangConfig = 'null';  // Change to 'es', 'fr', etc., or keep it null

const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG);

// exercise 11: optional chaining

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.name;
console.log(cat);
