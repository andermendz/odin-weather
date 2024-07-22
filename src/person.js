import { createActivity } from "./activity";

// PROJECT OBJECT DECLARED
class person {
  constructor(name, age, tasks) {
    this.name = name;
    this.age = age;
  
  }

  sayHello() {
    console.log("hello, my name is " + this.name);
  }
}

