import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <div>Name</div>
        <input name="name" placeholder="Name" type="text" />
      </div>
      <div>
        <div>Role</div>
        <input name="role" placeholder="Role" type="text" />
      </div>
      <div>
        <div>Email</div>
        <input name="email" placeholder="Email" type="text" />
      </div>
      <div>
        <div>Password</div>
        <input name="password" placeholder="Password" type="password" />
      </div>
      <button>Submit</button>
    </div>
  );
}

export default App;
