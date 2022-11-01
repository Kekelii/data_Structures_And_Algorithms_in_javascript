//types accepted in you Array DataStructure
type items =string|number

//our Array
let Collection:items[]=[];

//adding items to our array
Collection.push('jane');
Collection.push('Doe');

Collection.push(3)

//properties and methods on the Array object in javascript

//number of items in our collection Array
let numberOfItems= Collection.length

//accessing items in our collection array since the index is 0 based
//the first element is indexed 0

//accessing the first element
let firstElement = Collection[0]

console.log({numberOfItems,firstElement})