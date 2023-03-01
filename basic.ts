// ---------------------------------------------
// Primitives
// ---------------------------------------------

// number
let age: number;
age = 12;

// string
let userName: string;
userName = "Jess";

// boolean
let isInstructor: boolean;
isInstructor = true;

// ---------------------------------------------
// More complex types
// ---------------------------------------------

// array
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

const numArray1: number[] = [1, 2, 3, 4, 5];
const numArray2: Array<number> = [1, 2, 3, 4, 5];
const numArray3: Array<number | string> = [1, 2, 3, "a", 5];
const numArray4: Array<any> = [1, 2, 3, "a", 5];

// object
let persion: {
  name: string;
  age: number;
};

persion = {
  name: "Jazz",
  age: 27,
};

// ---------------------------------------------
// Union types
// ---------------------------------------------

let text: string | number = "test 123 123 123";
text = 123456789;

// ---------------------------------------------
// Type Aliases
// ---------------------------------------------

type Dog = {
  name: string;
  age: number;
};

let dog: Dog;
let doog: Dog[];

// ---------------------------------------------
// Function & types
// ---------------------------------------------

function add(a: number, b: number) {
  return a + b;
}

function printLog(value: any): void {
  console.log(value);
}

// ---------------------------------------------
// Generics
// ---------------------------------------------

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray1 = [1, 2, 3];
const updateArray1 = insertAtBeginning(demoArray1, -1); // type = number

const demoArray2 = ["a", "b", "c"];
const updateArray2 = insertAtBeginning(demoArray2, "e"); // type = string

// ---------------------------------------------
// Class
// ---------------------------------------------

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(first: string, last: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

// 可以簡寫成這樣
// class Student {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public age: number,
//     private courses: string[]
//   ) {}
// }

const student = new Student("Jess", "Chan", 27, ["Angular"]);
student.enrol("React");

// ---------------------------------------------
// Interface
// ---------------------------------------------

interface Animal {
  name: string;
  weight: number;
  survive: boolean;
  run?(): void; // 可以加上 ? 變成可選方法
  swim?(): void;
}

class Cat implements Animal {
  constructor(
    public name: string,
    public survive: boolean,
    public weight: number
  ) {}

  run(): void {
    console.log(this.name + ".run");
  }
}

class Fish implements Animal {
  constructor(
    public name: string,
    public survive: boolean,
    public weight: number
  ) {}
  swim(): void {
    console.log(this.name + ".swim");
  }
}

let catA = new Cat("Jess", true, 20);
catA.run();

let fishA = new Fish("Jack", false, 10);
fishA.swim();

// ---------------------------------------------
// Loop
// ---------------------------------------------

function sum(x: number, y: number) {
  return x + y;
}

let total = 0;
let numArray5 = [1, 2, 3, 4, 5];

numArray5.forEach((x) => {
  total = sum(total, x);
});

console.log(total);
