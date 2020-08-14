/* global chrome */
import React from "react";
import Login from "./Login";
import Budget from "./Budget";
import SetBudget from "./SetBudget";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {};
    // this.init();
  }

  async componentDidMount() {
    let temp = {};
    await chrome.storage.sync.get(
      ["firstName", "lastName", "customerID", "budgetCap", "balance"],
      function (data) {
        const { firstName, lastName, customerID, budCap, bal } = data;
        console.log(firstName && lastName && customerID && budCap && bal);
        if (firstName && lastName && customerID && budCap && bal) {
          temp = {
            stage: "Budget",
            budgetCap: budCap,
            customerInfo: {
              firstName: firstName,
              lastName: lastName,
              customerID: customerID,
            },
            balance: bal,
          };
          console.log(this.state.stage);
        } else {
          temp = {
            stage: "Login",
            budgetCap: 0,
            customerInfo: {},
            balance: 0,
          };
        }
      }
    );
    this.setState(temp);
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
    this.setState({ stage: "Budget", budgetCap: value, balance: value });
    chrome.storage.sync.set({ budgetCap: value });
    chrome.storage.sync.set({ balance: value });
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
              return (
                <Budget
                  editBudget={this.editBudget.bind(this)}
                  budgetCap={this.state.budgetCap}
                  balance={this.state.balance}
                />
              );
            default:
              return <p> Something failed! Please restart extension. </p>;
          }
        })()}
      </div>
    );
  }
}

export default Popup;
