import React from "react";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const chartOptions: Highcharts.Options = {
  title: {
    text: "My chart"
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3]
    }
  ]
};

export default class AnalyticChartWidget extends React.Component {
  render() {
    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
  }
}
