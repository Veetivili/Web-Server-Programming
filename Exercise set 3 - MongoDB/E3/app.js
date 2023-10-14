require("dotenv").config();

const MongoClient = require('mongodb').MongoClient;

const password = process.env.MONGO_DB_PASSWORD;
const uri = `mongodb+srv://ab0197:${password}@cluster0.gafxzqb.mongodb.net/?retryWrites=true&w=majority`;

const firstname = process.argv[2];
const lastname = process.argv[3];

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
  if(err) throw err;
  
  const db = client.db("WebServerProgramming");
  const collection = db.collection("People");
  
  if(firstname && lastname) {
    collection.insertOne({ firstname, lastname }, function(err, res) {
      console.log(`${firstname} ${lastname} added to the collection.`);
      client.close();
    });
  } else {
    collection.find({}).toArray(function(err, res) {
      console.log(res);
      client.close();
    });
  }
});