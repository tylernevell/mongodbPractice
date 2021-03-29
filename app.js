const mongoose = require("mongoose");

const uri = "mongodb+srv://n3vdawg:" + process.env.MONGO_PASSWORD + "@fruitcluster.3zp30.mongodb.net/fruitsDB?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
   name: {
       type: String,
       required: [true, "No name specified. Name required."]
   },
   rating: {
       type: Number,
       min: 1,
       max: 10,
   },
   review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Not bad."
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
   name: "John",
   age: 37
});

//person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "Pretty freaking good."
// });
//
// const banana = new Fruit({
//     name: "banana",
//     rating: 3,
//     review: "Probably allergic to this."
// });
//
// Fruit.insertMany([kiwi, banana], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Success");
//
//         Fruit.find((err, fruits) => {
//             if (err) {
//                 console.log(err);
//             } else {
//
//                 mongoose.connection.close();
//
//                 fruits.forEach((fruit) => {
//                     console.log(fruit.name);
//                 });
//             }
//         });
//     }
// });

Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
    }
});

Fruit.updateOne({_id: ""}, {name: ""}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated document.");
    }
});

Fruit.deleteOne({_id: ""}, {name: ""}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted document.");
    }
});

Person.deleteMany({name: "John"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted all documents.");
    }
});
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//
// const dbName = "fruitsDB";
//
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//
//         const db = client.db(dbName);
//
//         // use the fruits collection
//         const col = db.collection("fruits");
//
//         // insert some documents
//         const p = await col.insertMany([
//             {
//                 name : "Apple",
//                 score : 8,
//                 review : "Great fruit",
//             },
//             {
//                 name : "Orange",
//                 score : 6,
//                 review : "Kind of sour",
//             },
//             {
//                 name : "Banana",
//                 score : 2,
//                 review : "I think I'm allergic to this stuff",
//             }
//         ]);
//
//         const myDoc =  await col.findOne();
//         console.log(myDoc);
//
//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);

