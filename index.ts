const name = 'Jongwoo',
  age = 24,
  gender = 'male';

// ?는 옵션이라는 의미 (항상 name, age가 필요하지만 gender는 필요하지 않구나하고 알 수 있다(강력한 기능))
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
};

// sayHi에 마우스를 올리면 name: any, age: any, gender: any라는 것을 볼 수 있다.
sayHi(name, age, gender);

export {};
