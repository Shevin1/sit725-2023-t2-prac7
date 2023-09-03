let client = require('../dbConnect')
let collection = client.db().collection('Dogs');


function postDog(dog, callback) {
    collection.insertOne(dog, callback);
}


function getAllDogs(callback) {
    collection.find({}).toArray(callback);
}

module.exports = { postDog, getAllDogs }