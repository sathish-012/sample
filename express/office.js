const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://sathishthangavel012:Sathish6412@cluster0.8t52d.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = "office";

async function insertData(){
    let empdata={
        name:"hari",
        
        salary:15000000,
        phn:1234567890,
        email:"ascsd@gmail.com"
    }
    await client.connect();
    const db =client.db(dbName);
     const collection = await db.collection('employee');
       await collection.insertOne(empdata);
       console.log("done");
    
}
insertData();

