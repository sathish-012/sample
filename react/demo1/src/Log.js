import { useState } from "react";
function Log(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  
    async function validate() {
      if (email === "") {
        alert("email is empty");
      } else if (pass === "") {
        alert("phone is empty");
      } else {
        let data = {
          email: email,
          password: pass,
        };
        let res = await fetch("https://reqres.in/api/login", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "content-type": "application/json" },
        });
        let json = await res.json();
        if (json["token"]) {
          console.log(json["token"]);
        } else {
          alert("credentials are wrong");
        }
      }
    }
  
    return (
      <div>
        <div>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div>
          <input
            type="pass"
            id="pass"
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
        </div>
        <div>
          <button type="submit" id="submit" onClick={() => validate()}>
            Login
          </button>
        </div>
      </div>
    );
}
export default Log;




