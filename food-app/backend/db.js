const mongoose = require('mongoose');
const { db_link } = require("./secret/secrets");



const mongoUri = db_link;

const Mongodb = async () => {
  await mongoose.connect(mongoUri, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("---" + err)
    else {
      console.log("connected to mongo");
      const fetched_data = await mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection("foodcategory");
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) console.log(err);
          else {
            global.food_items = data;
            global.foodCategory = catData;



          }

        })

        // if(err) console.log(err);
        // else{
        //   global.food_items = data;


        // }
      })




    }
  });
}

// const Mongodb =async() =>{
//     await mongoose
//   .connect(mongoUri)
//   .then(function (db) {
//     console.log("user db connected");


//   })
//   .catch(function (err) {
//     console.log(err);
//   });
//   const foodCollection = await mongoose.connection.db.collection("food_items");
//   fetched_data.find({}).toArray(function(err,data){
//     if(err)console.log(err);
//     else{

//     }
//   })

// }






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

