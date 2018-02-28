import React, { Component } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  ComposedChart,
  RadialBarChart,
  PieChart,
  Bar,
  Line,
  RadialBar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  Text
} from 'recharts';

class UnoRecharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Ta', value1: 8, value2: 20, value3: 90, value4a: 3, value4b: 10 },
        {name: 'st', value1: 11, value2: 10, value3: 85, value4a: 4, value4b: 9 },
        {name: 'eT', value1: 2, value2: 8, value3: 80, value4a: 5, value4b: 8 },
        {name: 'he', value1: 3, value2: 7, value3: 75, value4a: 6, value4b: 7 },
        {name: 'Ra', value1: 4, value2: 5, value3: 70, value4a: 7, value4b: 6 },
        {name: 'in', value1: 1, value2: 9, value3: 65, value4a: 8, value4b: 5 },
        {name: 'bo', value1: 10, value2: 15, value3: 60, value4a: 9, value4b: 4 },
        {name: 'w!', value1: 7, value2: 4, value3: 55, value4a: 10, value4b: 3 }
      ],
      colors: [ '#4B0082', '#9400D3', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000', '#FF9896' ]
    };
  }

  render() {
    return (
      <div className="charts grid-container">
        <div className="grid-item">
          <ResponsiveContainer width="80%" height={500}>
            <BarChart width={700} height={500} data={this.state.data}>
              <Bar dataKey="value1">
                {
                  this.state.data.map((d, i) => <Cell key={`cell-${i}`} fill={this.state.colors[i]}/>)
                }
              </Bar>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid-item">
          <ComposedChart width={700} height={500} data={this.state.data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value1" barSize={20} fill={this.state.colors[4]} />
            <Line type="monotone" dataKey="value2" stroke={this.state.colors[2]} />
          </ComposedChart>
        </div>
        <div className="grid-item">
          <RadialBarChart width={700} height={500} data={this.state.data} innerRadius="10%" outerRadius="100%" startAngle={180} endAngle={0}>
            <Text>Taste the Rainbow</Text>
            <RadialBar dataKey='value3' animationDuration={5000} animationEasting="ease-out" clockWise={true}>
              {
                this.state.data.map((d, i) => <Cell key={`cell-${i}`} fill={this.state.colors[i]}/>)
              }
            </RadialBar>
          </RadialBarChart>
        </div>
        <div className="grid-item">
          <PieChart width={700} height={500}>
            <Pie data={this.state.data} dataKey="value4a" nameKey="name" outerRadius={80} fill="#ffdd47" />
            <Pie data={this.state.data} dataKey="value4b" nameKey="name" innerRadius={100} outerRadius={120} fill="#1d5cf9" label />
          </PieChart>
        </div>
      </div>
    );
  }
}
export default UnoRecharts
