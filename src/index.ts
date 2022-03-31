class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    // constructor는 class로 object를 생성할때 자동적으로 생성됨
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const jw = new Human('JW', 20, 'male');

// ?는 옵션이라는 의미 (항상 name, age가 필요하지만 gender는 필요하지 않구나하고 알 수 있다(강력한 기능))
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}!!!`;
};

// sayHi에 마우스를 올리면 name: any, age: any, gender: any라는 것을 볼 수 있다.
console.log(sayHi(jw));

export {};
