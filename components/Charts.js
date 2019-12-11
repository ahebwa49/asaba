import React from "react";
// import "./App.css";
import BarChart from "./visualization/BarChart";
import RadialChart from "./visualization/RadialChart";
import LineChart from "./visualization/LineChart";
import BitcoinChart from "./visualization/BitcoinChart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoinData: [],
      temps: {},
      city: "sf",
      range: []
    };
  }
  componentDidMount() {
    Promise.all([
      fetch(
        `https://raw.githubusercontent.com/sxywu/react-d3-example/master/public/sf.json`
      ),
      fetch(
        `https://raw.githubusercontent.com/sxywu/react-d3-example/master/public/ny.json`
      )
    ])
      .then(responses => Promise.all(responses.map(resp => resp.json())))
      .then(([sf, ny]) => {
        sf.forEach(day => (day.date = new Date(day.date)));
        ny.forEach(day => (day.date = new Date(day.date)));

        this.setState({ temps: { sf, ny } });
      });

    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          bitcoinData: Object.keys(data.bpi).map(date => {
            return {
              date: new Date(date),
              price: data.bpi[date]
            };
          })
        });
      })
      .catch(error => console.log(error));
  }

  updateRange = range => {
    this.setState({ range });
  };

  updateCity = e => this.setState({ city: e.target.value });

  render() {
    const { bitcoinData } = this.state;
    const data = this.state.temps[this.state.city];
    return (
      <div className="App" style={{ textAlign: "center", fontFamily: "dosis" }}>
        <h1>
          2017 temperatures for{" "}
          <select name="city" onChange={this.updateCity}>
            {[
              {
                label: "san Francisco",
                value: "sf"
              },
              { label: "New York", value: "ny" }
            ].map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </h1>
        <p>
          *warning: these are <em>not</em> meant to be good examples of data
          visualizations,
          <br />
          but just to show the possibility of using D3 and React*
        </p>
        <BarChart data={data} />
        <RadialChart data={data} />
        <LineChart data={data} />
        <p>
          (Weather data from{" "}
          <a href="wunderground.com" target="_new">
            wunderground.com
          </a>
          )
        </p>
        <BitcoinChart data={bitcoinData} />
      </div>
    );
  }
}
export default App;
