// Practicing with objects
let user = {
    name: "Chris",
    age: 22,
    job: "Software Developer",

    introduction() {
        console.log("My name is " + this.name + ', I am ' + this.age + ' years old. I am a ' + this.job + '.');
    }
};

user.introduction();

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

user = users.find(item => item.id == 1);

// alert(user.name); // John

users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

// alert(someUsers.length); // 2

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6