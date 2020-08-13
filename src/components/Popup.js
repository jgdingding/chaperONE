import React from "react";
import Login from "./Login";
import Budget from "./Budget";
import SetBudget from "./SetBudget";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = { stage: "Login", budgetCap: 0, customerInfo: {} };
  }

  handleLogin(firstName, lastName, customerID) {
    this.setState({
      stage: "SetBudget",
      customerInfo: {
        first: firstName,
        last: lastName,
        customerId: customerID,
      },
    });
  }

  saveBudget(value) {
    this.setState({ stage: "Budget", budgetCap: value });
  }

  editBudget() {
    this.setState({ stage: "SetBudget" });
  }

  render() {
    return (
      <div>
        {(() => {
          switch (this.state.stage) {
            case "Login":
              return <Login handleLogin={this.handleLogin.bind(this)} />;
            case "SetBudget":
              return <SetBudget saveBudget={this.saveBudget.bind(this)} />;
            case "Budget":
              return <Budget editBudget={this.editBudget.bind(this)} />;
            default:
              return <p> Something failed! Please restart extension. </p>;
          }
        })()}
      </div>
    );
  }
}

export default Popup;
