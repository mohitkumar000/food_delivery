const mongoose = require('mongoose');
const {db_link} =require("./secret/secrets");

console.log(db_link)

const mongoUri = db_link;
const Mongodb =async() =>{
    await mongoose
  .connect(mongoUri)
  .then(function (db) {
    console.log("user db connected");
    
    
  })
  .catch(function (err) {
    console.log(err);
  });
}





module.exports = Mongodb;



// const Mongodb =async() =>{
//     await mongoose
//   .connect(mongoUri)
//   .then(function (db) {
//     console.log("user db connected");
//     db.collection('food_items').find({}).toArray().then(result => console.log(result));
    
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// }





module.exports = Mongodb;

