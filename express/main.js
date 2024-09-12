var express = require("express");
var app = express();
app.use(express.json());
var cors =require("cors");
app.use(cors());

app.get("/", (request, response) => {
  response.json({ message: "Karan" });
});

app.post("/", (request, response) => {
  response.json({ message: "Batman Gopi" });
});
app.post("/login", (request, response) => {
  // let email = request["query"]["email"];
  // let pass = request["query"]["password"];
  let { email, password } = request["query"];

  if (email == "admin@gmail.com" && password == "admin") {
    response.json({ Message: "You have logged in success" });
  } else {
    response.json({ Message: "Credentials failed" });
  }
});

//   response.json({ email: email, password: pass });
// });

app.post("/register", (request, response) => {
  let { name, email, password, address } = request.body;
  if (!name || !email || !password || !address) {
    response.json({ message: "Enter all the details" });
  } else {
    response.json({ message: "Register Successfully" });
  }
});

app.post("/add", (request, response) => {
  let { num1, num2 } = request.body;
  if (!num1 || !num2) {
    response.json({ message: "Enter 2 Values" });
  } else {
    response.json({ value: num1 + num2 });
  }
});

const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
const url = "mongodb+srv://sathishthangavel012:Sathish6412@cluster0.8t52d.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "office";

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

app.get("/listemp",async(req,res)=>{
  await client.connect();
  let db =client.db("office");
  const data =await db.collection("teachers").find({}).toArray();
  res.status(200).json(data);
});


//pathvariable
app.get("/listempbyname/:name",async(req,res)=>{
  await client.connect();
  let {name}=req.params;
  let db =client.db("office");
  let list =await db.collection("teachers").find({"name": name }).toArray();
  
  res.status(200).json(list);
});


app.post("/login1",async(req,res)=>{
  await client.connect();
  let {name,password}=req.body;
  let db =client.db("office");
  let list =await db.collection("teachers").find({"name": name , "password":password}).toArray();
  if(list.length>0){
    res.json({"msg":"done"})
  }else{
    res.status(400).json({"msg":"wrong"})
  }
  res.status(200).json(list);
});

app.get("/filter",async(request,response) =>{
    var filterlist ={}
    await client.connect();
    let{name,mobile_no,address}=request.query;
    let db = client.db("office");
    if (name != undefined && name != ""){
      filterlist["name"]=name;

    }else if(mobile_no !=undefined && mobile_no !=""){
      filterlist["mobile"]=mobile_no;

    }else if(address != undefined && address !=""){
      filterlist["address"]=address;
    }
    let list = await db.collection("teachers").find(filterlist).toArray();
    response.json(list);
  
});

app.delete("/deleteUserByName", async (req, res) => {
  await client.connect();
  let db = client.db("office");
  let { name } = req.query;
  await db.collection("teachers").deleteOne({ name: name });
  res.json({ msg: "user deleted" });
});

app.put("/updatepwd" , async (req,res) => {
  let {name , email} = req.query;
  await client.connect();
  let db = client.db("office");
  await db.collection("teachers").updateOne({name:name},{$set: {email:email}});
  res.json({"msg": "email is updated!!"})
  
});


app.post("/updateeml" , async (req,res) => {
  let {name , email} = req.body;
  await client.connect();
  let db = client.db("office");
  await db.collection("teachers").updateOne({name:name},{$set: {email:email}});
  res.json({"msg": "email is updated!!"})
  
});


app.get("/id" , async (req,res) => {
  let {id} = req.query;
  await client.connect();
  let db = client.db("office");
  let data = await db.collection("teachers").find({"_id":new ObjectId(id)}).toArray();
  res.json(data)
  
});



app.listen(8080);

