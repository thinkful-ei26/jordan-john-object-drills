// Modify the updateObject function (which takes a single argument (obj)) so that it adds the following key/value pairs to obj and returns it:

// foo => 'foo'
// bar => 'bar'
// bizz => 'bizz'
// bang => 'bang'


function updateObject(obj) {

const newObj = {
   foo: 'foo',
   bar: 'bar',
   bizz: 'bizz',
   bang: 'bang',
    }

return Object.assign(obj, newObj);

}

console.log(updateObject());


