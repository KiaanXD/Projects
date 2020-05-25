export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(user)
}

export function printAge(age) {
  console.log(`User's age is ${user.age}`)
}
const user1 = new User("bob", 19);
const user2 = new User("skye", 18);
console.log(user1, user2.name)
