import React from "react";
import "../styles/Login.css";
import Button from "react-bootstrap/Button";

class Login extends React.Component {
  render() {
    return (
      <div className="App">
        <header>ChaperONE</header>
        <form>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>First Name: </label>
            <input className="form-control" placeholder="First Name" />
          </div>

          <div className="form-group">
            <label>Last Name: </label>
            <input className="form-control" placeholder="Last Name" />
          </div>

          <div className="form-group">
            <label>CustomerID: </label>
            <input className="form-control" placeholder="Customer ID" />
          </div>
          <Button>Login</Button>
        </form>
      </div>
    );
  }
}

export default Login;
