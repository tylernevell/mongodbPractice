const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://n3vdawg:" + process.env.MONGO_PASSWORD + "@fruitcluster.3zp30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const dbName = "fruitsDB";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);

        // use the fruits collection
        const col = db.collection("fruits");

        // insert some documents
        const p = await col.insertMany([
            {
                name : "Apple",
                score : 8,
                review : "Great fruit",
            },
            {
                name : "Orange",
                score : 6,
                review : "Kind of sour",
            },
            {
                name : "Banana",
                score : 2,
                review : "I think I'm allergic to this stuff",
            }
        ]);

        const myDoc =  await col.findOne();
        console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);

