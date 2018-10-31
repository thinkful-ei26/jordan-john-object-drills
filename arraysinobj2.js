// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Store these objects in an array.
// Iterate over the array and use console.log to show each person's job title and name.

const owner = {
    name: "Mark",
    jobTitle: "Professional Skier"
};

const person2 = {
    name: "Elizabeth",
    jobTitle: "Nurse",
    boss: owner
};

const person3 = {
    name: "Rich",
    jobTitle: "Teacher",
    boss: person2
};

const person4 = {
    name: "Jordan",
    jobTitle: "Student",
    boss: person3
};

const peopleArray = [owner, person2, person3, person4];

function arrIterator() {

    for (let i in peopleArray) {
        // console.log(peopleArray[i])
        console.log(`${jobTitle} ${name} reports to ${boss}.`)

        if (peopleArray[i] !== peopleArray[i]) {
            console.log(`${jobTitle} ${name} doesn't report to anybody.`)
        }
    };

} 

console.log(arrIterator());

// Expand on the previous example by adding a boss property to everyone except the owner of the company.
// Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". For example: Junior Engineer Bob reports to Fred..
// What gets printed out for the owner?
// Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody." - for example, Founder John doesn't report to anybody.