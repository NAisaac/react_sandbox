import React from 'react';
import { Component } from 'react';
import './App.css';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';


// https://medium.com/@Elijah_Meeks/interactive-applications-with-react-d3-f76f7b3ebc71
class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarCahrt = this.createBarChart.bind(this);
  }

  // whenever the component first mounts
  componentDidMount() {
    this.createBarChart();
  }

  // whenever the component receives new props/state fire
  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;
    const dataMax = max(this.props.data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect');

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove();

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#72a8ff')
      .attr('x', (d, i) => i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25);
  }
  // Pass a DOM container (i.e. svg) with reference to the actual DOM node generated by React
  render() {
    return <svg ref={node => this.node = node} width={500} height={500}></svg>
  }
}
export default BarChart
