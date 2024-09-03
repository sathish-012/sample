var express =require("express");
var app = express();
app.use(express.json());


app.get("/myname",(req,res)=>{
    res.json({"msg":"sathish"});
})
app.post("/myname",(req,res)=>{
  res.json({"age":"56"});
})
app.post("/login",(req,res)=>{
  //let email=req['query']['email'];
  //let pwd=req['query'] ['password'];
  let {email,pwd}=req['query'];
  console.log(email,pwd);
  if (email == 'admin@gmail' && pwd =="admin"){
    res.json({"msg":"your are correct"})
  }else{
    res.json({"msg":"you are wrong"})
  }
  
})

app.post("/register",(req,res)=>{
  //let email=req['query']['email'];
  //let pwd=req['query'] ['password'];
  let {name,email,pwd,address}=req['body'];
  console.log(name,email,pwd,address);
  if (!name|| !email || !pwd ||!address){
    res.json({"msg":"enter all details"})
  }else{
    res.json({"msg":"Registered"})
  }
  
})
app.listen(8080,()=>{
  console.log("server started");
}
)                                                                                                                                  