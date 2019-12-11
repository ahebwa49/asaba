import React from "react";
import * as d3 from "d3";

const width = 650;
const height = 400;
const margin = {
  top: 20,
  right: 5,
  bottom: 20,
  left: 35
};

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  xAxis = d3.axisBottom();
  yAxis = d3.axisLeft();

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;

    if (!data) return {};

    const xExtent = d3.extent(data, d => d.date);
    // console.log(xExtent);

    const yExtent = d3.extent(data, d => d.price);
    // console.log(yExtent);

    const xScale = d3
      .scaleTime()
      .domain(xExtent)
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain(yExtent)
      .range([height - margin.bottom, margin.top]);

    return { xScale, yScale, data };
  }

  componentDidUpdate() {
    this.xAxis.scale(this.state.xScale);
    d3.select(this.refs.xAxis).call(this.xAxis);
    this.yAxis.scale(this.state.yScale);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    const styles = {
      container: {
        display: "grid",
        justifyItems: "center"
      }
    };
    const { xScale, yScale, data } = this.state;
    const line = d3
      .line()
      .x(d => xScale(d.date))
      .y(d => yScale(d.price));

    // console.log(line);
    const minY = d3.min(data, d => d.price);
    const area = d3
      .area()
      .x(d => xScale(d.date))
      .y0(d => yScale(minY))
      .y1(d => yScale(d.price));

    return (
      <div style={styles.container}>
        <h1 style={{ textAlign: "center" }}>30 day Bitcoin Price Chart</h1>
        <svg width={width} height={height}>
          <path
            id={"line"}
            d={line(data)}
            stroke="#6788ad"
            fill="transparent"
          />

          <path
            id={"area"}
            d={area(data)}
            fill="#6788ad"
            style={{ opacity: 0.2 }}
          />
          <g
            ref="xAxis"
            transform={`translate(0, ${height - margin.bottom})`}
          />
          <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
        </svg>
        <p style={{ textAlign: "center" }}>Powered by CoinDesk</p>
      </div>
    );
  }
}

export default LineChart;