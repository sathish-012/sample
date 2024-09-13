var express = require("express");
var app = express();
app.use(express.json());

const { MongoClient, ObjectId } = require("mongodb");
var cors = require("cors");
app.use(cors());

const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";
const client = new MongoClient(url);

const dbName = "jobportal";

app.use((req,res,next)=>{
  console.log("im middleware");
  let {token}=req.headers;
  if(token ==""||token == undefined){
    res.json({"msg":"send token"})
  }else{
    jwt.verify(token,'SECRET');
    next();}
  
});


app.post("/create_jobs", async (req, res) => {
  let body = req.body;
  let data = {
    name: body["name"],
    company_name: body["company_name"],
    requirements: body["requirements"],
  };
  await client.connect();
  let db = client.db("office");

  await db.collection("jobportal").insertOne(data);
  res.json({ msg: "Successfully created a job" });
});
app.get("/api/list_jobs")
app.get("/list_jobs", async (req, res) => {
  await client.connect();
  let db = client.db("office");
  let data = await db.collection("jobportal").find({}).toArray();
  res.json(data);
});
var jwt=require("jsonwebtoken")
app.post("/login",async(req,res)=>{
  await client.connect();
  let {name,password}=req.body;
  let db =client.db("office");
  let list =await db.collection("teachers").find({"name": name , "password":password}).toArray();
  if(list.length>0){
    var token =jwt.sign({name:list[0]["name"]},"SECRET");
    res.json({"msg":"done","token":token});
  }else{
    res.status(400).json({"msg":"wrong"});
  }
  res.status(200).json(list);
});

app.post("/createTeacher", async (req, res) => {
  let body = req.body;
  let data = {
    name: body["name"],
    email: body["email"],
    password: body["password"],
    address: body["address"],
    mobile_no: body["mobile_no"],
  };
  await client.connect();
  let db = client.db("office");
  await db.collection("teachers").insertOne(data);
  res.status(200).json({ message: "Created New Teacher Record!!" });
}); 
// app.put("/update_job", async (req, res) => {
//   let { name, requirements } = req.body;
//   await client.connect();
//   let db = client.db("office");
//   await db
//     .collection("jobportal")
//     .updateOne({ name: name }, { $set: { requirements: requirements } });

//   res.json({ msg: "Updated the requirements" });
// });
app.get("/api/update_job")
app.put("/update_job", async (req, res) => {
  let { id, name, company, requirements } = req.body;
  await client.connect();
  let db = client.db("office");
  await db.collection("jobportal").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: { requirements: requirements, name: name, company_name: company },
    }
  );

  res.json({ msg: "Updated the requirements" });
});

app.delete("/delete_job", async (req, res) => {
  let { id } = req.query;
  await client.connect();
  let db = client.db("office");
  await db.collection("jobportal").deleteOne({ _id: new ObjectId(id) });

  res.json({ msg: "Deleted the Job" });
});


app.listen(8080);
