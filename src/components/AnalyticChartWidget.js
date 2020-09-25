import React from "react";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default class AnalyticChartWidget extends React.Component {
  render() {
    return <HighchartsReact highcharts={highcharts} option={options} />;
  }
}
