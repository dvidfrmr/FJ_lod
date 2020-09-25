import React from "react";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

document.addEventListener("DOMContentLoaded", () => {
  const chartOptions = {
    chart: {
      type: "column",
      zoomType: "xy",
    },
    title: {
      text: "First Test",
    },
    yAxis: {
      title: {
        text: " dollar",
      },
    },
  };
  /*$.get("test.csv", (csv) => {
    options.data = {
      csv,
    };*/
  fetch("test.csv")
    .then((res) => {
      return res.text();
    })
    .then((csv) => {
      chartOptions.data = {
        csv,
      };
    });

  Highcharts.chart("container", chartOptions);
});

const chartOptions = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};

export default class AnalyticChartWidget extends React.Component {
  render() {
    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
  }
}
