
// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
// Loop over the object using for ... in
// Use console.log to show each property name and its associated value.

const newObj = {

    foo: "apple",
    bar: "banana",
    fum: "pear",
    quux: "orange",
    spam: "plum",

};

function objIterator() {

    for (let i in newObj) {
        console.log(newObj[i])
    }

};

console.log(newObj);