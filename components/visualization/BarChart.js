import React from "react";
import * as d3 from "d3";
import moment from "moment";

const width = 650;
const height = 400;
const margin = {
  top: 20,
  right: 5,
  bottom: 20,
  left: 35
};

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: [],
      range: null
    };
  }

  xAxis = d3.axisBottom();
  yAxis = d3.axisLeft();

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data } = nextProps;
    const { range } = prevState;
    if (!data) return {};
    // console.log(data);

    // 1. map date to x-position
    const xExtent = d3.extent(data, d => d.date);
    const xScale = d3
      .scaleTime()
      .domain(xExtent)
      .range([margin.left, width - margin.right]);

    // 2. map high temperature to y-position
    const [min, max] = d3.extent(data, d => d.high);
    const yScale = d3
      .scaleLinear()
      .domain([Math.min(min, 0), max])
      .range([height - margin.bottom, margin.top]);

    // 3. map the avg temperature to color scale

    const colorExtent = d3.extent(data, d => d.avg).reverse();
    const colorScale = d3
      .scaleSequential()
      .domain(colorExtent)
      .interpolator(d3.interpolateRdYlBu);

    const bars = data.map(d => {
      const isColored =
        range === null || (range[0] < d.date && d.date < range[1]);
      return {
        x: xScale(d.date),
        y: yScale(d.high),
        height: yScale(d.low) - yScale(d.high),
        fill: isColored ? colorScale(d.avg) : "#CCC"
      };
    });
    return { bars, xScale, yScale };
  }

  componentDidMount() {
    this.brush = d3
      .brushX()
      .extent([
        [margin.left, margin.top], // top left
        [width - margin.right, height - margin.bottom] // bottom right
      ])
      .on("end", () => {
        const [minX, maxX] = d3.event.selection;
        const range = [
          this.state.xScale.invert(minX),
          this.state.xScale.invert(maxX)
        ];
        this.setState({
          range: range
        });
      });
    d3.select(this.refs.brush).call(this.brush);
  }

  componentDidUpdate() {
    this.xAxis.scale(this.state.xScale);
    d3.select(this.refs.xAxis).call(this.xAxis);
    this.yAxis.scale(this.state.yScale);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    const { range } = this.state;
    if (range) {
      var [startDate, endDate] = range;
    }

    return (
      <>
        <svg width={width} height={height}>
          {this.state.bars.map(d => (
            <rect x={d.x} y={d.y} width={2} height={d.height} fill={d.fill} />
          ))}
          <g
            ref="xAxis"
            transform={`translate(0, ${height - margin.bottom})`}
          />
          <g ref="yAxis" transform={`translate(${margin.left}, 0)`} />
          <g ref="brush" />
        </svg>
        {range && (
          <div>
            <h3> from: {moment(startDate).format("MMM DD YYYY")}</h3>
            <h3> to: {moment(endDate).format("MMM DD YYYY")}</h3>
          </div>
        )}
      </>
    );
  }
}
export default BarChart;
