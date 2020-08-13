import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "../styles/Budget.css";

class Budget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <PieChart
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" },
          ]}
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
          animate
        />
      </div>
    );
  }
}

export default Budget;
