// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

const person1 = {
    name: "Mark",
    jobTitle: "Professional Skier"
};

const person2 = {
    name: "Elizabeth",
    jobTitle: "Nurse"
};

const person3 = {
    name: "Rich",
    jobTitle: "Teacher"
};

const person4 = {
    name: "Jordan",
    jobTitle: "Student"
};

const peopleArray = [person1, person2, person3, person4];

function arrIterator() {

    for (let i in peopleArray) {
        console.log(peopleArray[i])
    };

} 

console.log(peopleArray);